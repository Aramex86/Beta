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

        //top nav ,header,authorization
        var services = $('.nav-top li:eq(0)');
        var blog = $('.nav-top li:eq(1)');
        var aboutUs = $('.nav-top li:eq(2)');
        var contacts = $('.nav-top li:eq(3)');
        var home = $('.homeblock, .header-bottom');
       //$('.services, .blog, .homeblock, .header-bottom, .contact, .aboutus, .authorization-block').hide();
        $('.part.homeblock-page').show();
        $('.page-link').click(function (event) {
           event.preventDefault();
           var name = this.dataset.page;
           $('.part').hide();
           $(home).hide();
           $('.'+ name + '-page').fadeIn(500);
           $('.logo').click(function () {
              $(home).fadeIn(500);
               $('.part').hide();
           });
           $('.home').click(function () {
               $(home).fadeIn(500);
               $('.part').hide();
           });
       });









      /* $(services).click(function () {
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
        });*/
        $('.personal-cab p').click(function () {
             $('.services, .blog, .blogfull, .contact, .aboutus, .homeblock, .header-bottom ').hide();
             $('.authorization-block').fadeIn(500);
        });
        $('.cardlog').hide();

        $('.userpic').click(function () {
           $('.userpic img').css({"border":"1px solid red","box-shadow":"1px 1px 7px 0px #808080d1"});
           $('.cardpic img').css("border","1px solid gray");
            $('.cardlog').hide();
            $('.userlog').show();
            $('.btn').css("margin-top","74px");
        });
        $('.cardpic').click(function () {
           $('.cardpic img').css({"border":"1px solid red","box-shadow":"1px 1px 7px 0px #808080d1"});
            $('.userpic img').css("border","1px solid gray");
            $('.cardlog').show();
            $('.userlog').hide();
            $('.btn').css("margin-top","127px");
        });

















});