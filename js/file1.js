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

       var articleTop =[];
       $('.articleblog').each(function (index) {
           articleTop.push($(this).length);
       });
       console.log(articleTop);

        var articleBottom = [];
        $('.blogfull').each(function (index) {
           articleBottom.push($(this).length);
        });
        console.log(articleBottom);










});