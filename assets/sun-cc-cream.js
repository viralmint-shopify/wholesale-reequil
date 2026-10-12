$(document).ready(function() {
if ($(window).width() < 750){
    $(".main_product_image-wrapp").flickity({
wrapAround: false,
pageDots: true,
draggable: true,
prevNextButtons: false,
});
}else{
  $(".main_product_image-wrapp").flickity({
wrapAround: false,
pageDots: true,
draggable: false,
prevNextButtons: false,
});  
}
$(".product_cc_popup .product-media-modal__content").flickity({
 asNavFor: ".main_product_image-wrapp",
  contain: false,
  pageDots: false,
  arrowShape:'M14.8498 34.45C14.5332 34.45 14.2165 34.3333 13.9665 34.0833C13.4832 33.6 13.4832 32.8 13.9665 32.3166L24.8332 21.45C25.6332 20.65 25.6332 19.35 24.8332 18.55L13.9665 7.68331C13.4832 7.19997 13.4832 6.39997 13.9665 5.91664C14.4498 5.4333 15.2498 5.4333 15.7332 5.91664L26.5998 16.7833C27.4498 17.6333 27.9332 18.7833 27.9332 20C27.9332 21.2166 27.4665 22.3666 26.5998 23.2166L15.7332 34.0833C15.4832 34.3166 15.1665 34.45 14.8498 34.45Z' ,
  wrapAround: false,
  groupCells: true,
});

$(".thumbnails_image-wrapp").flickity({
  asNavFor: ".main_product_image-wrapp",
  contain: true,
  pageDots: false,
  arrowShape:'M14.8498 34.45C14.5332 34.45 14.2165 34.3333 13.9665 34.0833C13.4832 33.6 13.4832 32.8 13.9665 32.3166L24.8332 21.45C25.6332 20.65 25.6332 19.35 24.8332 18.55L13.9665 7.68331C13.4832 7.19997 13.4832 6.39997 13.9665 5.91664C14.4498 5.4333 15.2498 5.4333 15.7332 5.91664L26.5998 16.7833C27.4498 17.6333 27.9332 18.7833 27.9332 20C27.9332 21.2166 27.4665 22.3666 26.5998 23.2166L15.7332 34.0833C15.4832 34.3166 15.1665 34.45 14.8498 34.45Z' ,
  wrapAround: false,
  groupCells: true,
});
  
  $("ol.flickity-page-dots li").each(function() {
    var data_label = $(this).attr("aria-label");
var data_counting = data_label.split('Page dot ')[1];
$(this).html('<span>'+data_counting+'</span>');
});
  var dots_html = $(".main_product_image-wrapp ol.flickity-page-dots").html();
$(".cc-creame-product.MobileDotsWp").html(dots_html);
  $(".cc-creame-product li.dot.is-selected").addClass("active");
});
$('.INputMnradioBtn label').on( 'click', function(e) {
  
    var var_img  = $(this).parents(".INputMnradioBtn").find("input").val();
      var thum_img = $(".variant_images_here .main_image_inner[data-image='"+var_img+"']").html();
  var thum_img2 = $(".variant_images_here .main_image_inner[data-image='"+var_img+"'] img").attr("src");
  if(typeof thum_img !== 'undefined'){
 var cellElement=$(".var_main_image")  
    $(".main_product_image-wrapp").flickity( 'remove', cellElement );  
    var cellElement2=$(".var_thumb_image")  
    $(".thumbnails_image-wrapp").flickity( 'remove', cellElement2 );
    var cellElement3=$(".var_popup_image")  
    $(".product_cc_popup .product-media-modal__content").flickity( 'remove', cellElement3 );
    
      var $cellElems = $('<div class="thumb_image_inner var_thumb_image">'+thum_img+'</div>');
       $(".thumbnails_image-wrapp").flickity( 'prepend', $cellElems );
      var $cellElems2 = $('<div class="main_image_inner var_main_image">'+thum_img+'</div>');
       $(".main_product_image-wrapp").flickity( 'prepend', $cellElems2 ); 
    var $cellElems3 = $('<img class="var_popup_image global-media-settings global-media-settings--no-shadow" src='+thum_img2+' style="display:block;">');
       $(".product_cc_popup .product-media-modal__content").flickity( 'prepend', $cellElems3 ); 
   setTimeout(function() { 
    $(".main_product_image-wrapp").flickity('reloadCells');
       },200);
    setTimeout(function() { 
    $(".main_product_image-wrapp").flickity( 'select',0);  
      $(".single_pro_message").hide();
     },500);
  }
  $("ol.flickity-page-dots li").each(function() {
    var data_label = $(this).attr("aria-label");
var data_counting = data_label.split('Page dot ')[1];
$(this).html('<span>'+data_counting+'</span>');
});
    var dots_html = $(".main_product_image-wrapp ol.flickity-page-dots").html();
$(".cc-creame-product.MobileDotsWp").html(dots_html);
  $(".cc-creame-product li.dot.is-selected").addClass("active");
});
$(document).on("click",".main_product_image-wrapp .main_image_inner img",function() {
 setTimeout(function() {
   $(".product_cc_popup").addClass("active");
 },500);
});
$(".main_product_image-wrapp").on( 'change.flickity', function( event, index ) {
  if ( event.namespace == 'flickity' ) {
           const $dotsWp = $('.cc-creame-product.MobileDotsWp');
      const final_index = index + 1;
      const $activedot2 = $dotsWp.children('li[aria-label="Page dot '+final_index+'"]')
        const containerWidth = $dotsWp.width();
        const dotWidth = $activedot2.outerWidth();
        const halfContainerWidth = containerWidth / 2;
        const halfDotWidth = dotWidth / 2;
        const translateX = halfContainerWidth - $activedot2.position().left - halfDotWidth;
      
        $dotsWp.children('li').removeClass('active');
        $activedot2.addClass('active');
      
        $dotsWp.css('transform', `translateX(${translateX}px)`);
  }
});