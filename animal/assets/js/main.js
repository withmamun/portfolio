(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {




        $('.menu-open , .offcanvas-overlay').click(function () {

            $('.offcanvas-area , .offcanvas-overlay').addClass('active');

        });
        $('.menu-close , .offcanvas-overlay').click(function () {

            $('.offcanvas-area , .offcanvas-overlay').removeClass('active');

        });


        $('.hero__slider').on('initialized.owl.carousel changed.owl.carousel', function (e) {
            if (!e.namespace) {
                return;
            }
            var carousel = e.relatedTarget;
            $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
        }).owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            dots: true,
            nav: false,
            smartSpeed: 1000,
        });



        $(".animal__slider__wrapper").owlCarousel({
            items: 4,
            nav: false,
            dot: true,
            loop: false,
            margin: 12,
            autoplay: false,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
            responsiveClass: true,
            stagePadding: -20,
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 60,
                },
                575: {
                    items: 2,
                    margin: 7,
                },
                750: {
                    items: 2,
                    margin: 7,
                },
                768: {
                    items: 3,
                },
                991: {
                    items: 3,
                    margin: 12,
                },
                1200: {
                    items: 4,
                    margin: 12,
                },
                1360: {
                    items: 4,
                    margin: 12,
                }
            }


        });

        $(".service__slider").owlCarousel({
            items: 6,
            nav: false,
            dot: false,
            loop: true,
            margin: 7,
            autoplay: false,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 60,
                },
                575: {
                    items: 2,
                    margin: 7,
                },
                750: {
                    items: 2,
                    margin: 7,
                },
                768: {
                    items: 3,
                },
                991: {
                    items: 4,
                    margin: 7,
                },
                1200: {
                    items: 5,
                    margin: 7,
                },
                1420: {
                    items: 6,
                    margin: 7,
                }
            }


        });

        $(".testimonial__slider__wrapper").owlCarousel({
            items: 1,
            nav: false,
            dot: true,
            loop: true,
            margin: 0,
            autoplay: false,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
            responsiveClass: true,


        });


    });



}(jQuery));