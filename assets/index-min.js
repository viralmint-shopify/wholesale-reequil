$(document).ready(function(){
 if(  $(".RQ-sd-mg-bkMn .swiper-slide").length != 1 ){  
  var swiper = new Swiper(".RqslideshowBanner", {loop: true,autoplay: {delay: 2500,disableOnInteraction: false},navigation: {nextEl: ".NextButtonSlideshow",prevEl: ".PrevButtonSlideShow"},pagination: {el: ".paginationSlideshowbanner",clickable: true,dynamicBullets: true}});
 }else{
  var swiper = new Swiper(".RqslideshowBanner", {navigation: {nextEl: ".NextButtonSlideshow",prevEl: ".PrevButtonSlideShow"},pagination: {el: ".paginationSlideshowbanner",clickable: true,dynamicBullets: true}});
 }
 if(  $(".RQ-collectionBn-mgbknMn.show_des .swiper-slide").length != 1 ){
  var swiper = new Swiper(".RqslideshowBannerCollections", {loop: false,autoplay: {delay: 2500,disableOnInteraction: false},navigation: {nextEl: ".NextButtonSlideshow",prevEl: ".PrevButtonSlideShow"},pagination: {el: ".paginationSlideshowbanner",clickable: true,dynamicBullets: true }});
 }else{
   var swiper = new Swiper(".RqslideshowBannerCollections", {navigation: {nextEl: ".NextButtonSlideshow",prevEl: ".PrevButtonSlideShow"},pagination: {el: ".paginationSlideshowbanner",clickable: true,dynamicBullets: true }});
 }
  var swiper = new Swiper(".Rqproductsslideshow", {slidesPerView: 1,spaceBetween: 16,navigation: {nextEl: ".NextButtonSlideshowp",prevEl: ".PrevButtonSlideShowp"},pagination: {el: ".paginationSlideshowbannerp",clickable: true,dynamicBullets: true},breakpoints: {640: {slidesPerView: 1,spaceBetween: 16},768: {slidesPerView: 3,spaceBetween: 16},1024: {slidesPerView: 3,spaceBetween: 16}}});
  var swiper = new Swiper(".RqcustomerRslideshow",{slidesPerView: 1.074,spaceBetween: 12,navigation: {nextEl: ".NextButtonSlideshowcr",prevEl: ".PrevButtonSlideShowcr"},pagination: {el: ".paginationSlideshowbannercr",clickable: true,dynamicBullets: true},breakpoints: {640: {slidesPerView: 1.1,spaceBetween: 16},768: {slidesPerView: 2,spaceBetween: 16},1024: {slidesPerView: 2,spaceBetween: 16}}});
  var swiper = new Swiper(".Rqfeaturedslideshow", {slidesPerView: 1.4,spaceBetween: 16,navigation: {nextEl: ".NextButtonSlideshowfd",prevEl: ".PrevButtonSlideShowfd"},pagination: {el: ".paginationSlideshowbannerfd",clickable: true,dynamicBullets: true},breakpoints: {640: {slidesPerView: 1.5,spaceBetween: 16},768: {slidesPerView: 2.4,spaceBetween: 16},1024: {slidesPerView: 3.4,spaceBetween: 16}}});
  var swiper = new Swiper(".Rqmultitabslideshow", {slidesPerView: 1.4,spaceBetween: 16,navigation: {nextEl: ".NextButtonSlideshowmt",prevEl: ".PrevButtonSlideShowmt"},pagination: {el: ".paginationSlideshowbannermt",clickable: true,dynamicBullets: true},breakpoints: {640: {slidesPerView: 1.5,spaceBetween: 16},768: {slidesPerView: 2,spaceBetween: 16},1024: {slidesPerView: 3,spaceBetween: 16}}});
  if( $('#marquee-icon-horizontal').length > 0 ){$('#marquee-icon-horizontal').marquee({direction:'horizontal', delay:0, timing:19, speed: 1,}); }
  var swiper = new Swiper(".Rqhappyiconscustomer", {slidesPerView: 1,loop: true,loopFillGroupWithBlank: true,pagination: {el: ".paginationSlideshowbannerp",clickable: true,dynamicBullets: true},breakpoints: {640: {slidesPerView: 1},768: {slidesPerView: 1},1024: {slidesPerView: 1}}});
  var swiper = new Swiper(".RqOfferfeaturedslideshow", {slidesPerView: 1.681,spaceBetween: 12,navigation: {nextEl: ".NextButtonSlideshowfdOffer",prevEl: ".PrevButtonSlideShowfdOffer"},pagination:{el: ".swiper-pagination",clickable: true,dynamicBullets: true},breakpoints: {640: {slidesPerView: 2.4,pagination:{el: ".swiper-pagination",type: "fraction"}},768: {slidesPerView: 3.4,pagination:{el: ".swiper-pagination",type: "fraction"}},1024: {slidesPerView: 5.48,spaceBetween: 16,pagination:{el: ".swiper-pagination",type: "fraction"}}}})
  var swiper = new Swiper(".ProductBestPairedMainSlideShow", {slidesPerView: 1.67,spaceBetween: 10,navigation: {nextEl: ".NextButtonSlideshowfd",prevEl: ".PrevButtonSlideShowfd"},pagination: {el: ".paginationFractionWp",clickable: true,dynamicBullets: true},breakpoints: {640: {slidesPerView: 1.2,spaceBetween: 16,pagination: {el: ".paginationFractionWp",type: "fraction"}},768: {slidesPerView: 2.4,spaceBetween: 16,pagination: {el: ".paginationFractionWp",type: "fraction"}},1024: {slidesPerView: 3.4,spaceBetween: 16,pagination: {el: ".paginationFractionWp",type: "fraction"}}}});  
  var swiper = new Swiper(".MainRelatedArticlepodcasts", {slidesPerView: 1.67,spaceBetween: 10,navigation: {nextEl: ".NextButtonSlideshowfd",prevEl: ".PrevButtonSlideShowfd"},pagination: {el: ".paginationFractionWp",clickable: true,dynamicBullets: true},breakpoints: {640: {slidesPerView: 1.2,spaceBetween: 16,pagination: {el: ".paginationFractionWp",type: "fraction"}},768: {slidesPerView: 2.4,spaceBetween: 16,pagination: {el: ".paginationFractionWp",type: "fraction"}},1024: {slidesPerView: 3.4,spaceBetween: 16,pagination: {el: ".paginationFractionWp",type: "fraction"}}}});  
 var swiper = new Swiper(".newMainRelatedArticlepodcasts", {slidesPerView: 1.2,spaceBetween: 16,navigation: {nextEl: ".NextButtonSlideshowfd",prevEl: ".PrevButtonSlideShowfd"},pagination: {el: ".paginationFractionWp",clickable: true,dynamicBullets: true},breakpoints: {640: {slidesPerView: 1.4,spaceBetween: 16,pagination: {el: ".paginationFractionWp",type: "fraction"}},768: {slidesPerView: 2.6,spaceBetween: 16,pagination: {el: ".paginationFractionWp",type: "fraction"}},1024: {slidesPerView: 3.7,spaceBetween: 24,pagination: {el: ".paginationFractionWp",type: "fraction"}}}});   
  var swiper = new Swiper(".AllEpisodeEachMainWp", {slidesPerView: 1.25,spaceBetween: 16,navigation: {nextEl: ".NextButtonSlideepis",prevEl: ".PrevButtonSlideepis"},pagination: {el: ".paginationFractionWp",clickable: true,dynamicBullets: true},breakpoints: {640: {slidesPerView: 1.4,spaceBetween: 16,pagination: {el: ".paginationFractionWp",type: "fraction"}},768: {slidesPerView: 2.6,spaceBetween: 16,pagination: {el: ".paginationFractionWp",type: "fraction"}},1024: {slidesPerView: 3.6,spaceBetween: 16,pagination: {el: ".paginationFractionWp",type: "fraction"}}}});  
  var swiper = new Swiper(".custom_testi_cus_slider", {slidesPerView: 1.5,spaceBetween: 16,navigation: {nextEl: ".NextButtonSlideepis",prevEl: ".PrevButtonSlideepis"},pagination: {el: ".paginationFractionWp",clickable: true,dynamicBullets: true},breakpoints: {640: {slidesPerView: 1.4,spaceBetween: 16,pagination: {el: ".paginationFractionWp",type: "fraction"}},768: {slidesPerView: 2.6,spaceBetween: 16,pagination: {el: ".paginationFractionWp",type: "fraction"}},1024: {slidesPerView: 2,spaceBetween: 16,pagination: {el: ".paginationFractionWp",type: "fraction"}}}});  
 var swiper = new Swiper(".custom_image_pdp_sec", {     pagination: {el: '.slider__pagination',clickable: true,}, autoHeight: true,slidesPerView: 1,spaceBetween: 16,breakpoints: {640: { pagination: {el: '.slider__pagination',clickable: true,}, autoHeight: true,slidesPerView: 1,spaceBetween: 16},768: { pagination: {el: '.slider__pagination',clickable: true,}, autoHeight: true,slidesPerView: 1,spaceBetween: 16},1024: { pagination: {el: '.slider__pagination',clickable: true,},autoHeight: true,slidesPerView: 1,spaceBetween: 16}}});
  if ($(window).width() > 749){
    var swiper = new Swiper(".RQTopProdcatsSlideshow", {slidesPerView: 3,spaceBetween: 28,navigation: {nextEl: ".NextButtonSlideshowfd",prevEl: ".PrevButtonSlideShowfd"},pagination: {el: ".paginationFractionWp",type: "fraction"} });  
    var swiper = new Swiper(".RQExpertSessionSlideshow", {slidesPerView: 2,spaceBetween: 44,navigation: {nextEl: ".NextButtonSlideshowfd",prevEl: ".PrevButtonSlideShowfd"},pagination: {el: ".paginationFractionWp",type: "fraction"} });  
    var swiper = new Swiper(".RQTopBlogsSlideshow", {slidesPerView: 2,spaceBetween: 24,navigation: {nextEl: ".NextButtonSlideshowfd",prevEl: ".PrevButtonSlideShowfd"},pagination: {el: ".paginationFractionWp",type: "fraction"} });  
  }  

  var swiper = new Swiper(".WrapperValuePacksEx", {slidesPerView: 1.75,spaceBetween: 10,breakpoints: {991: {slidesPerView: 2.3,spaceBetween: 12},1279: {slidesPerView: 2.72,spaceBetween: 12}}});  
  
  if ($(window).width() < 767){var swiper = new Swiper(".Rqspecificationmbslideshow", {slidesPerView: 1,pagination: {el: ".paginationSlideshowbannerp",clickable: true,dynamicBullets: true},});}
  setInterval(function(){
    if( $('.RqupsellItemslideshow').length > 0 ){
      if( $('.RqupsellItemslideshow').hasClass('swiper-initialized') ){}else{var swiper = new Swiper(".RqupsellItemslideshow", {slidesPerView: 3.4,spaceBetween: 7,navigation: {nextEl: ".NextButtonSlideshowLine",prevEl: ".PrevButtonSlideShowLine"},pagination:{el: ".swiper-pagination",type: "fraction"}})}
    }
  },200)  
  setInterval(function(){
    if($('body').hasClass('rewards_available') && $.trim($('#smile-ui-container').html()) == '' && window.location.pathname != '/cart'){
      $('body').removeClass('rewards_available').addClass('cartopenside'),$('cart-drawer').addClass('active');
    }
  },2700)
  var scrollDuration = 300;var leftPaddle = document.getElementsByClassName('iconltl');var rightPaddle = document.getElementsByClassName('iconrtl');var menuSize = 0;
  var itemsLength = $('.Rq-tagCollection-filters li').each(function(){menuSize+=$(this).outerWidth(true);});
  var paddleMargin = 20;var down = false;
  var getMenuWrapperSize = function() {return $('.TagMainWrapperRqExecution').outerWidth();}
  var menuWrapperSize = getMenuWrapperSize();
  $(window).on('resize', function() {menuWrapperSize = getMenuWrapperSize();});
  var menuInvisibleSize = menuSize - menuWrapperSize;
  var getMenuPosition = function() {
  	return $('.Rq-tagCollection-filters').scrollLeft(); 
  };
  $('.Rq-tagCollection-filters').on('scroll', function() {
  	menuInvisibleSize = menuSize - menuWrapperSize;
  	var menuPosition = getMenuPosition();
  	var menuEndOffset = menuInvisibleSize - paddleMargin;
  	if (menuPosition <= paddleMargin) {
  		$(leftPaddle).addClass('mouted');
  		$(rightPaddle).removeClass('mouted');
  	} else if (menuPosition < menuEndOffset) {
  		$(leftPaddle).removeClass('mouted');
  		$(rightPaddle).removeClass('mouted');
  	} else if (menuPosition >= menuEndOffset) {
  		$(leftPaddle).removeClass('mouted');
  		$(rightPaddle).addClass('mouted');
    }
  });
  
  $(rightPaddle).on('click', function() {
  	$('.Rq-tagCollection-filters').animate( { scrollLeft: $('.Rq-tagCollection-filters').scrollLeft()+150}, scrollDuration);
  });
  $(leftPaddle).on('click', function() {
  	$('.Rq-tagCollection-filters').animate( { scrollLeft: $('.Rq-tagCollection-filters').scrollLeft()-150 }, scrollDuration);
  });
  if(!is_touch_device()){
  	var nav_out_timer;
  	$(".Rq-tagCollection-filters").mousedown(function(e){
  		e.preventDefault();e.stopPropagation();down=true;x=e.pageX;y=e.pageY;left=$(this).scrollLeft();
  	});
  	$(".TagMainWrapperRqExecution").mouseover(function(e){window.clearTimeout(nav_out_timer);});
  	$(".TagMainWrapperRqExecution").mouseout(function(e){nav_out_timer = window.setTimeout(function(){down = false;},100);});
  	$("body").mousemove(function(e){
    	if(down){var newX=e.pageX;$(".Rq-tagCollection-filters").scrollLeft(left-newX+x);}
  	});
  	$(".Rq-tagCollection-filters").on('mouseup',function(e){
  		if(down){e.preventDefault();e.stopPropagation();down=false;}
  	});
  	$(".Rq-tagCollection-filters a").on('click',function(e){
  		if(Math.abs(left-$(".Rq-tagCollection-filters").scrollLeft()) !== 0 ){e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();return false;}
  	});
  	$('.Rq-tagCollection-filters a').each(function(){
          var existing_event = this.onclick;
          this.onclick = null;
          $(this).click(function(e){ 
              if($(this).hasClass('disabled')){e.stopImmediatePropagation();e.preventDefault();}                
          });
          if(existing_event){$(this).click(existing_event);}
  	});
  }
// Support Page FAQ

  var faqSize = 0;
  var faqpaddleMargin = 20;var down = false;
  var getMenuWrapperSizefaq = function() {return $('.FaqSupportMainHeadinghTabBlock').outerWidth();}
  var menuWrapperSizefaq = getMenuWrapperSizefaq();
  $(window).on('resize', function() {menuWrapperSizefaq = getMenuWrapperSizefaq();});
  var menuInvisibleSizefaq = faqSize - menuWrapperSizefaq;
  var getMenuPositionfaq = function() {
  	return $('.TabbingVirewSupportFaq').scrollLeft(); 
  };
  $('.TabbingVirewSupportFaq').on('scroll', function() {
  	menuInvisibleSizefaq = faqSize - menuWrapperSizefaq;
  	var menuPositionfaq = getMenuPositionfaq();
  	var menuEndOffsetfaq = menuInvisibleSizefaq - faqpaddleMargin;
  	if (menuPositionfaq <= faqpaddleMargin) {
  		$(leftPaddle).addClass('mouted');
  		$(rightPaddle).removeClass('mouted');
  	} else if (menuPositionfaq < menuEndOffsetfaq) {
  		$(leftPaddle).removeClass('mouted');
  		$(rightPaddle).removeClass('mouted');
  	} else if (menuPositionfaq >= menuEndOffsetfaq) {
  		$(leftPaddle).removeClass('mouted');
  		$(rightPaddle).addClass('mouted');
    }
  });
  
  if(!is_touch_device()){
  	var nav_out_timerfaq;
  	$(".TabbingVirewSupportFaq").mousedown(function(e){
  		e.preventDefault();e.stopPropagation();down=true;x=e.pageX;y=e.pageY;left=$(this).scrollLeft();
  	});
  	$(".TagMainWrapperRqExecution").mouseout(function(e){nav_out_timerfaq = window.setTimeout(function(){down = false;},100);});
  	$("body").mousemove(function(e){
    	if(down){var newX=e.pageX;$(".TabbingVirewSupportFaq").scrollLeft(left-newX+x);}
  	});
  	$(".TabbingVirewSupportFaq").on('mouseup',function(e){
  		if(down){e.preventDefault();e.stopPropagation();down=false;}
  	});
  	$(".TabbingVirewSupportFaq a").on('click',function(e){
  		if(Math.abs(left-$(".TabbingVirewSupportFaq").scrollLeft()) !== 0 ){e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();return false;}
  	});
  	$('.TabbingVirewSupportFaq a').each(function(){
          var existing_event = this.onclick;
          this.onclick = null;
          $(this).click(function(e){ 
              if($(this).hasClass('disabled')){e.stopImmediatePropagation();e.preventDefault();}                
          });
          if(existing_event){$(this).click(existing_event);}
  	});
  }

  
  function is_touch_device() {
    return 'ontouchstart' in window
        || navigator.maxTouchPoints;
  };

if( $('.template-product').length > 0 ){
  $(document).click(function(e){
    $(e.target).closest(".product__modal-opener, .global-media-settings, .LeftArrowModalproductZoom, .RightArrowModalproductZoom").length || ($('.product-media-modal').removeClass('active'),$('body').removeClass('maskedModal'))
  })
}   

if ( window.location.href.indexOf('&form_type=contact') > -1 ){
   if( $('.RqSupportPagePopUpModal').length > 0 ){$("body").addClass("ticketPopUpOpen");}
}else if( window.location.href.indexOf('?contact_posted=true') > -1 ){
   if( $('.RqSupportPagePopUpModal').length > 0 ){$("body").addClass("ticketPopUpOpen SuccesfullyFormSubmit");}  
}
if ( window.location.href.indexOf('?customer_posted=true') > -1 || window.location.href.indexOf('?contact%5Btags%5D=newsletter') > -1 ){$("body").addClass("FooterNewsLetterSubscribed");}
if ( $('.FooterNewsLetterSubscribed').length > 0 ){ $(document).on('click','[js-newsletter-closed]', function(e){e.preventDefault();$("body").removeClass("FooterNewsLetterSubscribed");}) }

if ( $('[ullist="products"]').length > 0 ){if ( $('[ullist="products"]').children('li').length == 0 ){ $('[result-tab="products"]').html('(0)'); $('[ullist="products"]').parents('.EachTabLayoutSumo').addClass('NoResultsFound').append('<div class="NoReturnMsg">No Results Found</div>');}else{var productsearchCount = $('[ullist="products"]').children('li').length;$('[result-tab="products"]').html('('+productsearchCount+')');}}
if ( $('[ullist="articles"]').length > 0 ){if ( $('[ullist="articles"]').children('li').length == 0 ){ $('[result-tab="articles"]').html('(0)'); $('[ullist="articles"]').parents('.EachTabLayoutSumo').addClass('NoResultsFound').append('<div class="NoReturnMsg">No Results Found</div>');}else{var articlessearchCount = $('[ullist="articles"]').children('li').length;$('[result-tab="articles"]').html('('+articlessearchCount+')');}}
if ( $('[ullist="expert-sessions"]').length > 0 ){if ( $('[ullist="expert-sessions"]').children('li').length == 0 ){ $('[result-tab="expert-sessions"]').html('(0)'); $('[ullist="expert-sessions"]').parents('.EachTabLayoutSumo').addClass('NoResultsFound').append('<div class="NoReturnMsg">No Results Found</div>');}else{var expertsearchCount = $('[ullist="expert-sessions"]').children('li').length;$('[result-tab="expert-sessions"]').html('('+expertsearchCount+')');}} 
if ( $('[ullist="podcasts"]').length > 0 ){if ( $('[ullist="podcasts"]').children('li').length == 0 ){ $('[result-tab="podcasts"]').html('(0)'); $('[ullist="podcasts"]').parents('.EachTabLayoutSumo').addClass('NoResultsFound').append('<div class="NoReturnMsg">No Results Found</div>');}else{var podcastsearchCount = $('[ullist="podcasts"]').children('li').length;$('[result-tab="podcasts"]').html('('+podcastsearchCount+')');}}  
});
$(document).on('click','[Jsmaintabexecution]', function(e){e.preventDefault();var indnm;$(this).addClass('active').siblings().removeClass('active');indnm = parseInt($(this).attr('indexmn')) - parseInt(1);$('.RQ-pds-mg-bkMnRW').children('.RQSubtabStructureViewer').eq(indnm).addClass('active').siblings().removeClass('active');});
$(document).on('click','[jssubmaintabs]', function(e){e.preventDefault();var indnmTab;$(this).addClass('active').siblings().removeClass('active');indnmTab = $(this).attr('tabname');$('[tabcontains="'+indnmTab+'"]').addClass('active').siblings().removeClass('active');});
$(document).on('click','[jsplayvideo]', function(e){e.preventDefault();var indnmTab;$(this).parents('.VideoPLayExecutionWp').addClass('active');if( $( window).width() > 749 ){indnmTab = $(this).attr('videosrc');}else{indnmTab = $(this).attr('mbvidoesrc');}$('[jsvideoloadcontainer]').html('<div class="VideoInt"><video controls playsinline><source src="'+indnmTab+'" type="video/mp4"></video></div>');});
$(document).on('click','[js-submenufopen]', function(e){e.preventDefault();$('.MainSUblastMenuWxtb').removeClass('active');$('.MenuDorpdownmen').removeClass('active');$(this).parents('.MenuDorpdownmen').toggleClass('active');});
$(document).on('click','[js-lastsubmenua]', function(e){e.preventDefault();$(this).parents('.MainSUblastMenuWxtb').toggleClass('active').siblings().removeClass('active');});
$(document).on('click', '.menu-drawer__close-button', function(){ $('.MainSUblastMenuWxtb').removeClass('active');$('.MenuDorpdownmen').removeClass('active');})
$(document).on('click','[js-tiitle-faq-collt]', function(e){e.preventDefault();$(this).parents('.RQ-sdBlockEachQ').toggleClass('active').siblings().removeClass('active'); $('html, body').animate({scrollTop: $(this).offset().top - 80}, 500);});

