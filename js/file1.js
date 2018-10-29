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
            name1:$('.articleblog').eq(0),
            name2:$('.articleblog').eq(1),
            name3:$('.articleblog').eq(3),
            name4:$('.articleblog').eq(4),
            name5:$('.articleblog').eq(5),
        }
        var blogBottom = {
            name1:$('.blogfull').eq(0),
            name2:$('.blogfull').eq(1),
            name3:$('.blogfull').eq(3),
            name4:$('.blogfull').eq(4),
            name5:$('.blogfull').eq(5),
        }

        function blogSwitch() {
            $(blogTop.name4).hide();
            $(blogTop.name1).click(function () {
               $('.articleblog').hide();
               $('.blogfull').hide();
               $(blogBottom.name1).fadeIn(500);
                $('.load-button').hide();
            });
            $(blogTop.name2).click(function () {
                $('.articleblog').hide();
                $('.blogfull').hide();
                $(blogBottom.name2).fadeIn(500);
                $('.load-button').hide();
            });$(blogTop.name3).click(function () {
                $('.articleblog').hide();
                $('.blogfull').hide();
                $(blogBottom.name3).fadeIn(500);
                $('.load-button').hide();
            });$(blogTop.name4).click(function () {
                $('.articleblog').hide();
                $('.blogfull').hide();
                $(blogBottom.name4).fadeIn(500);
                $('.load-button').hide();
            });
            $('.load-more').click(function () {
               $(blogTop.name4).fadeIn(500);
               $('.load-button').hide();
            });
            $(blogTop.name5).click(function () {
                $('.articleblog').hide();
                $('.blogfull').hide();
                $(blogBottom.name5).fadeIn(500);
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






});