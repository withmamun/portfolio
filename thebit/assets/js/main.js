$(document).ready(function () {












    // service__slide__blk
    $('.service__slide__blk').owlCarousel({
        dots: false,
        loop: true,
        nav: true,
        navText: ['<i class="fal fa-arrow-left"></i>', '<i class="fal fa-arrow-right"></i>'],
        autoplay: false,
        smartSpeed: 1000,
        autoplayTimeout: 3500,
        items: 3,
        margin: 25,
        slideToScroll: 1,
        center: true,
        autoplayHoverPause: true,

        responsive: {
            0: {
                stagePadding: 0,
            },
            320: {
                autoHeight: true,
                items: 1,
                stagePadding: 50,
            },
            450: {
                autoHeight: true,
                items: 1,
                stagePadding: 50,
            },
            575: {
                autoHeight: true,
                items: 1,
                stagePadding: 70,
            },
            768: {
                items: 2,
                autoHeight: true,
                stagePadding: 0,
            },

            992: {
                items: 3,
                stagePadding: 0,
            },
            1100: {
                items: 2,
                stagePadding: 0,
            },
            1200: {
                items: 3,
                stagePadding: 0,
            },
            1360: {
                stagePadding: 0,
            },
            1449: {
                stagePadding: 0,
            },
            1500: {
                items: 3,
                stagePadding: 0,
            },
            1600: {
                stagePadding: 0,
            },
            1700: {
                stagePadding: 0,
            }
        }

    });


    // slider__report__blk
    $('.slider__report__blk').owlCarousel({
        dots: false,
        loop: true,
        nav: true,
        navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 3500,
        items: 3,
        margin: 30,
        slideToScroll: 1,
        center: false,
        autoplayHoverPause: true,

        responsive: {
            0: {
                stagePadding: 0,
            },
            320: {
                items: 1,
                stagePadding: 0,
            },
            450: {
                items: 1,
                stagePadding: 0,
            },
            575: {
                items: 1,
                stagePadding: 0,
            },
            768: {
                items: 1,
                stagePadding: 0,
            },

            868: {
                items: 2,
                stagePadding: 0,
            },

            992: {
                items: 2,
                stagePadding: 0,
            },
            1100: {
                items: 2,
                stagePadding: 0,
            },
            1200: {
                items: 2,
                stagePadding: 0,
            },
            1360: {
                stagePadding: 0,
            },
            1449: {
                stagePadding: 0,
            },
            1500: {
                items: 3,
                stagePadding: 0,
            },
            1600: {
                stagePadding: 0,
            },
            1700: {
                stagePadding: 0,
            },
            1900: {
                items: 4,
                stagePadding: 0,
            },
            2200: {
                items: 5,
                stagePadding: 0,
            },
            2800: {
                items: 6,
                stagePadding: 0,
            }
        }

    });


});

//------------ Offcanvas menu -------------

$('.open__menu').on('click', function () {
    $('.main__menu, .overlay').addClass('active');
})
$('.close__menu, .overlay').on('click', function () {
    $('.main__menu, .overlay').removeClass('active');
})