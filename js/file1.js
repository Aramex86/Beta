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

        //$('.homeblock').hide();
        //$('.header-bottom').hide();
        $('.services, .blog, .blogfull, .contact, .aboutus, .authorization-block').hide();
        //top nav menu
       var services = $('.nav-top li:eq(0)');
       var blog = $('.nav-top li:eq(1)');
       var aboutUs = $('.nav-top li:eq(2)');
       var contacts = $('.nav-top li:eq(3)');
       $(services).click(function () {
         $('.homeblock, .header-bottom, .blog, .services, .aboutus, .contact').hide();
         $('.services').fadeIn(1000);
       });
       $(blog).click(function () {
          $('.services, .aboutus, .header-bottom, .homeblock, .contact').hide();
          $('.blog').fadeIn(1000);
       });
       $(aboutUs).click(function () {
           $('.homeblock, .header-bottom, .blog, .services, .contact, .aboutus').hide();
           $('.aboutus').fadeIn(1000);
       });
       $(contacts).click(function () {
          $('.homeblock, .header-bottom, .blog, .services, .aboutus').hide();
          $('.contact').fadeIn(1000);
       });
        $('.logo img').click(function () {
          $('.services, .blog, .blogfull, .contact, .aboutus, .authorization-block').hide();
          $('.homeblock, .header-bottom').fadeIn(1000);
        });
        $('.home').click(function () {
            $('.services, .blog, .blogfull, .contact, .aboutus, .authorization-block').hide();
            $('.homeblock, .header-bottom').fadeIn(1000);
        });


















});