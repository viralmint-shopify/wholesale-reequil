if (!customElements.get('media-gallery')) {
  customElements.define('media-gallery', class MediaGallery extends HTMLElement {
    constructor() {
      super();
      this.elements = {
        liveRegion: this.querySelector('[id^="GalleryStatus"]'),
        viewer: this.querySelector('[id^="GalleryViewer"]'),
        thumbnails: this.querySelector('[id^="GalleryThumbnails"]')
      }
      this.mql = window.matchMedia('(min-width: 750px)');
      if (!this.elements.thumbnails) return;

      this.elements.viewer.addEventListener('slideChanged', debounce(this.onSlideChanged.bind(this), 500));
      this.elements.thumbnails.querySelectorAll('[data-target]').forEach((mediaToSwitch) => {
        mediaToSwitch.querySelector('button').addEventListener('click', this.setActiveMedia.bind(this, mediaToSwitch.dataset.target, false));
      });
      if (this.dataset.desktopLayout.includes('thumbnail') && this.mql.matches) this.removeListSemantic();
    }

    // onSlideChanged(event) {
    //   const thumbnail = this.elements.thumbnails.querySelector(`[data-target="${ event.detail.currentElement.dataset.mediaId }"]`);
    //   const thumbnailIndex = this.elements.thumbnails.querySelector(`[data-target="${ event.detail.currentElement.dataset.mediaId }"]`).getAttribute("dots-index") - 1;
    //   this.setActiveThumbnail(thumbnail);
    //   window.pauseAllMedia();
    //   if(thumbnailIndex > 3){var GrabTranslate = parseInt(thumbnailIndex - 3)*12;$('.MobileDotsWp').css('transform', 'translateX(-'+GrabTranslate+'px)');}
    //   else{$('.MobileDotsWp').css('transform', 'translateX(0)'); }
    //   $('.MobileDotsWp').children('li').eq(thumbnailIndex).addClass('active').siblings().removeClass('active');
    // }

     onSlideChanged(event) {
        const thumbnail = this.elements.thumbnails.querySelector(`[data-target="${event.detail.currentElement.dataset.mediaId}"]`);
        const thumbnailIndex = parseInt(this.elements.thumbnails.querySelector(`[data-target="${event.detail.currentElement.dataset.mediaId}"]`).getAttribute("dots-index")) - 1;
       const activeMedia22 = this.elements.viewer.querySelector(`[data-media-id="${event.detail.currentElement.dataset.mediaId}"]`); 
       this.setActiveThumbnail(thumbnail);
              
        window.pauseAllMedia();
        const $dotsWp = $('.MobileDotsWp');
        // const $activeDot = $dotsWp.children('li').eq(thumbnailIndex);
      const $activedot2 = $dotsWp.children('li[data-media-id="'+event.detail.currentElement.dataset.mediaId+'"]')
        const containerWidth = $dotsWp.width();
        const dotWidth = $activedot2.outerWidth();
        const halfContainerWidth = containerWidth / 2;
        const halfDotWidth = dotWidth / 2;
        const translateX = halfContainerWidth - $activedot2.position().left - halfDotWidth;
      
        $dotsWp.children('li').removeClass('active');
        $activedot2.addClass('active');
      
        $dotsWp.css('transform', `translateX(${translateX}px)`);
              if (activeMedia22.classList.contains("video_exist")) {
             var videoElement = activeMedia22.querySelector('.ExternalVideoExecution video');
    if (videoElement) {
        videoElement.play();
    }
       }else{
           $(".ExternalVideoExecution video").trigger("pause");
       }
      }

    setActiveMedia(mediaId, prepend) {
      const activeMedia = this.elements.viewer.querySelector(`[data-media-id="${ mediaId }"]`);
// setTimeout(function() {
//                     if (activeMedia.classList.contains("video_exist")) {
//              var videoElement = activeMedia.querySelector('.ExternalVideoExecution video');
//     if (videoElement) {
//         videoElement.play();
//     }
//        }else{
//            $(".ExternalVideoExecution video").trigger("pause");
//        }
// },800);

      this.elements.viewer.querySelectorAll('[data-media-id]').forEach((element) => {
        element.classList.remove('is-active');
      });
      activeMedia.classList.add('is-active');

      if (prepend) {
        activeMedia.parentElement.prepend(activeMedia);
        if (this.elements.thumbnails) {
          const activeThumbnail = this.elements.thumbnails.querySelector(`[data-target="${ mediaId }"]`);
          activeThumbnail.parentElement.prepend(activeThumbnail);
        }
        if (this.elements.viewer.slider) this.elements.viewer.resetPages();
      }

      this.preventStickyHeader();
      window.setTimeout(() => {
        if (this.elements.thumbnails) {
          activeMedia.parentElement.scrollTo({ left: activeMedia.offsetLeft });
        }
        if (!this.elements.thumbnails || this.dataset.desktopLayout === 'stacked') {
          activeMedia.scrollIntoView({behavior: 'smooth'});
        }
      });
      this.playActiveMedia(activeMedia);

      if (!this.elements.thumbnails) return;
      const activeThumbnail = this.elements.thumbnails.querySelector(`[data-target="${ mediaId }"]`);
      this.setActiveThumbnail(activeThumbnail);
      this.announceLiveRegion(activeMedia, activeThumbnail.dataset.mediaPosition);


      
    }

    setActiveThumbnail(thumbnail) {
      if (!this.elements.thumbnails || !thumbnail) return;

      this.elements.thumbnails.querySelectorAll('button').forEach((element) => element.removeAttribute('aria-current'));
      thumbnail.querySelector('button').setAttribute('aria-current', true);
      if (this.elements.thumbnails.isSlideVisible(thumbnail, 10)) return;

      this.elements.thumbnails.slider.scrollTo({ left: thumbnail.offsetLeft });
    }

    announceLiveRegion(activeItem, position) {
      const image = activeItem.querySelector('.product__modal-opener--image img');
      if (!image) return;
      image.onload = () => {
        this.elements.liveRegion.setAttribute('aria-hidden', false);
        this.elements.liveRegion.innerHTML = window.accessibilityStrings.imageAvailable.replace(
          '[index]',
          position
        );
        setTimeout(() => {
          this.elements.liveRegion.setAttribute('aria-hidden', true);
        }, 2000);
      };
      image.src = image.src;
    }

    playActiveMedia(activeItem) {
      window.pauseAllMedia();
      const deferredMedia = activeItem.querySelector('.deferred-media');
      if (deferredMedia) deferredMedia.loadContent(false);
    }

    preventStickyHeader() {
      this.stickyHeader = this.stickyHeader || document.querySelector('sticky-header');
      if (!this.stickyHeader) return;
      this.stickyHeader.dispatchEvent(new Event('preventHeaderReveal'));
    }

    removeListSemantic() {
      if (!this.elements.viewer.slider) return;
      this.elements.viewer.slider.setAttribute('role', 'presentation');
      this.elements.viewer.sliderItems.forEach(slide => slide.setAttribute('role', 'presentation'));
    }
  });
}
