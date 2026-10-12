$.fn.isInViewport = function() { var elementTop=$(this).offset().top,elementBottom=elementTop + $(this).outerHeight(),viewportTop=$(window).scrollTop(),viewportBottom=viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
}
$(document).on("click","span.stamped-badge",function() {
    var header_height = $("div#shopify-section-header").height();
       $('html, body').animate({
        scrollTop: $("div#stamped-main-widget").offset().top - header_height
    }, 2000); 
});
$(document).on("click",".new_custom_addtoart",function() {
   var productid =  $(this).parents(".product-form").find(".get_cust_id").val();
 var get_qty = $(this).parents(".custom-atc-wrapp").find(".quantity_input_product").val();
      jQuery.ajax({
    type: 'POST',
    url: '/cart/add.js',
    data:{
      id: productid,
      quantity: get_qty,
    },
    dataType: 'json',
    success: function(productid){
      jQuery.ajax({
        type: 'GET',
        url: '/cart',
        dataType: 'html',
        success: function(cart){      
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
           $(".RQCartDRawerExecutionmWp ").removeClass("is-empty");
        $(".RQCartDRawerExecutionmWp ").addClass("active");
        },
      });
    },
  });
});

$(window).on('resize scroll',function(){
  if($(window).width() < 749){
    var scrollAtc = $(window).scrollTop();
    if (scrollAtc >= 130) { $(".MainCombineSwatchProductInt").addClass("show_me_now"); }
    $('.RQ-productBestPairedMn, product-recommendations').each(function(){const viewportChecker = $(this).isInViewport() ? $('.MainCombineSwatchProductInt').removeClass("show_me_now") : $('.MainCombineSwatchProductInt').addClass("show_me_now");});
    if(scrollAtc < 130){ $(".MainCombineSwatchProductInt").removeClass("show_me_now"); }
  }
});

// $(document).on('click','.rvm_container',function(e){e.preventDefault();
//   var videoConnect=$(this).children('.rvm_vid_make').children('.videoJSHANDLE');
//   const pauseChecker = videoConnect.get(0).paused ? 
//     ($(this).children('.playPauseInit').addClass('hidden'),$(this).children('.playPauseInit').children('.soundMuteSure').removeClass('hidden').siblings('.soundUnmuteSure').addClass('hidden'),videoConnect.get(0).play()) :
//     ($(this).children('.playPauseInit').removeClass('hidden'),$(this).children('.playPauseInit').children('.soundMuteSure').addClass('hidden').siblings('.soundUnmuteSure').removeClass('hidden'),videoConnect.get(0).pause());
// })
// $(document).on('mousemove','.rvm_container',function(e){ if(!$(e.target).closest('.playPauseInit').length > 0){ $(this).children('.playPauseInit').removeClass('hidden'); } })
// $(document).on('mouseenter','.rvm_container',function(e){ if(!$(e.target).closest('.playPauseInit').length > 0){ $(this).siblings('.playPauseInit').removeClass('hidden'); } })
// $(document).on('mouseleave','.rvm_container',function(e){ var videoConnect=$(this).children('.rvm_vid_make').children('.videoJSHANDLE');
//   const miskRise= (!$(e.target).closest('.playPauseInit').length > 0, videoConnect.get(0).paused) ? $(this).children('.playPauseInit').removeClass('hidden') : $(this).children('.playPauseInit').addClass('hidden');
// })
// $(window).on("load",function() {
//   $("body").addClass("shipping_icon_animate");
//   setTimeout(function() {
//      $("body").addClass("shipping_text_show");
//   },5000);
 
// });
  $(document).ready(function() {
    if ($(window).width() < 750){
          if (window.location.href.indexOf("#raise-ticket") > -1) {
        var header_height = $(".header-wrapper").height();
     $('html, body').animate({
        scrollTop: $(".rasise_ticker_sec").offset().top - header_height
    }, 2000);
    }
    }

  });
