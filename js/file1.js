$(document).ready(function () {
        $('.blogslider').bxSlider({
            moveSlides:1,
            maxSlides:3,
            slideWidth: 470,
            pager:false,
            slideMargin:20,
        });
        $('.videoslider').bxSlider({
            moveSlides:1,
            maxSlides:3,
            slideWidth: 470,
            pager:false,
            slideMargin:28,
        });
        $('.videosliderwrap div:eq(1)').addClass('secondslider');

        $('.homeblock').hide();
        $('.header-bottom').hide();
        $('.authorization-block').hide();
        $('.aboutus').hide();
        $('.contact').hide();
        $('.blogpagewrap').hide();
        //$('.blogfull').filter(':eq(0),:eq(1),:eq(2),:eq(3),:eq(4)').hide();
        $('.blog').hide();


























});