$(document).on('click','[js-rewardopener]', function(e){
  e.preventDefault();
  $(this).parents('.GiftRewardsWrapper').toggleClass('active').siblings().removeClass('active');
});
$(document).on('click','.IconClosedMenuDrw span', function(e){e.preventDefault();$('.menu-opening').children('.header__icon').trigger('click');$('body').removeClass('overflow-hidden');});
$(document).on('click','.SortMainFilterMobile', function(e){e.preventDefault();$('body').addClass('sortByPopupOpen');})
$(document).on('click','[js-sort-closed]', function(e){e.preventDefault();$('body').removeClass('sortByPopupOpen overflow-hidden-mobile');})
$(document).on('click','.SortByHeaderMb .SvgByHeadermb', function(e){e.preventDefault();$('body').removeClass('sortByPopupOpen overflow-hidden-mobile');})
$(document).on('change','[js-Selectionqtyrun]', function(e){e.preventDefault();var qtyValue = $(this).children('option:selected').val();$('[qtyhiddenupdate]').val(qtyValue); })
var productRecommendationSlider = setInterval(function(){
   if( $('.RqproductRecommedationView').length > 0 ){
    var swiper = new Swiper(".RqproductRecommedationView", {slidesPerView: 1.67,spaceBetween: 10,navigation: {nextEl: ".NextButtonSlideshowfd",prevEl: ".PrevButtonSlideShowfd"},pagination: {el: ".paginationFractionWp",clickable: true,dynamicBullets: true},breakpoints: {640: {slidesPerView: 1.2,spaceBetween: 16,pagination: {el: ".paginationFractionWp",type: "fraction"}},768: {slidesPerView: 2.4,spaceBetween: 16,pagination: {el: ".paginationFractionWp",type: "fraction"}},1024: {slidesPerView: 3.4,spaceBetween: 16,pagination: {el: ".paginationFractionWp",type: "fraction"}}}});
    StampedFn.loadBadges(); clearInterval(productRecommendationSlider) 
   }
  },200)