document.addEventListener('DOMContentLoaded', function () {

  $(document).on("change",".new-cc-tesmp-main .qty_class .quantity__input",function() {
    var get_value = $(this).val();
    $(this).parents(".qty_class").find(".quantity__input").val(get_value);
});

    $(document).on("change",".custom-new-temp-wrapp .qty_class .quantity__input",function() {
    var get_value = $(this).val();
    $(this).parents(".qty_class").find(".quantity__input").val(get_value);
});
  
  $(".new-article-content_wrapp .article-template__content h2").each(function() {
   var data_text = $(this).html(); 
var data_text2 = data_text.replace("<br>"," ");
  var data_text3 = data_text2.replace("'","");
    var remove_break = data_text3.replace(/(<([^>]+)>)/gi, "");
    var final_data_value = remove_break.replace("&nbsp;","");
    var without_space = $.trim(final_data_value);
    $(this).attr("data-handle",without_space);
});
    var submitButton = document.getElementById('submitButton');
    if ( !submitButton ){
      console.warn('have not button');
     }else{
    submitButton.addEventListener('click', function () {
      var inputValue = document.getElementById('PostalCode').value;
        var obj = this;
        obj.querySelector('span').classList.add('hidden');
        obj.querySelector('.loading-overlay__spinner').classList.add('loading');
        obj.querySelector('.loading-overlay__spinner').classList.remove('hidden');

        var url = '/pages/pincod'; // Replace with your actual URL

        fetch(url)
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {
                var parser = new DOMParser();
                var doc = parser.parseFromString(data, 'text/html');
                var options = doc.querySelectorAll("#PinCodSelect option");
                var matchFound = false, secondMatch = '';

                options.forEach(function (option) {
                    var optionFirstPValue = option.getAttribute('firstP');
                    obj.querySelector('span').classList.remove('hidden');
                    obj.querySelector('.loading-overlay__spinner').classList.remove('loading');
                    obj.querySelector('.loading-overlay__spinner').classList.add('hidden');

                    if (optionFirstPValue === inputValue) {
                        secondMatch = option.getAttribute('lastP');
                        matchFound = true;
                        return;
                    }
                });
                var onDelivery = document.querySelector('.Ondelivery')
              

                if (matchFound) {
                    if (secondMatch.trim() === 'TRUE') {
                        document.querySelector('.CustomAddition').innerHTML = 'Cash on delivery Available';
                        var datOuterDiv = document.querySelector('.DatOuterDiv');
                        datOuterDiv.style.display = 'block';
                      var nodelivery = document.querySelector('.Nodelivery');
                       nodelivery.style.display = 'none';
                      obj.querySelector('span').innerHTML = 'change'
                    } else {
                        var datOuterDiv = document.querySelector('.DatOuterDiv');
                        datOuterDiv.style.display = 'block';
                        var onDelivery = document.querySelector('.Ondelivery');
                        document.querySelector('.CustomAddition').innerHTML = 'Cash on delivery not Available';
                      var nodelivery = document.querySelector('.Nodelivery');
                      nodelivery.style.display = 'none';
                     obj.querySelector('span').innerHTML = 'change'
                    }
                } else {
                  var nodelivery = document.querySelector('.Nodelivery');
                  if (inputValue.length < 6) {
                      // Display the error message
                    nodelivery.style.display = 'block';
                    nodelivery.innerHTML = 'Invalid pincode. Please try again.';
                    obj.querySelector('span').innerHTML = 'change'
                  }else{
                    nodelivery.style.display = 'block';
                    nodelivery.innerHTML = 'Sorry, we do not deliver at this location. Try another PIN code.'
                    obj.querySelector('span').innerHTML = 'change'
                  }
                  var datOuterDiv = document.querySelector('.DatOuterDiv');
                        datOuterDiv.style.display = 'none';
                }
            })
            .catch(function (error) {
                console.error(error);
            });
    });
  }
    var swiper = new Swiper(".product__accordion_custom .custom_accordian_product_slider", {slidesPerView: 1.2,spaceBetween: 10,navigation: {nextEl: ".NextButtonSlideshowfd",prevEl: ".PrevButtonSlideShowfd"},pagination: {el: ".paginationFractionWp",clickable: true,dynamicBullets: true},breakpoints: {640: {slidesPerView: 2.2,spaceBetween: 16,pagination: {el: ".paginationFractionWp",type: "fraction"}},768: {slidesPerView: 3.4,spaceBetween: 16,pagination: {el: ".paginationFractionWp",type: "fraction"}},1024: {slidesPerView: 3.4,spaceBetween: 24,pagination: {el: ".paginationFractionWp",type: "fraction"}}}});  
if ($(window).width() < 750){
    $(".new-article_main-wrapper .article-template__content p").each(function() {
   var peragraph_html = $(this).html(); 
     if (peragraph_html.indexOf("iframe") > -1) {
    $(this).css("padding","0")
     }
});
}

$(".CollProGridItem").each(function() {
    var sizze_length = $(this).find(".allvarinat_wrapper .input_label_wrapper:hidden").length;
    if(sizze_length > 0){
        $(this).find(".hidden_size_val").html("<p>+"+sizze_length+" more</p>");
    }
   
});

// $(".product__accordion_custom .accordion__content.rte button.quick-add__submit").click(function() {
//   $(this).parents(".product__accordion_custom").find(".already_selected_message").show();
//      $(".product__accordion_custom details").removeAttr("open");
//   $(".accordion_pdp_inner .product__accordion_custom").removeClass("hidden_data");
//   $(".accordion_pdp_inner .product__accordion_custom").removeClass("show_acco");
//   $(".product__accordion_custom details summary").attr("aria-expanded","false");
//     $(".accordion_pdp_inner .product__accordion_custom").each(function() {
//   if($(this).find(".already_selected_message").is(":visible")){
//      $(this).addClass("hidden_data");
//   }else{
//      $(this).addClass("show_acco");
//     return false;
//   }
// });

//     setTimeout(function() {
//         $(".show_acco details summary").trigger("click");
//     },100);
// });
//     jQuery.getJSON('/cart.js', function(cart) {
//     for (var i = 0; i < cart.items.length; i++) {
//     $(".RQ-fdcBlockEach[data-pro-id='"+cart.items[i].id+"']").parents(".product__accordion_custom").find(".already_selected_message").show();
//     }

//            $(".product__accordion_custom details").removeAttr("open");
//   $(".accordion_pdp_inner .product__accordion_custom").removeClass("hidden_data");
//   $(".accordion_pdp_inner .product__accordion_custom").removeClass("show_acco");
//   $(".product__accordion_custom details summary").attr("aria-expanded","false");
//     $(".accordion_pdp_inner .product__accordion_custom").each(function() {
//   if($(this).find(".already_selected_message").is(":visible")){
//      $(this).addClass("hidden_data");
//   }else{
//      $(this).addClass("show_acco");
//     return false;
//   }
// });

//     setTimeout(function() {
//         $(".show_acco details summary").trigger("click");
//     },100);
//   }); 
  $(".ApplyChoosenSort.executionasButton").click(function() {
    setTimeout(function() {
      _swat.initializeActionButtons(".product-grid-container");
    },1200) ;
  });
  $(document).on("change","select#SortBy",function() {
    setTimeout(function() {
      _swat.initializeActionButtons(".product-grid-container");
    },1200) ;
  });
  $(".collection-page-video").each(function(){
    $(this).find("video")[0].load();
  });
  $(document).on("change",".new-colection-variants input",function() {
    var variant_id  = $(this).attr("var-id");
    var variant_price  = $(this).attr("var-price");
    var variant_compareprice  = $(this).attr("var-com-price");
    var variant_saleprice  = $(this).attr("var-discount");
    $(this).parents(".card__content").find(".collProFrm input[name=id]").val(variant_id);
    $(this).parents(".card__content").find(".price__sale span.price-item.price-item--sale.price-item--last").html(variant_price);
    $(this).parents(".card__content").find(".price__sale s.price-item.price-item--regular").html(variant_compareprice);
    $(this).parents(".card__content").find(".PriceWithpercentage span.priceOffer").html(variant_saleprice);
  });
  $(document).on("change",".new-colection-variants .INputMnradioBtn input",function() {
    var variant_image  = $(this).attr("var-image");
    if ($(window).width() < 990){
      $(this).parents(".CollProGridItem").find(".fisst_new_image").attr("src",variant_image);
      $(this).parents(".CollProGridItem").find(".fisst_new_image").attr("srcset",variant_image); 
    }else{
      $(this).parents(".CollProGridItem").find("img.new-tem-second-image.motion-reduce").attr("src",variant_image);
      $(this).parents(".CollProGridItem").find("img.new-tem-second-image.motion-reduce").attr("srcset",variant_image); 
    }
  });
$(".new-colection-variants .allvarinat_wrapper input").change(function() {
    var var_price = $(this).attr("var-price");
  var var_com_price = $(this).attr("var-com-price");
   if(typeof var_com_price !== 'undefined'){
    $(this).parents(".card-information").find("span.price-item.price-item--sale.price-item--last").html(var_price);
 
    $(this).parents(".card-information").find("s.price-item.price-item--regular").html(var_com_price);
     $(this).parents(".card-information").find("s.price-item.price-item--regular").show();
     $(this).parents(".card-information").find(".PriceWithpercentage").show();
  }else{
     $(this).parents(".card-information").find("span.price-item.price-item--sale.price-item--last").html(var_price);
 
    $(this).parents(".card-information").find("s.price-item.price-item--regular").hide();
     $(this).parents(".card-information").find(".PriceWithpercentage").hide();
     
  }
  
});
  // Santa Hide Out JS Start
  
  // setInterval(function(){
  //   var date = new Date();
  //   var minutes = 1;
  //   var CurrentLocationPath = window.location.pathname;
  //   date.setTime(date.getTime() + (minutes * 60 * 1000));
  //   let santaLen = parseInt(document.querySelectorAll('.SantaMediaInit').length), RandomSanta = Math.floor(Math.random() * santaLen), CurrentTemplate=document.body.getAttribute('CurrentTemplate')
  //       TemplateNames=['index','page','product'],
  //       RandomTemplate=Math.floor(Math.random() * TemplateNames.length);
  //   TemplateNames.forEach(function(value){
  //     if($.cookie('santa_active') == value){
  //       document.querySelectorAll('[CurrentTemplate="'+value+'"] .SantaMediaInit').forEach(function(evt, key, value){
  //         evt.classList.remove('santa_activenow')
  //       })
  //     }else{
  //       if(typeof $.cookie('santa_active') == 'undefined'){
  //         console.clear()
  //         $.cookie('santa_active',TemplateNames[RandomTemplate], { expires: date })
  //         setTimeout(function(){
  //           console.warn('Santa Is on- '+$.cookie('santa_active')+' Page')
  //           document.querySelectorAll('[CurrentTemplate="'+$.cookie('santa_active')+'"] .SantaMediaInit').forEach(function(evt, key, value){
  //             if(RandomSanta == key){
  //               evt.classList.add('santa_activenow');
  //             }
  //           })
  //         }, 400)
  //       }
  //     }
  //   })
  // },30000)

  // Santa Hide Out JS End

  var CurrentTemplate = document.body.getAttribute('CurrentTemplate')
  if(CurrentTemplate != 'index'){
    if(!document.querySelector('.snowFlakesMN').classList.contains('hidden')){
      setTimeout(function(){
        document.querySelector('.snowFlakesMN').classList.add('hidden')
      },10000)
    }
  }



  
});

