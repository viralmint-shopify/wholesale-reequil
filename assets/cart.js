class CartRemoveButton extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('click', (event) => {
      event.preventDefault();
      if(document.getElementById("CartDrawer-Checkout")){document.getElementById("CartDrawer-Checkout").disabled = true}
      if(document.getElementById("checkout")){document.getElementById("checkout").disabled = true}
      const cartItems = this.closest('cart-items') || this.closest('cart-drawer-items');
      cartItems.updateQuantity(this.dataset.index, 0);
    });
  }
}

customElements.define('cart-remove-button', CartRemoveButton);

class CartItems extends HTMLElement {
  constructor() {
    super();

    this.lineItemStatusElement = document.getElementById('shopping-cart-line-item-status') || document.getElementById('CartDrawer-LineItemStatus');

    this.currentItemCount = Array.from(this.querySelectorAll('[name="updates[]"]'))
      .reduce((total, quantityInput) => total + parseInt(quantityInput.value), 0);

    this.debouncedOnChange = debounce((event) => {
      this.onChange(event);
    }, 300);

    this.addEventListener('change', this.debouncedOnChange.bind(this));
  }

  onChange(event) {
    if(document.getElementById("CartDrawer-Checkout")){document.getElementById("CartDrawer-Checkout").disabled = true}
    if(document.getElementById("checkout")){document.getElementById("checkout").disabled = true}
    this.updateQuantity(event.target.dataset.index, event.target.value, document.activeElement.getAttribute('name'));
  }

  getSectionsToRender() {
    return [
      {
        id: 'main-cart-items',
        section: document.getElementById('main-cart-items').dataset.id,
        selector: '.js-contents',
      },
      {
        id: 'cart-icon-bubble',
        section: 'cart-icon-bubble',
        selector: '.shopify-section'
      },
      {
        id: 'cart-live-region-text',
        section: 'cart-live-region-text',
        selector: '.shopify-section'
      },
      {
        id: 'main-cart-footer',
        section: document.getElementById('main-cart-footer').dataset.id,
        selector: '.js-contents-wrap',
      }    
    ];
  }

