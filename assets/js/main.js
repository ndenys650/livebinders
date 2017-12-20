$(document).ready(function() {

    "use strict";

    $(".scroll-info a[href^='#']").on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 80
        }, 1000);
    });

    $(".navbar-nav li a[href^='#']").on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 60
        }, 1000);
    });

    // -------------- Jquery CountTo (Project Counter) -------------- 
    $(window).scroll(startCounter);

    function startCounter() {
        if ($(window).scrollTop() > 200) {
            $(window).off("scroll", startCounter);
            $('.Count').each(function() {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: $this.attr("data") }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
        }
    }

    $('.flip').hover(function() {
        $(this).find('.card').toggleClass('flipped');

    });

});