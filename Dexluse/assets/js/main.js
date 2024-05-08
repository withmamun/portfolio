(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {


        //------------ Offcanvas -------------

        $('.menu-open , .offcanvas-overlay').click(function () {

            $('.offcanvas-area , .offcanvas-overlay').addClass('active');

        });
        $('.menu-close , .offcanvas-overlay').click(function () {

            $('.offcanvas-area , .offcanvas-overlay').removeClass('active');

        });


        //------------ Brand slider -------------

        $('.brand__main__slider').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dot: false,
            autoplay: true,
            autoplayTimeout: 1500,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    margin: 15,
                    items: 2
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 6
                }
            }
        })


        //----------------- Venobox Video ------------------

        new VenoBox({
            selector: '.venobox'
        });


        //--------------- Gallery Slider -------------------

        $('.gallery__big__slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<button class="slide-arrow prev-arrow"></button>',
            nextArrow: '<button class="slide-arrow next-arrow"></button>',
            dots: false,
            fade: true,
            asNavFor: '.gallery__small__slider'
        });
        $('.gallery__small__slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.gallery__big__slider',
            dots: false,
            arrows: false,
            centerMode: true,
            focusOnSelect: true
        });




    }); //---document-ready-----

}(jQuery));


//------------ Timer -------------

function makeTimer() {


    var startTime = new Date("22 July 2017 20:00:00 GMT+02:00");
    startTime = (Date.parse(startTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timePassed = now - startTime;

    var years = Math.floor(timePassed / (86400 * 365));
    var months = Math.floor((timePassed / (86400 * 30.41)) - (years * 12));
    var days = Math.floor((timePassed / 86400) - (years * 365) - (months * 30.41));
    var hours = Math.floor((timePassed / 3600) - (years * (24 * 365)) - (months * (24 * 30.41)) - (days * 24));
    var minutes = Math.floor((timePassed / 60) - (years * (1440 * 365)) - (months * (1440 * 30.41)) - (days * (60 * 24)) - (hours * 60));
    var seconds = Math.floor(timePassed - (years * (86400 * 365)) - (months * (86400 * 30.41)) - (days * 86400) - (hours * 3600) - (minutes * 60));

    if (months < "10") {
        months = "0" + months;
    }
    if (days < "10") {
        days = "0" + days;
    }
    if (hours < "10") {
        hours = "0" + hours;
    }
    if (minutes < "10") {
        minutes = "0" + minutes;
    }
    if (seconds < "10") {
        seconds = "0" + seconds;
    }

    $("#years").html(years + "<span>Years</span>");
    $("#months").html(months + "<span>Months</span>");
    $("#days").html(days + "<span>Days</span>");
    $("#hours").html(hours + "<span>Hours</span>");
    $("#minutes").html(minutes + "<span>Minutes</span>");
    $("#seconds").html(seconds + "<span>Seconds</span>");

}

setInterval(function () {
    makeTimer();
}, 1000);