  updateQuantity(line, quantity, name) {
    this.enableLoading(line);

    const body = JSON.stringify({
      line,
      quantity,
      sections: this.getSectionsToRender().map((section) => section.section),
      sections_url: window.location.pathname
    });

    fetch(`${routes.cart_change_url}`, { ...fetchConfig(), ...{ body } })
      .then((response) => {
        return response.text();
      })
      .then((state) => {
        const parsedState = JSON.parse(state);
        this.classList.toggle('is-empty', parsedState.item_count === 0);
        const cartDrawerWrapper = document.querySelector('cart-drawer');
        const cartFooter = document.getElementById('main-cart-footer'); 
        const cartOffer = document.getElementById('RQ-cart-page-offer-collection');
        const cartRecommendation = document.getElementById('RQ-cart-recommendation');
        let  NotSampleFind = 0;let OfferProduct = 0;

        if( $('[name="Eligible_products"]').length > 0){  
          var REQUIREMENT_MEETS = $('[name="Eligible_products"]').attr('minimum');
          var HAVE_MEETS = parsedState.total_price;
          var FREE_PRODUCT_IDS = $('[name="Free_products"]').val().split(",");
          var FREE_PRODUCT_IDS_LENGTH = FREE_PRODUCT_IDS.map(Number).length; 
        }

        console.log(HAVE_MEETS);


        $(parsedState.items).each(function (index, item) {
            if(item.properties){ if(item.properties['__samplePro'] == 'true' || item.properties['__samplePro']  || item.properties['__freegift'] == 'true') {}else{NotSampleFind++;} }
        }) 

        
        if( NotSampleFind != 0){

          if( $('[name="Eligible_products"]').length > 0){  
  
          var ELIGIBLE_PRODUCT_IDS = $('[name="Eligible_products"]').val().split(",");
              ELIGIBLE_PRODUCT_IDS = ELIGIBLE_PRODUCT_IDS.map(Number);
              console.log(ELIGIBLE_PRODUCT_IDS); 
          var EligibleProductAdd = false  

            $(parsedState.items).each(function (index, item) {
                $.each(ELIGIBLE_PRODUCT_IDS, function (index, id) {
                    if (id == item.product_id) {
                      EligibleProductAdd = true;
                    }
                });
            });

          if( EligibleProductAdd == true){
            
              $(parsedState.items).each(function (index, item) {
                  if(item.properties){
                    if(item.properties['__freegift'] == 'true') {
                     OfferProduct++;
                    }else{}
                  }
              }); 

            if( (OfferProduct == 0) && (parseInt(HAVE_MEETS) >= parseInt(REQUIREMENT_MEETS)) ){
              
            var EligiblePd = [];
            var FREE_PRODUCT_IDS = $('[name="Free_products"]').val().split(",");
                FREE_PRODUCT_IDS = FREE_PRODUCT_IDS.map(Number); 

                $.each(FREE_PRODUCT_IDS, function (index, vd) {
                  var l = '{"id":' + vd + ', "quantity" : ' + 1 + ',"properties": {"__freegift": true}'+ "}";
                  EligiblePd.push(JSON.parse(l));
                })

                $.post("/cart/add.js", {
                    items: EligiblePd
                }).done(function(response) {
                    if (cartFooter) cartFooter.classList.toggle('is-empty', parsedState.item_count === 0);
                    if (cartDrawerWrapper) cartDrawerWrapper.classList.toggle('is-empty', parsedState.item_count === 0);
                    if (cartOffer) cartOffer.classList.toggle('hidden', parsedState.item_count === 0);
                    if (cartRecommendation) cartRecommendation.classList.toggle('hidden', parsedState.item_count === 0);
                    fetch(window.Shopify.routes.root + "?section_id=cart-icon-bubble").then(request => request.text()).then(response => {
                        const bubbleHTML = new DOMParser().parseFromString(response, 'text/html').querySelector('.shopify-section').innerHTML;
                        const bubble = document.querySelector('#cart-icon-bubble');
                        bubble.innerHTML = bubbleHTML;
                    })
                    fetch(window.Shopify.routes.root + "?section_id=cart-drawer").then(res => res.text()).then(data => {
                        const newHTML = new DOMParser().parseFromString(data, 'text/html').querySelector('cart-drawer').innerHTML;
                        const drawer = document.querySelector('cart-drawer');
                        drawer.innerHTML = newHTML;
                    });
                  if (cartFooter){
                    fetch(window.Shopify.routes.root + "?section_id=main-cart-items").then(res => res.text()).then(data => {
                        const cart_page_newHTML = new DOMParser().parseFromString(data, 'text/html').querySelector('cart-items').innerHTML;
                        const cart_page = document.querySelector('cart-items');
                        cart_page.innerHTML = cart_page_newHTML;
                    });   
                  }
                })
              
            }else{

              if( (OfferProduct > 0) && (parseInt(HAVE_MEETS) >= parseInt(REQUIREMENT_MEETS)) ){

                if (cartFooter) cartFooter.classList.toggle('is-empty', parsedState.item_count === 0);
                if (cartDrawerWrapper) cartDrawerWrapper.classList.toggle('is-empty', parsedState.item_count === 0);
                if (cartOffer) cartOffer.classList.toggle('hidden', parsedState.item_count === 0);
                if (cartRecommendation) cartRecommendation.classList.toggle('hidden', parsedState.item_count === 0);
                this.getSectionsToRender().forEach((section => {
                  const elementToReplace =
                    document.getElementById(section.id).querySelector(section.selector) || document.getElementById(section.id);
                  elementToReplace.innerHTML =
                    this.getSectionInnerHTML(parsedState.sections[section.section], section.selector);
                }));
                this.updateLiveRegions(line, parsedState.item_count);
                const lineItem = document.getElementById(`CartItem-${line}`) || document.getElementById(`CartDrawer-Item-${line}`);
                if (lineItem && lineItem.querySelector(`[name="${name}"]`)) {
                  cartDrawerWrapper ? trapFocus(cartDrawerWrapper, lineItem.querySelector(`[name="${name}"]`)) : lineItem.querySelector(`[name="${name}"]`).focus();
                } else if (parsedState.item_count === 0 && cartDrawerWrapper) {
                  trapFocus(cartDrawerWrapper.querySelector('.drawer__inner-empty'), cartDrawerWrapper.querySelector('a'))
                } else if (document.querySelector('.cart-item') && cartDrawerWrapper) {
                  trapFocus(cartDrawerWrapper, document.querySelector('.cart-item__name'))
                }
                this.disableLoading();
                
              }else if( (OfferProduct == 0) && (parseInt(HAVE_MEETS) < parseInt(REQUIREMENT_MEETS)) ){

                if (cartFooter) cartFooter.classList.toggle('is-empty', parsedState.item_count === 0);
                if (cartDrawerWrapper) cartDrawerWrapper.classList.toggle('is-empty', parsedState.item_count === 0);
                if (cartOffer) cartOffer.classList.toggle('hidden', parsedState.item_count === 0);
                if (cartRecommendation) cartRecommendation.classList.toggle('hidden', parsedState.item_count === 0);
        
                this.getSectionsToRender().forEach((section => {
                  const elementToReplace =
                    document.getElementById(section.id).querySelector(section.selector) || document.getElementById(section.id);
                  elementToReplace.innerHTML =
                    this.getSectionInnerHTML(parsedState.sections[section.section], section.selector);
                }));
        
                this.updateLiveRegions(line, parsedState.item_count);
                const lineItem = document.getElementById(`CartItem-${line}`) || document.getElementById(`CartDrawer-Item-${line}`);
                if (lineItem && lineItem.querySelector(`[name="${name}"]`)) {
                  cartDrawerWrapper ? trapFocus(cartDrawerWrapper, lineItem.querySelector(`[name="${name}"]`)) : lineItem.querySelector(`[name="${name}"]`).focus();
                } else if (parsedState.item_count === 0 && cartDrawerWrapper) {
                  trapFocus(cartDrawerWrapper.querySelector('.drawer__inner-empty'), cartDrawerWrapper.querySelector('a'))
                } else if (document.querySelector('.cart-item') && cartDrawerWrapper) {
                  trapFocus(cartDrawerWrapper, document.querySelector('.cart-item__name'))
                }
                this.disableLoading();
                
              }else if( (OfferProduct > 0) && (parseInt(HAVE_MEETS) < parseInt(REQUIREMENT_MEETS)) ){
                var REMOVE_FREE_PRODUCTS = '';
                $.when(jQuery.getJSON('/cart.js', function (cart) {
                  $(cart.items).each(function (index, item) {
                    if(item.properties){
                        if(item.properties["__freegift"] === "true"){
                          REMOVE_FREE_PRODUCTS += `&updates[${item.key}]=0`;
                        }
                     }
                  });
                })
                ).then(function () {
                  $.ajax({
                    type: 'POST',
                    url: '/cart/update.js',
                    data: REMOVE_FREE_PRODUCTS,
                    dataType: 'json',
                    success: function (response) {
                        if (cartFooter) cartFooter.classList.toggle('is-empty', parsedState.item_count === 0);
                        if (cartDrawerWrapper) cartDrawerWrapper.classList.toggle('is-empty', parsedState.item_count === 0);
                        if (cartOffer) cartOffer.classList.toggle('hidden', parsedState.item_count === 0);
                        if (cartRecommendation) cartRecommendation.classList.toggle('hidden', parsedState.item_count === 0);
                        fetch(window.Shopify.routes.root + "?section_id=cart-icon-bubble").then(request => request.text()).then(response => {
                            const bubbleHTML = new DOMParser().parseFromString(response, 'text/html').querySelector('.shopify-section').innerHTML;
                            const bubble = document.querySelector('#cart-icon-bubble');
                            bubble.innerHTML = bubbleHTML;
                        })
                        fetch(window.Shopify.routes.root + "?section_id=cart-drawer").then(res => res.text()).then(data => {
                            const newHTML = new DOMParser().parseFromString(data, 'text/html').querySelector('cart-drawer').innerHTML;
                            const drawer = document.querySelector('cart-drawer');
                            drawer.innerHTML = newHTML;
                        });
                        if (cartFooter){
                          fetch(window.Shopify.routes.root + "?section_id=main-cart-items").then(res => res.text()).then(data => {
                              const cart_page_newHTML = new DOMParser().parseFromString(data, 'text/html').querySelector('cart-items').innerHTML;
                              const cart_page = document.querySelector('cart-items');
                              cart_page.innerHTML = cart_page_newHTML;
                          });   
                        }    
                    }
                  });
                });
                
              }
              
            }
            
          }else{

              $(parsedState.items).each(function (index, item) {
                  if(item.properties){
                    if(item.properties['__freegift'] == 'true') {
                     OfferProduct++;
                    }else{}
                  }
              });   
              if( (OfferProduct > 0) && (parseInt(HAVE_MEETS) < parseInt(REQUIREMENT_MEETS)) ){
  
                  var REMOVE_FREE_PRODUCTS = '';
                  $.when(jQuery.getJSON('/cart.js', function (cart) {
                    $(cart.items).each(function (index, item) {
                      if(item.properties){
                          if(item.properties["__freegift"] === "true"){
                            REMOVE_FREE_PRODUCTS += `&updates[${item.key}]=0`;
                          }
                       }
                    });
                  })
                  ).then(function () {
                    $.ajax({
                      type: 'POST',
                      url: '/cart/update.js',
                      data: REMOVE_FREE_PRODUCTS,
                      dataType: 'json',
                      success: function (response) {
                          if (cartFooter) cartFooter.classList.toggle('is-empty', parsedState.item_count === 0);
                          if (cartDrawerWrapper) cartDrawerWrapper.classList.toggle('is-empty', parsedState.item_count === 0);
                          if (cartOffer) cartOffer.classList.toggle('hidden', parsedState.item_count === 0);
                          if (cartRecommendation) cartRecommendation.classList.toggle('hidden', parsedState.item_count === 0);
                          fetch(window.Shopify.routes.root + "?section_id=cart-icon-bubble").then(request => request.text()).then(response => {
                              const bubbleHTML = new DOMParser().parseFromString(response, 'text/html').querySelector('.shopify-section').innerHTML;
                              const bubble = document.querySelector('#cart-icon-bubble');
                              bubble.innerHTML = bubbleHTML;
                          })
                          fetch(window.Shopify.routes.root + "?section_id=cart-drawer").then(res => res.text()).then(data => {
                              const newHTML = new DOMParser().parseFromString(data, 'text/html').querySelector('cart-drawer').innerHTML;
                              const drawer = document.querySelector('cart-drawer');
                              drawer.innerHTML = newHTML;
                          });
                          if (cartFooter){
                            fetch(window.Shopify.routes.root + "?section_id=main-cart-items").then(res => res.text()).then(data => {
                                const cart_page_newHTML = new DOMParser().parseFromString(data, 'text/html').querySelector('cart-items').innerHTML;
                                const cart_page = document.querySelector('cart-items');
                                cart_page.innerHTML = cart_page_newHTML;
                            });   
                          }    
                      }
                    });
                  });
                
            }else if( (OfferProduct > 0) && (EligibleProductAdd == false) ){

                var REMOVE_FREE_PRODUCTS = '';
                $.when(jQuery.getJSON('/cart.js', function (cart) {
                  $(cart.items).each(function (index, item) {
                    if(item.properties){
                        if(item.properties["__freegift"] === "true"){
                          REMOVE_FREE_PRODUCTS += `&updates[${item.key}]=0`;
                        }
                     }
                  });
                })
                ).then(function () {
                  $.ajax({
                    type: 'POST',
                    url: '/cart/update.js',
                    data: REMOVE_FREE_PRODUCTS,
                    dataType: 'json',
                    success: function (response) {
                        if (cartFooter) cartFooter.classList.toggle('is-empty', parsedState.item_count === 0);
                        if (cartDrawerWrapper) cartDrawerWrapper.classList.toggle('is-empty', parsedState.item_count === 0);
                        if (cartOffer) cartOffer.classList.toggle('hidden', parsedState.item_count === 0);
                        if (cartRecommendation) cartRecommendation.classList.toggle('hidden', parsedState.item_count === 0);
                        fetch(window.Shopify.routes.root + "?section_id=cart-icon-bubble").then(request => request.text()).then(response => {
                            const bubbleHTML = new DOMParser().parseFromString(response, 'text/html').querySelector('.shopify-section').innerHTML;
                            const bubble = document.querySelector('#cart-icon-bubble');
                            bubble.innerHTML = bubbleHTML;
                        })
                        fetch(window.Shopify.routes.root + "?section_id=cart-drawer").then(res => res.text()).then(data => {
                            const newHTML = new DOMParser().parseFromString(data, 'text/html').querySelector('cart-drawer').innerHTML;
                            const drawer = document.querySelector('cart-drawer');
                            drawer.innerHTML = newHTML;
                        });
                        if (cartFooter){
                          fetch(window.Shopify.routes.root + "?section_id=main-cart-items").then(res => res.text()).then(data => {
                              const cart_page_newHTML = new DOMParser().parseFromString(data, 'text/html').querySelector('cart-items').innerHTML;
                              const cart_page = document.querySelector('cart-items');
                              cart_page.innerHTML = cart_page_newHTML;
                          });   
                        }    
                    }
                  });
                });
              
            }else{
          
                if (cartFooter) cartFooter.classList.toggle('is-empty', parsedState.item_count === 0);
                if (cartDrawerWrapper) cartDrawerWrapper.classList.toggle('is-empty', parsedState.item_count === 0);
                if (cartOffer) cartOffer.classList.toggle('hidden', parsedState.item_count === 0);
                if (cartRecommendation) cartRecommendation.classList.toggle('hidden', parsedState.item_count === 0);
                this.getSectionsToRender().forEach((section => {
                  const elementToReplace =
                    document.getElementById(section.id).querySelector(section.selector) || document.getElementById(section.id);
                  elementToReplace.innerHTML =
                    this.getSectionInnerHTML(parsedState.sections[section.section], section.selector);
                }));
                this.updateLiveRegions(line, parsedState.item_count);
                const lineItem = document.getElementById(`CartItem-${line}`) || document.getElementById(`CartDrawer-Item-${line}`);
                if (lineItem && lineItem.querySelector(`[name="${name}"]`)) {
                  cartDrawerWrapper ? trapFocus(cartDrawerWrapper, lineItem.querySelector(`[name="${name}"]`)) : lineItem.querySelector(`[name="${name}"]`).focus();
                } else if (parsedState.item_count === 0 && cartDrawerWrapper) {
                  trapFocus(cartDrawerWrapper.querySelector('.drawer__inner-empty'), cartDrawerWrapper.querySelector('a'))
                } else if (document.querySelector('.cart-item') && cartDrawerWrapper) {
                  trapFocus(cartDrawerWrapper, document.querySelector('.cart-item__name'))
                }
                this.disableLoading();
  
            }            

            
          }

        }
          else{

            if (cartFooter) cartFooter.classList.toggle('is-empty', parsedState.item_count === 0);
            if (cartDrawerWrapper) cartDrawerWrapper.classList.toggle('is-empty', parsedState.item_count === 0);
            if (cartOffer) cartOffer.classList.toggle('hidden', parsedState.item_count === 0);
            if (cartRecommendation) cartRecommendation.classList.toggle('hidden', parsedState.item_count === 0);
    
            this.getSectionsToRender().forEach((section => {
              const elementToReplace =
                document.getElementById(section.id).querySelector(section.selector) || document.getElementById(section.id);
              elementToReplace.innerHTML =
                this.getSectionInnerHTML(parsedState.sections[section.section], section.selector);
            }));
    
            this.updateLiveRegions(line, parsedState.item_count);
            const lineItem = document.getElementById(`CartItem-${line}`) || document.getElementById(`CartDrawer-Item-${line}`);
            if (lineItem && lineItem.querySelector(`[name="${name}"]`)) {
              cartDrawerWrapper ? trapFocus(cartDrawerWrapper, lineItem.querySelector(`[name="${name}"]`)) : lineItem.querySelector(`[name="${name}"]`).focus();
            } else if (parsedState.item_count === 0 && cartDrawerWrapper) {
              trapFocus(cartDrawerWrapper.querySelector('.drawer__inner-empty'), cartDrawerWrapper.querySelector('a'))
            } else if (document.querySelector('.cart-item') && cartDrawerWrapper) {
              trapFocus(cartDrawerWrapper, document.querySelector('.cart-item__name'))
            }
            this.disableLoading();
            
          }
            
        }else{

            fetch('/cart/clear', { ...fetchConfig(), ...{ body } })
              .then((response) => {
                return response.text();
              })
              .then((state) => {
              const parsedState = JSON.parse(state);
              this.classList.toggle('is-empty', parsedState.item_count === 0);
              const cartDrawerWrapper = document.querySelector('cart-drawer');
              const cartFooter = document.getElementById('main-cart-footer'); 
              const cartOffer = document.getElementById('RQ-cart-page-offer-collection');
              const cartRecommendation = document.getElementById('RQ-cart-recommendation');

              if (cartFooter) cartFooter.classList.toggle('is-empty', parsedState.item_count === 0);  
              if (cartDrawerWrapper) cartDrawerWrapper.classList.toggle('is-empty', parsedState.item_count === 0);
              if (cartOffer) cartOffer.classList.toggle('hidden', parsedState.item_count === 0);  
              if (cartRecommendation) cartRecommendation.classList.toggle('hidden', parsedState.item_count === 0);
      
              this.getSectionsToRender().forEach((section => {
                const elementToReplace =
                  document.getElementById(section.id).querySelector(section.selector) || document.getElementById(section.id);
                elementToReplace.innerHTML =
                  this.getSectionInnerHTML(parsedState.sections[section.section], section.selector);
              }));
      
              this.updateLiveRegions(line, parsedState.item_count);
              const lineItem = document.getElementById(`CartItem-${line}`) || document.getElementById(`CartDrawer-Item-${line}`);
              if (lineItem && lineItem.querySelector(`[name="${name}"]`)) {
                cartDrawerWrapper ? trapFocus(cartDrawerWrapper, lineItem.querySelector(`[name="${name}"]`)) : lineItem.querySelector(`[name="${name}"]`).focus();
              } else if (parsedState.item_count === 0 && cartDrawerWrapper) {
                trapFocus(cartDrawerWrapper.querySelector('.drawer__inner-empty'), cartDrawerWrapper.querySelector('a'))
              } else if (document.querySelector('.cart-item') && cartDrawerWrapper) {
                trapFocus(cartDrawerWrapper, document.querySelector('.cart-item__name'))
              }
              this.disableLoading();
                
             }).catch(() => {
              this.querySelectorAll('.loading-overlay').forEach((overlay) => overlay.classList.add('hidden'));
              const errors = document.getElementById('cart-errors') || document.getElementById('CartDrawer-CartErrors');
              errors.textContent = window.cartStrings.error;
              this.disableLoading();
            });
                  
        }

        if( $('#RQ-cart-page-offer-collection').length > 0 ){
          if( HAVE_MEETS >= 100000){$('#RQ-cart-page-offer-collection').removeClass('hidden'); }else{$('#RQ-cart-page-offer-collection').addClass('hidden');}        
        }
              jQuery.ajax({
        type: 'GET',
        url: '/cart',
        dataType: 'html',
        success: function(response){
           $(".cart__ctas").html($(response).find(".cart__ctas").html());
        }
      });

 //           if (window.location.href.indexOf("/cart") > -1) {
 //             var get_tottal_quanity = 0;
 //          var free_pro_exist = 0;
 //          $(".custom_cart_page_wrapp").each(function() {
 //            var freepro_add = $(this).attr("freepro-add");
 //            var data_pro_id = $(this).attr("addition_pro-id");
 //            if(data_pro_id== '37643060052154'){
 //                free_pro_exist += parseInt(1);;
 //            }
          
 //           if(freepro_add == 'true'){
 //            var total_quantity =  $(this).find(".custom_quanity:visible .quantity input.quantity__input").val();
 //             get_tottal_quanity+=parseInt(total_quantity);
 //           }
 //          });
 //        if(free_pro_exist == 0){
 //                    if(get_tottal_quanity > 1){
 //              jQuery.ajax({
 //    type: 'POST',
 //    url: '/cart/add.js',
 //    data:{
 //      id: 37643060052154,
 //      properties: {"__freegift": "true"},
 //      quantity:1,
 //    },
 //    dataType: 'json',
 //    success: function(productid){
 //      jQuery.ajax({
 //        type: 'GET',
 //        url: '/cart',
 //        dataType: 'html',
 //        success: function(response){      
 //                              fetch(window.Shopify.routes.root + "?section_id=cart-icon-bubble").then(request => request.text()).then(response => {
 //                                  const bubbleHTML = new DOMParser().parseFromString(response, 'text/html').querySelector('.shopify-section').innerHTML;
 //                                  const bubble = document.querySelector('#cart-icon-bubble');
 //                                  bubble.innerHTML = bubbleHTML;
 //                              })
 //                              fetch(window.Shopify.routes.root + "?section_id=cart-drawer").then(res => res.text()).then(data => {
 //                                  const newHTML = new DOMParser().parseFromString(data, 'text/html').querySelector('cart-drawer').innerHTML;
 //                                  const drawer = document.querySelector('cart-drawer');
 //                                  drawer.innerHTML = newHTML;
 //                              });
 //                                            fetch(window.Shopify.routes.root + "?section_id=main-cart-items").then(res => res.text()).then(data => {
 //                              const cart_page_newHTML = new DOMParser().parseFromString(data, 'text/html').querySelector('cart-items').innerHTML;
 //                              const cart_page = document.querySelector('cart-items');
 //                              cart_page.innerHTML = cart_page_newHTML;
 //                          });
 //        },
 //      });
 //    },
 //  });

 //          }
 //        }
 // }else{
 //             var get_tottal_quanity = 0;
 //          var free_pro_exist = 0;
 //          $(".cart-item").each(function() {
 //            var freepro_add = $(this).attr("freepro-add");
 //            var data_pro_id = $(this).attr("addition_pro-id");
 //            if(data_pro_id== '37643060052154'){
 //                free_pro_exist += parseInt(1);;
 //            }
          
 //           if(freepro_add == 'true'){
 //            var total_quantity =  $(this).find(".quantity input.quantity__input").val();
 //             get_tottal_quanity+=parseInt(total_quantity);
 //           }
 //          });
 //        if(free_pro_exist == 0){
 //                    if(get_tottal_quanity > 1){
 //              jQuery.ajax({
 //    type: 'POST',
 //    url: '/cart/add.js',
 //    data:{
 //      id: 37643060052154,
 //      properties: {"__freegift": "true"},
 //      quantity:1,
 //    },
 //    dataType: 'json',
 //    success: function(productid){
 //      jQuery.ajax({
 //        type: 'GET',
 //        url: '/cart',
 //        dataType: 'html',
 //        success: function(response){      
 //                              fetch(window.Shopify.routes.root + "?section_id=cart-icon-bubble").then(request => request.text()).then(response => {
 //                                  const bubbleHTML = new DOMParser().parseFromString(response, 'text/html').querySelector('.shopify-section').innerHTML;
 //                                  const bubble = document.querySelector('#cart-icon-bubble');
 //                                  bubble.innerHTML = bubbleHTML;
 //                              })
 //                              fetch(window.Shopify.routes.root + "?section_id=cart-drawer").then(res => res.text()).then(data => {
 //                                  const newHTML = new DOMParser().parseFromString(data, 'text/html').querySelector('cart-drawer').innerHTML;
 //                                  const drawer = document.querySelector('cart-drawer');
 //                                  drawer.innerHTML = newHTML;
 //                              });
 //                                            fetch(window.Shopify.routes.root + "?section_id=main-cart-items").then(res => res.text()).then(data => {
 //                              const cart_page_newHTML = new DOMParser().parseFromString(data, 'text/html').querySelector('cart-items').innerHTML;
 //                              const cart_page = document.querySelector('cart-items');
 //                              cart_page.innerHTML = cart_page_newHTML;
 //                          });
 //        },
 //      });
 //    },
 //  });

 //          }
 //        }
 // }
        
      }).catch(() => {
        
        this.querySelectorAll('.loading-overlay').forEach((overlay) => overlay.classList.add('hidden'));
        const errors = document.getElementById('cart-errors') || document.getElementById('CartDrawer-CartErrors');
        errors.textContent = window.cartStrings.error;
        this.disableLoading();
      });
  }

