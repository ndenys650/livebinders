$(document).ready(function() {

    "use strict";

    // -------------- Jquery CountTo (Project Counter) -------------- 
    $('.counter').appear(function() {
        $('.timer').each(count);

        function count(options) {
            var $this = $(this);
            options = $.extend({}, options || {}, $this.data('countToOptions') || {});
            $this.countTo(options);
        }
    });

});


$(window).load(function() {

    // -------------- Jquery Isotope Setting -------------- 

    var $container = $('.portfoliocontent');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    $('.portfoliofilter a').on('click', function(e) {
        e.preventDefault();
        $('.portfoliofilter .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });

});