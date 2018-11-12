$(document).ready(function () {
        $('.blogslider').bxSlider({
            moveSlides:4,
            maxSlides:4,
            slideWidth: 470,
            pager:false,
            slideMargin:20,
            auto:true,
        });
        $('.videoslider').bxSlider({
            moveSlides:1,
            maxSlides:3,
            slideWidth: 470,
            pager:false,
            slideMargin:28,
            auto:true,
        });
        $('.videosliderwrap div:eq(1)').addClass('secondslider');
        $(".fadepage").delay(300).animate({"opacity": "1.5"}, 600);
        function videoChange(){
            $('.cover1').click(function () {
                $('#video2').hide();
                $('#video1').show();
            });
            $('.cover2').click(function () {
               $('#video1').hide();
               $('#video2').show();
            });
        }
        videoChange();
        function registration(){
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
        }
        registration();
      $('.blogfull').addClass('hide');

        var blogTop = {
            name:$('.articleblog').eq(0),
            name1:$('.articleblog').eq(1),
            name2:$('.articleblog').eq(2),
            name3:$('.articleblog').eq(3),
            name4:$('.articleblog').eq(4),
        }
        var blogBottom = {
            name:$('.blogfull').eq(0),
            name1:$('.blogfull').eq(1),
            name2:$('.blogfull').eq(2),
            name3:$('.blogfull').eq(3),
            name4:$('.blogfull').eq(4),
        }
        console.log(blogTop.name4);
        console.log(blogBottom.name4);
        function blogSwitch() {
            $(blogTop.name).click(function () {
                $('.articleblog').hide();
                $('.blogfull').hide();
                $('.load-button').hide();
                $(blogBottom.name).fadeIn(500);
            });
            $(blogTop.name1).click(function () {
                $('.articleblog').hide();
                $('.blogfull').hide();
                $('.load-button').hide();
                $(blogBottom.name1).fadeIn(500);
            });
            $(blogTop.name2).click(function () {
                $('.articleblog').hide();
                $('.blogfull').hide();
                $('.load-button').hide();
                $(blogBottom.name2).fadeIn(500);
            });
            $(blogTop.name3).click(function () {
                $('.articleblog').hide();
                $('.blogfull').hide();
                $('.load-button').hide();
                $(blogBottom.name3).fadeIn(500);
            });
            $(blogTop.name4).click(function () {
                $('.articleblog').hide();
                $('.blogfull').hide();
                $('.load-button').hide();
                $(blogBottom.name4).fadeIn(500);
            });
            $(blogTop.name4).hide();

            $('.load-more').click(function () {
               $(blogTop.name4).fadeIn(500);
               $('.load-button').hide();
            });
            $('.article').click(function () {
                window.location.replace("./blog.html");
            });
            $('.back').hide();
            $('.articleblog').click(function () {
            $('.back').show();
            });

        }
        blogSwitch();


        $('.tests a').click(function () {
            window.location.replace("./services.html");
        });
        $('.burger-btn').click(function () {
            $('.moblile-menu').toggleClass('show-hide');
        });







});