var cartRecommendationSlider = setInterval(function(){
   if( $('.RQcartRecommendationSlideShow').length > 0 ){
    var swiper = new Swiper(".RQcartRecommendationSlideShow", {slidesPerView: 1.172,spaceBetween: 10,navigation: {nextEl: ".NextButtonSlideshowfd",prevEl: ".PrevButtonSlideShowfd"},pagination: {el: ".paginationFractionWp",clickable: true,dynamicBullets: true},breakpoints: {640: {slidesPerView: 1.2,spaceBetween: 16,pagination: {el: ".paginationFractionWp",type: "fraction"}},768: {slidesPerView: 2.4,spaceBetween: 16,pagination: {el: ".paginationFractionWp",type: "fraction"}},1024: {slidesPerView: 4.134,spaceBetween: 10,pagination: {el: ".paginationFractionWp",type: "fraction"}}}});
    clearInterval(cartRecommendationSlider) 
   }
  },200)

$(document).on('click','[js-sort-apply]',function(){
    var loc = $(location).attr('href'),sortOption = $(this).parents('.RQmbSortByMain').children('.RQmbSortByouter').children('.SorttUltraListmb').children('.ListSortMobileDvp').children('[js-sorttmbfunctioning]').children('.sortBySelectMb').children('[name="SortMbOnlyView"]:checked').val();
    var incStr = loc.includes("sort_by"),ques ='?',previousOption = $('#SortBy-mobile').val(), optName= $('#SortBy-mobile').attr('name'); 

    if(incStr && ques){
		$('#SortBy-mobile').val(sortOption);
		var newLink = loc.replace( 'sort_by='+previousOption+''   ,   'sort_by='+sortOption+''),
		sectionid=$('aside').attr('data-id');
		fetch(window.location.pathname+'?section_id='+sectionid+'&'+optName+'='+sortOption+'')
		.then(response => response.text())
		.then(data => {
		const filterHTML = new DOMParser().parseFromString(data, 'text/html').querySelector('#ProductGridContainer').innerHTML;
		const collectionContent = document.querySelector('#ProductGridContainer');
		collectionContent.innerHTML = filterHTML;
		});
		if(newLink){
			window.history.replaceState(loc, {}, newLink);$('body').removeClass('sortByPopupOpen overflow-hidden-mobile'); 
		}
    }else if(incStr && !ques){
		$('#SortBy-mobile').val(sortOption);
		var newLink = loc.replace('sort_by='+previousOption+'','sort_by='+sortOption+''), sectionid=$('aside').attr('data-id');
		fetch(window.location.pathname+'?section_id='+sectionid+'&'+optName+'='+sortOption+'')
		.then(response => response.text())
		.then(data => {
			const filterHTML = new DOMParser().parseFromString(data, 'text/html').querySelector('#ProductGridContainer').innerHTML;
			collectionContent = document.querySelector('#ProductGridContainer');collectionContent.innerHTML = filterHTML; 
		});
		if(newLink){ 
			window.history.replaceState(loc, {}, newLink);$('body').removeClass('sortByPopupOpen overflow-hidden-mobile');
		}
    }
    else{
        $('#SortBy-mobile').val(sortOption);
		var newLink = loc+'?sort_by='+sortOption+'',
		sectionid=$('aside').attr('data-id');
		fetch(window.location.pathname+'?section_id='+sectionid+'&'+optName+'='+sortOption+'')
		.then(response => response.text())
		.then(data => {
			const filterHTML = new DOMParser().parseFromString(data, 'text/html').querySelector('#ProductGridContainer').innerHTML;
			collectionContent = document.querySelector('#ProductGridContainer');collectionContent.innerHTML = filterHTML; 
		});
		if(newLink){
			window.history.replaceState(loc, {}, newLink);$('body').removeClass('sortByPopupOpen overflow-hidden-mobile');
		}
    }
});

