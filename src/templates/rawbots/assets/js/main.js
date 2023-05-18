import jQuery from "jquery";
import Swiper from "swiper";
jQuery(document).ready(function ($) {
    //$('.js-select').niceSelect();
    $(document).on('click', '.menu-btn', function () {
        $(this).toggleClass('is-active');
        $('.sidebar').toggleClass('is-show');
    });
    const mediaHeader = window.matchMedia('(max-width: 959px)');

    function handleHeader(e) {
        if (e.matches) {
            $('.menu-btn').removeClass('is-active');
            $('.sidebar').removeClass('is-show');
            $(document).on('click', '.menu-btn', function () {
                $('body').toggleClass('no-scroll');
            });
        } else {
            $('.menu-btn').addClass('is-active');
            $('.sidebar').addClass('is-show');
            $('body').removeClass('no-scroll');
        }
    }









    /////////////////////////////////////////////////////////////////
    // Preloader
    /////////////////////////////////////////////////////////////////

    var $preloader = $('#page-preloader'),
        $spinner = $preloader.find('.spinner-loader');
    $spinner.fadeOut();
    $preloader.delay(250).fadeOut('slow');



    mediaHeader.addListener(handleHeader);
    handleHeader(mediaHeader);

    setTimeout(() => {

        const recommendSlider = new Swiper('.js-recommend .swiper', {
            slidesPerView: 1,
            spaceBetween: 40,
            loop: true,
            watchOverflow: true,
            observeParents: true,
            observeSlideChildren: true,
            observer: true,
            speed: 800,
            autoplay: {
                delay: 5000
            },
            navigation: {
                nextEl: '.js-recommend .swiper-button-next',
                prevEl: '.js-recommend .swiper-button-prev'
            },
            pagination: {
                el: '.js-recommend .swiper-pagination',
                type: 'bullets',
                // 'bullets', 'fraction', 'progressbar'
                clickable: true
            }
        });
        const trendingSlider = new Swiper('.js-trending .swiper', {
            slidesPerView: 1,
            spaceBetween: 40,
            loop: true,
            watchOverflow: true,
            observeParents: true,
            observeSlideChildren: true,
            observer: true,
            speed: 800,
            autoplay: {
                delay: 5000
            },
            navigation: {
                nextEl: '.js-trending .swiper-button-next',
                prevEl: '.js-trending .swiper-button-prev'
            },
            pagination: {
                el: '.js-trending .swiper-pagination',
                type: 'bullets',
                // 'bullets', 'fraction', 'progressbar'
                clickable: true
            }
        });
        const popularSlider = new Swiper('.js-popular .swiper', {
            slidesPerView: 1,
            spaceBetween: 25,
            loop: true,
            watchOverflow: true,
            observeParents: true,
            observeSlideChildren: true,
            observer: true,
            speed: 800,
            autoplay: {
                delay: 5000
            },
            navigation: {
                nextEl: '.js-popular .swiper-button-next',
                prevEl: '.js-popular .swiper-button-prev'
            },
            pagination: {
                el: '.js-popular .swiper-pagination',
                type: 'bullets',
                // 'bullets', 'fraction', 'progressbar'
                clickable: true
            },
            breakpoints: {
                575: {
                    slidesPerView: 2,
                    spaceBetween: 25
                },
                1199: {
                    slidesPerView: 4,
                    spaceBetween: 25
                },
                1599: {
                    slidesPerView: 6,
                    spaceBetween: 25
                }
            }
        });
        const gallerySmall = new Swiper('.js-gallery-small .swiper', {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            watchOverflow: true,
            observeParents: true,
            observeSlideChildren: true,
            observer: true,
            speed: 800,
            pagination: {
                el: '.js-gallery-small .swiper-pagination',
                type: 'bullets',
                // 'bullets', 'fraction', 'progressbar'
                clickable: true
            },
            breakpoints: {
                575: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                767: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                1599: {
                    slidesPerView: 4,
                    spaceBetween: 20
                }
            }
        });
        const galleryBig = new Swiper('.js-gallery-big .swiper', {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            watchOverflow: true,
            observeParents: true,
            observeSlideChildren: true,
            observer: true,
            speed: 800,
            thumbs: {
                swiper: gallerySmall
            }
        });

    }, 3000);


});
