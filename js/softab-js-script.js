(function($){

    AOS.init({
        startEvent: 'DOMContentLoaded',
        once: true
    });

    $('.navbar-toggle').click(function(e){

        if (!$('.navbar-collapse').hasClass('in')){
            $('.navbar').addClass('fullscreen');
            $(this).addClass('collapsed');
        }else{
            $('.navbar').removeClass('fullscreen');
            $(this).removeClass('collapsed');
        }
    });

    $('.select select').on('change', function(){

        if ($(this).val() != '')
            $('.select-label').text($(this).val());
        else
            $('.select-label').text('I’d like to talk about...');
    });

    $('.wpcf7-form .btn-square').click(function(e){
        e.preventDefault();
        $('.wpcf7-form').submit();
    });

    if ($('.slider').length) {
        $('.slider').slick({
            prevArrow: $('.arrows__prev_slider'),
            nextArrow: $('.arrows__next_slider'),
        });

        $('.slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
            $('.slider-pagination .current').empty().text(currentSlide + 1);
        });
    }

    if ($('.related-slider').length) {
        $('.related-slider').slick({
            prevArrow: $('.arrows__prev_related'),
            nextArrow: $('.arrows__next_related'),
        });

        $('.related-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
            $('.related-pagination .current').empty().text(currentSlide + 1);
        });
    }

    $('.load-more-posts').click(function (e) {
        e.preventDefault();
        $.fn.almTriggerClick();
    });

    // // NAVBAR
    var navbar = $('nav'),
        inner_page_top = navbar.offset().top,
        navbar_height = navbar.outerHeight();

    $(window).scroll(function () {

        if ($('.navbar-toggle').hasClass('collapsed'))
            $('.navbar-toggle').click();
        
        var scroll = $(window).scrollTop();
       
        if ($('body').hasClass('home')){
            
            var hero_height = $('.container__hero').outerHeight();
            
            if (scroll > hero_height){
                
                if (!navbar.hasClass('fixed-top'))
                    navbar.addClass('fixed-top');
            }else{
                if (navbar.hasClass('fixed-top'))
                    navbar.removeClass('fixed-top');
            }

        }else{

            // if (scroll > inner_page_top){
            //     $('.container__navbar').css('padding-top', '0');
            //     if (!navbar.hasClass('fixed-top'))
            //         navbar.addClass('fixed-top');
                    
            //     $('body').css('padding-top', navbar_height + 'px').css('margin-top', '3.5vw');
            // }else{
            //     $('.container__navbar').css('padding-top', '3.5vw');
            //     if (navbar.hasClass('fixed-top'))
            //         navbar.removeClass('fixed-top');
            //     $('body').css('padding-top', '0').css('margin-top', '0');;
            // }
        }

    });

    // PARTICLES
    if ($('#particles-jss').length){
        particlesJS('particles-jss',{
                "particles": {
                    "number": {
                        "value": 50,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#ffffff"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        },
                        "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 5,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 4,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true,
                "config_demo": {
                    "hide_card": false,
                    "background_color": "#b61924",
                    "background_image": "",
                    "background_position": "50% 50%",
                    "background_repeat": "no-repeat",
                    "background_size": "cover"
                }
            }
        );
    }
    // END PARTICLES

    // Contact select
    var $select_holder = $('.select-holder');
    $('.select-label').click(function(){
        if ($select_holder.hasClass('opened')){
            $select_holder.removeClass('opened');
        }else{
            $select_holder.addClass('opened');
        }
    });

    $('.select-options--single').click(function(e){
        e.preventDefault();
        var $val = $(this).find('a').data('option');
        $('.select-label').empty().text($val);
        $('input[name=menu-446]').val($val);
        $('.select-label').click();
    });

    $('.open-select').click(function(){
        $select_holder.addClass('opened');
    });

    $('.close-select').click(function(){
        $select_holder.removeClass('opened');
    });


})(jQuery);