$(document).on('click','.product__accordion details', function(e){ $(this).attr('open');$(this).parent('.product__accordion').siblings().find('details').removeAttr('open');$(this).parent('.product__accordion').siblings().find('summary').attr('aria-expanded','false');
  $('html, body').animate({scrollTop: $(this).offset().top - 80}, 500);
  var vimeoWrap = $('.howToUseFaqContent');vimeoWrap.html( vimeoWrap.html() );
});

$(document).on('click','[js-support-tabdata]', function(e){e.preventDefault();var tabData = $(this).attr('tab-data');$(this).addClass('active').siblings().removeClass('active');$('[tab-content="'+tabData+'"]').addClass('active').siblings().removeClass('active');});
$(document).on('click','[js-support-accordion]', function(e){e.preventDefault();$(this).parents('.TabAccorionVwMn').toggleClass('active').siblings().removeClass('active');$('html, body').animate({scrollTop: $(this).offset().top - 80}, 500);});
$(document).on('click', '[js-search-tab-main]', function(e){e.preventDefault();var SearchTab = $(this).attr('search-main-tab');$(this).addClass('active').siblings().removeClass('active');$('[search-tab="'+SearchTab+'"]').addClass('active').siblings().removeClass('active');})

$(document).on('click', '[js-fiiftyOff-products]', function(e){
  e.preventDefault(); var FormSerialize = $(this).parents('[js-offerCartupsell]').serialize();$(this).children('span').children('txt').addClass('hidden');$(this).children('span').children('.loading-overlay__spinner').removeClass('hidden');
  $.ajax({url: "/cart/add.js",type: "POST",dataType: "json",data: FormSerialize,
  success: function (t) {window.location.reload();}
  }); 
});
$(document).on('click', '.product-media-modal__toggle', function(e){e.preventDefault();$(this).parents('.product-media-modal').removeClass('active');$('body').removeClass('maskedModal');});
$(document).on('click', '[js-modalzoom-left]', function(e){
  e.preventDefault();
  if( $('.product-media-modal__content').children('img.active').prev('img').length > 0 ){
    $('.product-media-modal__content').children('img.active').prev('img').addClass('active').siblings().removeClass('active');
  }else if( $('.product-media-modal__content').children('.deferred-media.active').prev('img').length > 0 ){
    $('.product-media-modal__content').children('.deferred-media.active').prev('img').addClass('active').siblings().removeClass('active');
  }else if( $('.product-media-modal__content').children('img.active').prev('.deferred-media').length > 0 ){
    $('.product-media-modal__content').children('img.active').prev('.deferred-media').addClass('active').siblings().removeClass('active');
  }
});
$(document).on('click', '[js-modalzoom-right]', function(e){
  e.preventDefault();
  if( $('.product-media-modal__content').children('img.active').next('img').length > 0 ){
    $('.product-media-modal__content').children('img.active').next('img').addClass('active').siblings().removeClass('active');
  }else if( $('.product-media-modal__content').children('img.active').next('.deferred-media').length > 0 ){
    $('.product-media-modal__content').children('img.active').next('.deferred-media').addClass('active').siblings().removeClass('active');
  }else if( $('.product-media-modal__content').children('.deferred-media.active').next('img').length > 0 ){
    $('.product-media-modal__content').children('.deferred-media.active').next('img').addClass('active').siblings().removeClass('active');
  }
});
$(document).on('click', '.search-modal__close-button', function(e){e.preventDefault();$(this).parents('details').removeAttr('open');$('body').removeClass('overflow-hidden');});
$(document).on('click', '.header__icon--summary', function(e){$('body').addClass('overflow-hidden');});
$(document).on('click', '.RedremmedBtnWp', function(e){
  if($(e.target).closest('cart-drawer').length > 0 && window.location.pathname != '/cart'){$('body').addClass('rewards_available');}
  $('.drawer__close').trigger('click');
});

