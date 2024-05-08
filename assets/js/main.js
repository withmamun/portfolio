(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {


        //--------------- Email JS ---------------

        const contactForm = document.getElementById('contact-form'),
            contactName = document.getElementById('contact-name'),
            contactEmail = document.getElementById('contact-email'),
            contactProject = document.getElementById('contact-project'),
            contactMessage = document.getElementById('contact-message')

        const sendEmail = (e) => {
            e.preventDefault()
            // check if the field has value
            if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
                // Add and remove color
                contactMessage.classList.remove('color-green')
                contactMessage.classList.add('color-red')

                // show message
                contactMessage.textContent = 'Write all the input fields 📩'
            } else {
                // serviceID - templateID - #form - publicKey
                emailjs.sendForm('service_pi06ngc', 'template_v6k4yqn', '#contact-form', 'kQvgZRHdWgo5ybJBA')
                    .then(() => {
                        // Show message and add color
                        contactMessage.classList.add('color-green')
                        contactMessage.textContent = 'Message sent ✅'

                        // Remove message after five seconds

                        setTimeout(() => {
                            contactMessage.textContent = ''
                        }, 3000)

                    }, (error) => {
                        alert('OOPS! SOMETHING HAS FAILED...', error)
                    })
                // To clear the input field
                contactName.value = ''
                contactEmail.value = ''
                contactProject.value = ''
            }

        }
        contactForm.addEventListener('submit', sendEmail)




        //--------------- Preloader Activation ---------------

        let win = $(window);
        win.on('load', function () {
            $('#preloader').delay(350).fadeOut('slow');
            $('body').delay(350).css({
                'overflow': 'visible'
            });
        })


        //------------ Offcanvas Menu -------------

        $('.menu-open , .offcanvas-overlay').click(function () {

            $('.offcanvas-area , .offcanvas-overlay').addClass('active');

        });
        $('.menu-close , .offcanvas-overlay, .main-menu ul li a, .offcanvas-btn a').click(function () {

            $('.offcanvas-area , .offcanvas-overlay').removeClass('active');

        });


        //--------------- Scroll To Top ---------------

        let calcScrollValue = () => {
            let scrollProgress = document.getElementById("progress_scroll");
            let progressValue = document.getElementById("progress_scroll_img");
            let pos = document.documentElement.scrollTop;
            let calcHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            let scrollValue = Math.round((pos * 100) / calcHeight);
            if (pos > 100) {
                scrollProgress.style.display = "flex";
            } else {
                scrollProgress.style.display = "none";
            }
            scrollProgress.addEventListener("click", () => {
                document.documentElement.scrollTop = 0;
            });
            scrollProgress.style.background = `conic-gradient(#39f4ed ${scrollValue}%, #0a1930 ${scrollValue}%)`;
        };

        window.onscroll = calcScrollValue;
        window.onload = calcScrollValue;


        //--------------- SWIPER TESTIMONIAL ---------------

        let swiperTestimonial = new Swiper(".testimonial__wrap", {
            spaceBetween: 24,
            loop: true,
            grabCursor: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 48,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 48,
                },
            },
        });


        //--------------- Scroll Reveal Animation ---------------

        const sr = ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 1500,
            delay: 200,
        })

        sr.reveal('.hero__left__blk')
        sr.reveal('.hero__right__blk', {
            delay: 300,
        })
        sr.reveal('.hero__social, .hero__scroll', {
            delay: 300,
            origin: 'bottom'
        })

        sr.reveal('.about__left__blk', {
            delay: 100,
            origin: 'left'
        })
        sr.reveal('.about__box', {
            delay: 40,
            interval: 200
        })
        sr.reveal('.about__btn', {
            delay: 80,
            origin: 'bottom'
        })
        sr.reveal('.about__info', {
            delay: 100,
            origin: 'right'
        })

        sr.reveal('.skill__animate__one', {
            delay: 200,
            origin: 'left'
        })
        sr.reveal('.skill__animate__two', {
            delay: 200,
            origin: 'right'
        })
        sr.reveal('.service__content__blk, .service__icon__blk', {
            delay: 200,
            origin: 'top'
        })
        sr.reveal('.section__header', {
            delay: 200,
            origin: 'bottom'
        })
        sr.reveal('.work__main_blk', {
            delay: 200,
            origin: 'bottom'
        })
        sr.reveal('.work__filters', {
            delay: 200,
            origin: 'bottom'
        })
        sr.reveal('.testimonial__wrap', {
            delay: 200,
            origin: 'bottom'
        })
        sr.reveal('.contact__card', {
            delay: 200,
            origin: 'bottom',
            interval: 200
        })
        sr.reveal('.contact__right__blk', {
            delay: 200,
            origin: 'right',
        })

    }); //---document-ready-----


}(jQuery));