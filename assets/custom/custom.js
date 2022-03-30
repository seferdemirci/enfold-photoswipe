jQuery(document).ready(function ($) {
    
    // Activate PhotoSwipe for gallery 
    $('.avia-gallery-thumb a').on('click', function(e){
        
        var pswpElement = document.querySelectorAll('.pswp')[0];
        var container = [];
        $('.avia-gallery-thumb').find('a').each(function() {
            var link = $(this),
              item = {
                src: link.attr('href'),
                w: 0,
                h: 0,
                title: document.title,
              };
            container.push(item);
        });

        var options = {
            index: $(this).index(),
            captionEl: false,
            tapToClose: false,
            history: false,
            showHideOpacity: true,
            preloaderEl: true,
            shareEl: false,
            captionEl: true,
            getThumbBoundsFn: function(index) {
                var thumbnail = document.querySelectorAll('.avia-gallery-thumb a')[index];
                var pageYScroll = window.pageYOffset || document.documentElement.scrollTop; 
                var rect = thumbnail.getBoundingClientRect(); 
                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            },
            getDoubleTapZoom: function(isMouseClick, item) {
                if(isMouseClick) {
                    return 1;
                } else {
                    return item.initialZoomLevel < 0.7 ? 1 : 1.5;
                }
            }
        };

        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, container, options);
        gallery.listen('gettingData', function(index, item) {
            if (item.w < 1 || item.h < 1) {
                var img = new Image(); 
                img.onload = function() { 
                    item.w = this.width;
                    item.h = this.height;
                    gallery.invalidateCurrItems();
                    gallery.updateSize(true);
                }
                img.src = item.src;
            }
        });
        gallery.listen('close', function() { 
            $.magnificPopup.close();
        });
        gallery.init();
    });
    
    // Activate PhotoSwipe for single image
    $('.avia-image-container a, a.lightbox-added').on('click', function(e){
        var pswpElement = document.querySelectorAll('.pswp')[0];
        var container = [{
            src: $(this).attr('href'),
            w: 0,
            h: 0,
            title: document.title,
        }];
        var options = {
            index: 0,
            captionEl: false,
            tapToClose: false,
            history: false,
            showHideOpacity: true,
            preloaderEl: true,
            shareEl: false,
            captionEl: true,
            getThumbBoundsFn: function(index) {
                var thumbnail = document.querySelectorAll('a.lightbox-added')[index];
                var pageYScroll = window.pageYOffset || document.documentElement.scrollTop; 
                var rect = thumbnail.getBoundingClientRect(); 
                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            },
            getDoubleTapZoom: function(isMouseClick, item) {
                if(isMouseClick) {
                    return 1;
                } else {
                    return item.initialZoomLevel < 0.7 ? 1 : 1.5;
                }
            }
        };

        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, container, options);
        gallery.listen('gettingData', function(index, item) {
            if (item.w < 1 || item.h < 1) {
                var img = new Image(); 
                img.onload = function() { 
                    item.w = this.width;
                    item.h = this.height;
                    gallery.invalidateCurrItems();
                    gallery.updateSize(true);
                }
                img.src = item.src;
            }
        });
        gallery.listen('close', function() { 
            $.magnificPopup.close();
        });
        gallery.init();
    });

})