$(document).on('click', '[js-offer-tab-int]', function(e){
  if( $(this).hasClass('HasClipboard') ){
      var element = $(this).attr('textbitch');
      var temp = $("<input>"); $("body").append(temp);
      temp.val(element).select(); document.execCommand("copy"); temp.remove();
      if( $('.GifAnPasteCupn').length == 0 ){$('.OffersHeadingblkmn').append('<div class="GifAnPasteCupn"><img src="https://cdn.shopify.com/s/files/1/0306/6262/3364/files/check-gif3.gif?v=1681389523"><p>Copied Coupon <b>'+element+'</b></p></div>')}
    }else{ $('.GifAnPasteCupn').remove();}
  $(this).addClass('active').siblings().removeClass('active');
  var offerTab = $(this).attr('offer-main-tab');
  $('[offer-tab="'+offerTab+'"]').addClass('active').siblings().removeClass('active');
});

$(document).on('click', '.stamped-summary-actions-newreview', function(e){var FormId = $(this).attr('aria-controls');if( $('#'+FormId).hasClass('stamped-visible') ){$("body").addClass("writeAReviewOpen");}else{$("body").removeClass("writeAReviewOpen");}});
$(document).on('keyup', '.new-review-form', function(e){ if( $('.new-review-form').hasClass('stamped-visible') ){$("body").addClass("writeAReviewOpen");}else{$("body").removeClass("writeAReviewOpen");}})

