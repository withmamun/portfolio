(function($) {

	'use strict';

	/**
	 	<=={Master JS}==>
	 	01 - Mobile Menu JS
		02 - Header Sticky JS
		03 - Go Top JS
		04 - Preloader JS
		05 - WOW JS
		06 - Testimonials JS
		07 - Blog Slide JS
		08 - counter JS
		09 - Hero Slide JS
		10 - Input Counter JS
	**/

	/**<<=== 01 Mobile Menu JS ==>>**/
	$('.for-mobile-menu, .inner-menu').meanmenu({
		meanScreenWidth: "991",
	});
	
	/**<<=== 02 Header Sticky JS ==>>**/
	$(window).on('scroll', function() {
		if ($(this).scrollTop() >150){  
			$('.navbar-section').addClass("is-sticky");
		}
		else{
			$('.navbar-section').removeClass("is-sticky");
		};
	});

	/**<<=== 03 Go Top JS ==>>**/
	$('.go-top').on('click', function() {
		$("html, body").animate({ scrollTop: "0" }, 50);
	});
	$(window).on('scroll', function() {
		var scrolled = $(window).scrollTop();
		if (scrolled > 300) $('.go-top').addClass('active');
		if (scrolled < 300) $('.go-top').removeClass('active');
	});

	/**<<=== 04 Preloader JS ==>>**/
	$(window).on('load', function() {
		$('.preloader').addClass('preloader-deactivate');
	}) 

	/**<<=== 05 WOW JS ==>>**/
	if($('.wow').length){
		var wow = new WOW({
			mobile: false
		});
		wow.init();
	}

	/**<<=== 06 Product Slider JS ==>>**/
	$('.product-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		nav: true,
		dots: false,
		autoplay: false,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		center: true,
		navText: [
			"<img src='assets/images/left.svg' alt='image'>",
			"<img src='assets/images/right.svg' alt='image'>",
		],
		responsive: {
			0: { 
				items: 1,
				center: false,
			},
			576: {
				items: 1,
				center: false,
			},
			768: {
				items: 2,
				center: false,
			},
			992: {
				items: 2,
				center: false,
			},
			1200: {
				items: 3,
			},
			1500: {
				items: 3,
			},
		},
	});
	
	/**<<=== 07 peopler Slide JS ==>>**/
	$('.peopler-product-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		nav: true,
		dots: false,
		autoplay: false,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		navText: [
			"<img src='assets/images/left.svg' alt='image'>",
			"<img src='assets/images/right.svg' alt='image'>",
		],
		responsive: {
			0: {
				items: 1,
			},
			576: {
				items: 1,
			},
			768: {
				items: 2,
			},
			992: {
				items: 3,
			},
			1200: {
				items: 4,
			},
			1500: {
				items: 4,
				stagePadding: 1,
			},
		},
	});

	/**<<=== 07 peopler Slide JS ==>>**/
	$('.peopler-product-sliderss').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		nav: false,
		dots: false,
		autoplay: false,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		navText: [
			"<img src='assets/images/left.svg' alt='image'>",
			"<img src='assets/images/right.svg' alt='image'>",
		],
		responsive: {
			0: {
				items: 1,
				stagePadding: 50,
			},
			576: {
				items: 1,
			},
			768: {
				items: 2,
			},
			992: {
				items: 3,
			},
			1200: {
				items: 4,
			},
			1500: {
				items: 4,
				stagePadding: 1,
			},
		},
	});

	/**<<=== 07 Blog Slide JS ==>>**/
	$('.blog-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		nav: true,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		navText: [
			"<img src='assets/images/llllll.svg' alt='image'>",
			"<img src='assets/images/rrrrrr.svg' alt='image'>",
		],
		responsive: {
			0: {
				items: 1,
			},
			576: {
				items: 1,
			},
			768: {
				items: 2,
			},
			992: {
				items: 2,
			},
			1200: {
				items: 3,
			},
			1500: {
				items: 3,
			},
		},
	});

	/**<<=== 07 Team Slide JS ==>>**/
	$('.team-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 30,
		nav: true,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		navText: [
			"<img src='assets/images/llllll.svg' alt='image'>",
			"<img src='assets/images/rrrrrr.svg' alt='image'>",
		],
		responsive: {
			0: {
				items: 1,
			},
			576: {
				items: 2,
			},
			768: {
				items: 3,
			},
			992: {
				items: 3,
			},
			1200: {
				items: 4,
			},
			1500: {
				items: 4,
			},
		},
	});

	/**<<=== 07 Most EX Slide JS ==>>**/
	$('.most-ex-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		nav: false,
		dots: false,
		autoplay: false,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		mouseDrag: false,
		navText: [
			"<img src='assets/images/left.svg' alt='image'>",
			"<img src='assets/images/right.svg' alt='image'>",
		],
		responsive: {
			0: {
				items: 1,
				autoplay: true,
			},
			576: {
				items: 1,
				autoplay: true,
			},
			768: {
				items: 2,
				autoplay: false,
				stagePadding: 110,
			},
			992: {
				items: 2,
				autoplay: true,
			},
			1200: {
				items: 3,
				autoplay: true,
			},
			1500: {
				items: 4,
			},
		},
	});

	/**<<=== 07 Most EX Slide JS ==>>**/
	$('.for-cart-product-slide').owlCarousel({
		items: 1,
		loop: true,
		margin: 10,
		nav: false,
		dots: false,
		autoplay: false,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		mouseDrag: false,
		navText: [
			"<img src='assets/images/left.svg' alt='image'>",
			"<img src='assets/images/right.svg' alt='image'>",
		],
		responsive: {
			0: {
				items: 2,
				autoplay: true,
				stagePadding: 40,
			},
			576: {
				items: 3,
				autoplay: true,
			},
			768: {
				items: 2,
				autoplay: true,
			},
			992: {
				items: 2,
				autoplay: true,
			},
			1200: {
				items: 3,
				autoplay: true,
			},
			1500: {
				items: 4,
			},
		},
	});

	/**<<=== 07 Most EX Slide JS ==>>**/
	$('.how-its-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 10,
		nav: false,
		dots: false,
		autoplay: false,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		mouseDrag: false,
		navText: [
			"<img src='assets/images/left.svg' alt='image'>",
			"<img src='assets/images/right.svg' alt='image'>",
		],
		responsive: {
			0: {
				items: 1,
				autoplay: true,
				stagePadding: 60,
			
			},
			576: {
				items: 2,
				autoplay: true,
			},
			768: {
				items: 3,
			},
			992: {
				items: 3,
			},
			1200: {
				items: 3,
			},
			1500: {
				items: 3,
			},
		},
	});

	/**<<=== 07 Most EX Slide JS ==>>**/
	$('.someplase-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 23,
		nav: true,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		navText: [
			"<img src='assets/images/left.svg' alt='image'>",
			"<img src='assets/images/right.svg' alt='image'>",
		],
		responsive: {
			0: {
				items: 1,
				stagePadding: 50,
			},
			576: {
				items: 1,
			},
			768: {
				items: 2,
			},
			992: {
				items: 3,
			},
			1200: {
				items: 4,
			},
			1500: {
				items: 4,
			},
		},
	});

	/**<<=== 07 Most EX Slide JS ==>>**/
	$('.hardcopies-sliders').owlCarousel({
		items: 1,
		loop: true,
		margin: 23,
		nav: true,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		navText: [
			"<img src='assets/images/left.svg' alt='image'>",
			"<img src='assets/images/right.svg' alt='image'>",
		],
		responsive: {
			0: {
				items: 1,
				stagePadding: 70,
			},
			576: {
				items: 2,
			},
			768: {
				items: 2,
			},
			992: {
				items: 3,
			},
			1200: {
				items: 4,
			},
			1500: {
				items: 4,
			},
		},
	});
	
	/**<<=== 09 Banner Slide JS ==>>**/
	$('.mouth-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		nav: true,
		dots: false,
		autoHeight: true,
		autoplay: true,
		smartSpeed: 1500,
		navText: [
			"<img src='assets/images/llllll.svg' alt='image'>",
			"<img src='assets/images/rrrrrr.svg' alt='image'>",
		],
	});
	/**<<=== 09 Banner Slide JS ==>>**/
	$('.technology-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		nav: true,
		dots: true,
		autoHeight: true,
		autoplay: true,
		smartSpeed: 1500,
		navText: [
			"<img src='assets/images/left.svg' alt='image'>",
			"<img src='assets/images/right.svg' alt='image'>",
		],
	});

	$('.look-back-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		nav: true,
		dots: false,
		autoHeight: true,
		autoplay: true,
		smartSpeed: 1500,
		navText: [
			"<img src='assets/images/left.svg' alt='image'>",
			"<img src='assets/images/right.svg' alt='image'>",
		],
		responsive: {
			0: {
				autoplay: false,
			},
			576: {
				autoplay: false,
			},
			768: {
				autoplay: false,
			},
		},
	});

	/**<<=== 09 Banner Slide JS ==>>**/
	$('.mouth-slider-light').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		nav: true,
		dots: false,
		autoHeight: true,
		autoplay: true,
		smartSpeed: 1500,
		navText: [
			"<img src='assets/images/left.svg' alt='image'>",
			"<img src='assets/images/right.svg' alt='image'>",
		],
		responsive: {
			0: {
				dots: true,
				stagePadding: 50,
			},
			576: {
				dots: true,
				stagePadding: 50,
			},
			768: {
				dots: true,
				stagePadding: 100,
			},
			992: {
				dots: true,
				stagePadding: 0,
			},
			1200: {
				dots: false,
				stagePadding: 0,
			},
		},
	});

	/**<<=== 09 Banner Slide JS ==>>**/
	$('.crash-images-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		nav: true,
		dots: false,
		autoHeight: true,
		autoplay: true,
		smartSpeed: 1500,
		navText: [
			"<img src='assets/images/left.svg' alt='image'>",
			"<img src='assets/images/right.svg' alt='image'>",
		],
	});

	/**<<=== 09 Banner Slide JS ==>>**/
	$('.mouth-slider-lights').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		nav: true,
		dots: false,
		autoHeight: true,
		autoplay: true,
		smartSpeed: 1500,
		navText: [
			"<img src='assets/images/left.svg' alt='image'>",
			"<img src='assets/images/right.svg' alt='image'>",
		],
		responsive: {
			0: {
				items: 1,
				stagePadding: 50,
			},
			576: {
				items: 1,
			},
			768: {
				items: 1,
				stagePadding: 220,
			},
			1200: {
				items: 2,
			},
		},
	});

	/**<<=== 09 Banner Slide JS ==>>**/
	$('.youtube-sliders').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		nav: true,
		dots: false,
		autoHeight: true,
		autoplay: false,
		smartSpeed: 1500,
		navText: [
			"<img src='assets/images/left.svg' alt='image'>",
			"<img src='assets/images/right.svg' alt='image'>",
		],
		responsive: {
			0: {
				items: 1,
			},
			576: {
				items: 1,
			},
			768: {
				items: 1,
				margin: 10,
				stagePadding: 120,
			},
			1200: {
				items: 2,
			},
		},
	});

	/**<<=== 09 Banner Slide JS ==>>**/
	$('.blogs-and-mediass-sliders').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		nav: true,
		dots: false,
		autoHeight: true,
		autoplay: true,
		smartSpeed: 1500,
		navText: [
			"<img src='assets/images/left.svg' alt='image'>",
			"<img src='assets/images/right.svg' alt='image'>",
		],
		responsive: {
			0: {
				items: 1,
				stagePadding: 50,
				margin: 10,
			},
			576: {
				stagePadding: 0,
				margin: 10,
			},
			768: {
				stagePadding: 0,
				margin: 10,
			},
			1200: {
				stagePadding: 0,
			},
		},
	});
	
	/**<<=== 10 Input Plus & Minus JS ==>>**/
	$('.input-counter').each(function() {
		var spinner = jQuery(this),
		input = spinner.find('input[type="text"]'),
		btnUp = spinner.find('.plus-btn'),
		btnDown = spinner.find('.minus-btn'),
		min = input.attr('min'),
		max = input.attr('max');
		
		btnUp.on('click', function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
		btnDown.on('click', function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
	});

	// Popup Video JS
	$('.popup-youtube, .popup-vimeo').magnificPopup({
		disableOn: 300,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});

	
	$('.burger').on('click',function(){
		$(this).toggleClass('open');
	})

	// Products Slider
	$('.products-slider').owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		mouseDrag: true,
		thumbs: true,
		thumbsPrerendered: true,
		items: 1,
		dots: false,
		autoHeight: true,
		autoplay: false,
		smartSpeed: 1500,
		autoplayHoverPause: true,
		navText: [
			"<img src='assets/images/left.svg' alt='image'>",
			"<img src='assets/images/right.svg' alt='image'>",
		],
	});

	// Range Slider JS
    $( "#range-slider, #range-slider-2").slider({
        range: true,
        min: 100,
        max: 10000,
        values: [100, 10000],
        slide: function( event, ui ) {
            $( "#price-amount-2" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $( "#price-amount-2" ).val( "$" + $( "#range-slider, #range-slider-2" ).slider( "values", 0 ) +
	" - $" + $( "#range-slider, #range-slider-2" ).slider( "values", 1 ));

	// FAQ Accordion
	$('.accordion').find('.accordion-title').on('click', function(){
		// Adds Active Class
		$(this).toggleClass('active');
		// Expand or Collapse This Panel
		$(this).next().slideToggle('fast');
		// Hide The Other Panels
		$('.accordion-content').not($(this).next()).slideUp('fast');
		// Removes Active Class From Other Titles
		$('.accordion-title').not($(this)).removeClass('active');		
	});

	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	})

})(jQuery);
