if (!customElements.get('product-form')) {
  customElements.define('product-form', class ProductForm extends HTMLElement {
    constructor() {
      super();

      this.form = this.querySelector('form');
      this.form.querySelector('[name=id]').disabled = false;
      if (this.form && this.form.querySelector('[name=quantity]')) {
        this.form.querySelector('[name=quantity]').disabled = false;
    }
      this.form.addEventListener('submit', this.onSubmitHandler.bind(this));
      this.cart = document.querySelector('cart-notification') || document.querySelector('cart-drawer');
      this.submitButton = this.querySelector('[type="submit"]');
      if (document.querySelector('cart-drawer')) this.submitButton.setAttribute('aria-haspopup', 'dialog');
    }

    onSubmitHandler(evt) {
      evt.preventDefault();

      if (this.submitButton.getAttribute('aria-disabled') === 'true') return;

      this.handleErrorMessage();

      this.submitButton.setAttribute('aria-disabled', true);
      this.submitButton.classList.add('loading');
      this.querySelector('.loading-overlay__spinner').classList.remove('hidden');

      const config = fetchConfig('javascript');
      config.headers['X-Requested-With'] = 'XMLHttpRequest';
      delete config.headers['Content-Type'];

      const formData = new FormData(this.form);
      if (this.cart) {
        formData.append('sections', this.cart.getSectionsToRender().map((section) => section.id));
        formData.append('sections_url', window.location.pathname);
        this.cart.setActiveElement(document.activeElement);
      }
      config.body = formData;

      fetch(`${routes.cart_add_url}`, config)
        .then((response) => response.json())
        .then((response) => {
          if (response.status) {
            this.handleErrorMessage(response.description);

            const soldOutMessage = this.submitButton.querySelector('.sold-out-message');
            if (!soldOutMessage) return;
            this.submitButton.setAttribute('aria-disabled', true);
            this.submitButton.querySelector('span').classList.add('hidden');
            soldOutMessage.classList.remove('hidden');
            this.error = true;
            return;
          } else if (!this.cart) {
            window.location = window.routes.cart_url;
            return;
          }

          this.error = false;
          const quickAddModal = this.closest('quick-add-modal');
          if (quickAddModal) {
            document.body.addEventListener('modalClosed', () => {
              setTimeout(() => { this.cart.renderContents(response) });
            }, { once: true });
            quickAddModal.hide(true);
          } else {
            this.cart.renderContents(response);
          }

  //         var get_tottal_quanity = 0;
  //         var free_pro_exist = 0;
  //         $(".cart-item").each(function() {
  //           var freepro_add = $(this).attr("freepro-add");
  //           var data_pro_id = $(this).attr("addition_pro-id");
  //           if(data_pro_id== '37643060052154'){
  //               free_pro_exist += parseInt(1);;
  //           }
           
  //          if(freepro_add == 'true'){
  //           var total_quantity =  $(this).find(".quantity input.quantity__input").val();

  //            get_tottal_quanity+=parseInt(total_quantity);
  //          }
  //         });
  //       if(free_pro_exist == 0){
  //                   if(get_tottal_quanity > 1){
  //             jQuery.ajax({
  //   type: 'POST',
  //   url: '/cart/add.js',
  //   data:{
  //     id: 37643060052154,
  //      properties: {"__freegift": "true"},
  //     quantity:1,
  //   },
  //   dataType: 'json',
  //   success: function(productid){
  //     jQuery.ajax({
  //       type: 'GET',
  //       url: '/cart',
  //       dataType: 'html',
  //       success: function(response){      
  //                             fetch(window.Shopify.routes.root + "?section_id=cart-icon-bubble").then(request => request.text()).then(response => {
  //                                 const bubbleHTML = new DOMParser().parseFromString(response, 'text/html').querySelector('.shopify-section').innerHTML;
  //                                 const bubble = document.querySelector('#cart-icon-bubble');
  //                                 bubble.innerHTML = bubbleHTML;
  //                             })
  //                             fetch(window.Shopify.routes.root + "?section_id=cart-drawer").then(res => res.text()).then(data => {
  //                                 const newHTML = new DOMParser().parseFromString(data, 'text/html').querySelector('cart-drawer').innerHTML;
  //                                 const drawer = document.querySelector('cart-drawer');
  //                                 drawer.innerHTML = newHTML;
  //                             });
  //       },
  //     });
  //   },
  // });

  //         }
  //       }

          
        })
        .catch((e) => {
          console.error(e);
        })
        .finally(() => {     
          if ($('[name="Eligible_products"]').length > 0) {
              var REQUIREMENT_MEETS = $('[name="Eligible_products"]').attr('minimum');
              var HAVE_MEETS = this.cart.querySelector('.totals__subtotal-value').getAttribute("cart_minimum");
              if (parseInt(HAVE_MEETS) >= parseInt(REQUIREMENT_MEETS)) {
                  var EligiblePd = [];
                  var ELIGIBLE_PRODUCT_IDS = $('[name="Eligible_products"]').val().split(",");
                  var FREE_PRODUCT_IDS = $('[name="Free_products"]').val().split(",");
                  FREE_PRODUCT_IDS = FREE_PRODUCT_IDS.map(Number);
                  var MainProductId = $('.product-form__buttons').children('[type="submit"]').attr('productid');
                  var freeProductAdd = false;var GotFreeProduct = false;
                  $.ajax({
                      url: "/cart.js",
                      type: "GET",
                      dataType: "JSON",
                      success: function(cart) {
                        
                          $.each(cart.items, function(index, item) {
                              $.each(ELIGIBLE_PRODUCT_IDS, function(index, id) {
                                  if( id == item.product_id ){
                                      GotFreeProduct = true;
                                  }                                
                                  if (item.properties) {
                                      if (item.properties.__freegift == 'true') {
                                          freeProductAdd = true;
                                      }
                                  }
                              });
                          });
                      }
                  }).done(function(response) {
                      if ( (freeProductAdd == false) && (GotFreeProduct == true) ) {
                          $.each(FREE_PRODUCT_IDS, function(index, vd) {
                              var l = '{"id":' + vd + ', "quantity" : ' + 1 + ',"properties": {"__freegift": true}' + "}";
                              EligiblePd.push(JSON.parse(l));
                          })
                          $.post("/cart/add.js", {
                              items: EligiblePd
                          }).done(function(response) {
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
                          })
                      }
                  })
                }
              }
          
          this.submitButton.classList.remove('loading');
          if (this.cart && this.cart.classList.contains('is-empty')) this.cart.classList.remove('is-empty');
          if (!this.error) this.submitButton.removeAttribute('aria-disabled');
          this.querySelector('.loading-overlay__spinner').classList.add('hidden');
        });
    }

    handleErrorMessage(errorMessage = false) {
      this.errorMessageWrapper = this.errorMessageWrapper || this.querySelector('.product-form__error-message-wrapper');
      if (!this.errorMessageWrapper) return;
      this.errorMessage = this.errorMessage || this.errorMessageWrapper.querySelector('.product-form__error-message');

      this.errorMessageWrapper.toggleAttribute('hidden', !errorMessage);

      if (errorMessage) {
        this.errorMessage.textContent = errorMessage;
      }
    }
  });
}