$(document).on('click', '[js-raise-ticket]', function(e){
  $(function() {
    let iframe = $('#launcher-frame');
    let button = iframe.contents().find('.launcher-button');
    button.trigger("click");
  });
  /* $("body").addClass("ticketPopUpOpen"); */ 
});
$(document).on('click', '[js-crossraisedpopup]', function(e){$("body").removeClass("ticketPopUpOpen");});

$(document).on('change', '[name="contact[Concern]"]', function(e){$(this).parents('.field').addClass("ConcenrnSelection");});
$(document).on('focus', '.field__input', function(e){ $(this).parents('.field').addClass('ConcenrnSelection') });
$(document).on('blur', '.field__input', function(e){if( !$(this).val() ) {$(this).parents('.field').removeClass('ConcenrnSelection')}})
   
$(document).on('click', '.CartHaveThis', function(e){e.preventDefault();var remove_product_offer = $(this).parents('form').children('[name="id"]').val();$('[offerid="'+remove_product_offer+'"]').trigger('click');});
$(document).on('click', '.PlayIconVd', function () {
  var videoSelector = $(this).next(),videoObject = videoSelector.get(0);
  $(this).toggleClass('active');videoSelector.toggleClass('active');
  $(this).closest('.WpSlideImageEx').toggleClass('video_playing');
  if($(this).hasClass('YoutubeInt')) {
    var videoURL = videoSelector.prop('src');
    if (videoSelector.hasClass('active')) {videoURL += "&mute=1&autoplay=1";videoSelector.prop('src', videoURL)} 
    else {videoURL = videoURL.replace("&mute=1&autoplay=1", "");videoSelector.prop('src', '');videoSelector.prop('src', videoURL)}
  } else if ($(this).hasClass('VimeoInt')) {
    var player = new Vimeo.Player(videoSelector);
    if (videoSelector.hasClass('active')) {player.play();} else {player.pause();}
  } else {videoObject.paused ? videoObject.play() : videoObject.pause();}
})

