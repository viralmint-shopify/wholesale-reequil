document.addEventListener('DOMContentLoaded',function(){
  var latestCarousel = document.querySelectorAll('.RQ_LatestCarouselWrpr.swiper.mySwiper');
  if(latestCarousel)
  latestCarousel.forEach(function(evt){
    var latestCarouselSlider = new Swiper(evt,{
      slidesPerView: 1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
      }
    })
  })

  var awardWiningPds = document.querySelectorAll('.awdWinSunscreenMN .RQ_AwrdWinPdsListMN.swiper.mySwiper');
  if(awardWiningPds)
  awardWiningPds.forEach(function(evt){
    var awardWiningPdsSlider = new Swiper(evt,{
      slidesPerView: 4,
      spaceBetween: 36,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
      },
      breakpoints: {
        1025: {
          slidesPerView: 4
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 24
        },
        749: {
          slidesPerView: 2,
          spaceBetween: 18
        },
        0: {
          slidesPerView: 1.18,
          spaceBetween: 21
        }
      }
    })
  })

  var awardWiningPds = document.querySelectorAll('.clincBestsellersMN .RQ_AwrdWinPdsListMN.swiper.mySwiper');
  if(awardWiningPds)
  awardWiningPds.forEach(function(evt){
    var awardWiningPdsSlider = new Swiper(evt,{
      slidesPerView: 3.29,
      spaceBetween: 24,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      breakpoints: {
        1025: {
          slidesPerView: 3.29
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        749: {
          slidesPerView: 2
        },
        0: {
          slidesPerView: 1.25,
          spaceBetween: 16
        }
      }
    })
  })

  var customerOpinion = document.querySelectorAll('.RQ_CstmrOpionListMN.swiper.mySwiper');
  if(customerOpinion)

    var customerOpinionSlider = new Swiper(".RQ_CstmrOpionListMN.swiper.mySwiper",{
      slidesPerView: 3,
      spaceBetween: 56,
      orientationchange:true,
      resizeObserver:true,
      autoHeight: true,
      resizeReInit: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
      },
      breakpoints: {
        991: { slidesPerView: 3,spaceBetween: 56,orientationchange:true,resizeObserver:true,resizeReInit: true,autoHeight: true },
        749: { slidesPerView: 2, spaceBetween: 28,orientationchange:true,resizeObserver:true,resizeReInit: true,autoHeight: true },
        0: { slidesPerView: 1, spaceBetween: 12,orientationchange:true,resizeObserver:true,resizeReInit: true,autoHeight: true }
      }
    });

  var tabProducts = document.querySelectorAll('.RQ_SkinRgmTabCntItemMN.swiper.mySwiper');
  if(tabProducts)
  tabProducts.forEach(function(evt){
    var tabPDsSlider = new Swiper(evt,{
      slidesPerView: 3.396,
      spaceBetween: 24,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      breakpoints: {
        1024: {
          slidesPerView: 3.396
        },
        991: {
          slidesPerView: 3
        },
        749: {
          slidesPerView: 2
        },
        0: {
          slidesPerView: 1.18,
          spaceBetween: 16,
        }
      }
    })
  })

  var tabGroupInit = document.querySelectorAll('[JSTabTargetHmInit]');
  if(tabGroupInit)
  tabGroupInit.forEach(function(evt){
    evt.addEventListener('click',function(e){
      e.preventDefault();
      var tabURL = this.getAttribute('href');
      this.parentNode.classList.add('activeTab');
      var node = this.parentNode.parentNode.firstChild;
      while(node){if(node != this.parentNode && node.nodeType === Node.ELEMENT_NODE ) node.classList.remove('activeTab'); node = node.nextElementSibling || node.nextSibling;}
      document.getElementById(tabURL).classList.add('activeProducts');
      var tabNode = document.getElementById(tabURL).parentNode.firstChild;
      while(tabNode){if(tabNode != document.getElementById(tabURL) && tabNode.nodeType === Node.ELEMENT_NODE ) tabNode.classList.remove('activeProducts'); tabNode = tabNode.nextElementSibling || tabNode.nextSibling;}
    })
  })

  var videoPopTarget = document.querySelector('.RQ_NewYearBnrWrpr');
  if(videoPopTarget)
  videoPopTarget.addEventListener('click',function(e){
    // e.preventDefault();
    if(this.querySelector('.RQ_NewYearBnrMedia img').classList.contains('show_des')){
      this.querySelector('.RQ_NewYearBnrVideo iframe.show_des').classList.add('popIframeActive');
    }else if(this.querySelector('.RQ_NewYearBnrMedia img').classList.contains('show_mb')){
      this.querySelector('.RQ_NewYearBnrVideo iframe.show_mb').classList.add('popIframeActive');
    }
    document.body.classList.add('mainPopActive')
  })

  var videoPopOvrly = document.querySelector('.iframeOverlay');
  if(videoPopOvrly)
  videoPopOvrly.addEventListener('click',function(e){
    document.body.classList.remove('mainPopActive');
    document.querySelector('.RQ_NewYearVideoMN iframe.show_des').classList.remove('popIframeActive');
    document.querySelector('.RQ_NewYearVideoMN iframe.show_mb').classList.remove('popIframeActive');
  })
  
})