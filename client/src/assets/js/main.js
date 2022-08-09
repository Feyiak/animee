(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {



        //------------ Offcanvas menu -------------

        $('.menu_open').on('click', function() {
            $('body').addClass('active');
        })
        $('.menu_close, .overlay, .header-right-blk').on('click', function() {
            $('body').removeClass('active');
        })


        //--- Nice Select -----
        $(document).ready(function () {
            $('select').niceSelect();
        });




        //------------ Hero slider -------------

        $('.drama-main-slider').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            navText: ['<i class="fas fa-caret-left"></i>','<i class="fas fa-caret-right"></i>'],
            dot: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        })



        //------------ Hero slider -------------

        $('.winter-main-slider').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            navText: ['<i class="fas fa-caret-left"></i>','<i class="fas fa-caret-right"></i>'],
            dot: false,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        })



        //---owl dots number-----
        
        var i = 1;
        
        $('.hero-slier-main.owl-carousel .owl-dot').each(function () {
            $(this).text(i);
            i++;
        });


        //--- Venobox -----
        new VenoBox({
          selector: '.venobox'
        });




    }); //---document-ready-----





}(jQuery));