$(document).on('click', '.stamped-badge', function(e){
  if( $('.template-collection').length > 0){
    e.preventDefault(); var ProductId = $(this).parents('.stamped-product-reviews-badge').attr('data-id');
    if( $(window).width() > 767 ){
      if( $(this).parents('quick-add-modal').length > 0 ){ $('.quick-add-modal__content').animate({scrollTop: $(".shopify-app-block").children('[data-product-id="'+ProductId+'"]').offset().top - 40}, 800)}
    }else{
      if( $(this).parents('quick-add-modal').length > 0 ){ $('.quick-add-modal__content-info').animate({scrollTop: $(".shopify-app-block").children('[data-product-id="'+ProductId+'"]').offset().top - 40}, 800)}
    }
  }    
})

window.addEventListener('resize', function(event) {
  if( $(".VideoInt.show_des").children('video').length > 0 ){
   if( $(window).width() > 769 ){
     $(".VideoInt.show_mb").children('video').get(0).pause();
   }else{
     $(".VideoInt.show_des").children('video').get(0).pause();
   }
  }
}, true);
$(document).on('click', '[js-ingredientpopup]', function(e){e.preventDefault();$(this).parents('li').children('.MainIngredientPopupView').addClass('active');$('body').addClass('overflow-hidden');});
$(document).on('click', '.IngredientCrossButton', function(e){e.preventDefault();$('.MainIngredientPopupView').removeClass('active');$('body').removeClass('overflow-hidden');});
$(document).click(function (e) {
  if (!$(e.target).closest('[js-ingredientpopup], .WRapperPopupExecutionrt').length) {$('.MainIngredientPopupView').removeClass('active');$('body').removeClass('overflow-hidden');}
  if (!$(e.target).closest('.RQmbSortByMain, .SortMainFilterMobile').length) {$('body').removeClass('sortByPopupOpen overflow-hidden-mobile');}
});

$.fn.isInViewportIndex = function() { var elementTop=$(this).offset().top + 165 ,elementBottom=elementTop + $(this).outerHeight(),viewportTop=$(window).scrollTop(),viewportBottom=viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
}

$(document).on('click', '.disabledButtonAtc .ProductFormInitialize', function(e){
  e.preventDefault();
  if ($(window).width() < 767){
    if( $('.ColorSwatchWillShow').isInViewportIndex() ){
      console.log('yes');
    }else{
       $('html, body').animate({scrollTop: $('.ColorSwatchWillShow').offset().top - 490}, 500);
    }
  }
})







//   $(".MobileSearchIconWrapper  input").focus(function(){
//  $(".main_mob_popular_search").show();
// });
// $(document).mouseup(function(e) {
//     var container = $(".MobileSearchIconWrapper");
//     if (!container.is(e.target) && container.has(e.target).length === 0) {
//          $(".main_mob_popular_search").hide();
//     }
// });
// $(window).scroll(function(){
//  $(".main_mob_popular_search").hide();
// $(".MobileSearchIconWrapper  input").blur();
// })

