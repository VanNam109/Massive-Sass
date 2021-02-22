; (function () {
    var $window, $document, $body;

    $window = $(window);
    $document = $(document);
    $body = $("body");




    $document.ready(function () {

        /*==============================================
             Smooth scroll init
             ===============================================*/
        if (typeof smoothScroll == "object") {
            smoothScroll.init();
        }

        /*==============================================
           Onepage nav init
           ===============================================*/
        $(".op-nav li").on("click", function () {
            if ($(".showhide").is(":visible")) {
                $(".showhide").trigger("click");
            }
        });

        if ($.fn.onePageNav) {
            $(".op-nav").onePageNav({
                currentClass: "active"
            });
        }

        /*==============================================
                   
                      ===============================================*/

        $(".portfolio-gallery").each(function () { // the containers for all your galleries
            $(this).find(".popup-gallery").magnificPopup({
                type: "image",
                gallery: {
                    enabled: true
                }
            });
            $(this).find(".popup-gallery2").magnificPopup({
                type: "image",
                gallery: {
                    enabled: true
                }
            });
        });
        // olw carousel
        $('#carousel-object').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            autoplay: true,
            autoplayTimeout: 1300,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
            }
        });

        $('#comment').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            dotsEach: true,
            autoplay: true,
            autoplayTimeout: 2000,
            responsive: {
                0: {
                    items: 1
                },
            }
        });

        $('#clients').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            autoplay: true,
            autoplayTimeout: 5000,
            items: 6,
            slideBy: 6,
        });


        // wow
        var wow = new WOW(
            {
                boxClass: 'wow',      // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0,          // distance to the element when triggering the animation (default is 0)
                mobile: true,       // trigger animations on mobile devices (default is true)
                live: true,       // act on asynchronously loaded content (default is true)
                callback: function (box) {
                    // the callback is fired every time an animation is started
                    // the argument that is passed in is the DOM node being animated
                },
                scrollContainer: null,    // optional scroll container selector, otherwise use window,
                resetAnimation: true,     // reset animation on end (default is true)
            }
        );
        wow.init();
    });

})(jQuery);