$(document).on("click",".posts_key_points .metafield-rich_text_field ol li",function() {
    var get_handle = $(this).html();
  var data_text3 = get_handle.replace("'","");
    var finl_get_handle = $.trim(data_text3);
 var header_height =  $("div#shopify-section-header").height();
    $('html, body').animate({
        scrollTop: $(".new-article_main-wrapper h2[data-handle='"+finl_get_handle+"']").offset().top - header_height
    }, 2000);
});

$(document).ready(function() {
   $.fn.isOnScreen = function(){
    
    var win = $(window);
    
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth() + 300;
    bounds.bottom = bounds.top + this.outerHeight() + 300;
    
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    
};
  setTimeout(function() {
    if($('.pinncode_adad_btn-wrapper').isOnScreen() == true ){
$(".sticky_bar_bottom").hide();
}else{
$(".sticky_bar_bottom").show();
}
  },100);

$(window).scroll(function(){
if($('.pinncode_adad_btn-wrapper').isOnScreen() == true ){
$(".sticky_bar_bottom").hide();
}else{
$(".sticky_bar_bottom").show();
}
});
});
  $(document).mouseup(function (e) { 
            if ($(e.target).closest(".product-media-modal__content").length 
                        === 0) { 
                $(".product-media-modal").removeClass("active"); 
                $(".product-media-modal").removeAttr("open"); 
                 $("body").removeClass("maskedModal"); 
            } 
        }); 