  updateLiveRegions(line, itemCount) {
    if (this.currentItemCount === itemCount) {
      const lineItemError = document.getElementById(`Line-item-error-${line}`) || document.getElementById(`CartDrawer-LineItemError-${line}`);
      const quantityElement = document.getElementById(`Quantity-${line}`) || document.getElementById(`Drawer-quantity-${line}`);
      lineItemError
        .querySelector('.cart-item__error-text')
        .innerHTML = window.cartStrings.quantityError.replace(
          '[quantity]',
          quantityElement.value
        );
    }

    this.currentItemCount = itemCount;
    this.lineItemStatusElement.setAttribute('aria-hidden', true);

    const cartStatus = document.getElementById('cart-live-region-text') || document.getElementById('CartDrawer-LiveRegionText');
    cartStatus.setAttribute('aria-hidden', false);

    setTimeout(() => {
      cartStatus.setAttribute('aria-hidden', true);
    }, 1000);
  }

  getSectionInnerHTML(html, selector) {
    return new DOMParser()
      .parseFromString(html, 'text/html')
      .querySelector(selector).innerHTML;
  }

  enableLoading(line) {
    const mainCartItems = document.getElementById('main-cart-items') || document.getElementById('CartDrawer-CartItems');
    mainCartItems.classList.add('cart__items--disabled');

    const cartItemElements = this.querySelectorAll(`#CartItem-${line} .loading-overlay`);
    const cartDrawerItemElements = this.querySelectorAll(`#CartDrawer-Item-${line} .loading-overlay`);

    [...cartItemElements, ...cartDrawerItemElements].forEach((overlay) => overlay.classList.remove('hidden'));

    document.activeElement.blur();
    this.lineItemStatusElement.setAttribute('aria-hidden', false);
  }

  disableLoading() {
    const mainCartItems = document.getElementById('main-cart-items') || document.getElementById('CartDrawer-CartItems');
    mainCartItems.classList.remove('cart__items--disabled');
    if(document.getElementById("CartDrawer-Checkout")){document.getElementById("CartDrawer-Checkout").disabled = false}
    if(document.getElementById("checkout")){document.getElementById("checkout").disabled = false}    
  }
}

customElements.define('cart-items', CartItems);

if (!customElements.get('cart-note')) {
  customElements.define('cart-note', class CartNote extends HTMLElement {
    constructor() {
      super();

      this.addEventListener('change', debounce((event) => {
        const body = JSON.stringify({ note: event.target.value });
        fetch(`${routes.cart_update_url}`, { ...fetchConfig(), ...{ body } });
      }, 300))
    }
  });
};
