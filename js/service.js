    var test = $('.testslist span');
    var letters = $('.alphabet a');


    function testLetters() {
        for (var i = 0; i <= test.length;i++ ){
        }
        for (var i=0;i<=letters.length;i++) {

        }
    }
    function alphabet() {
       $.each(letters, function (value,index) {
       });
        $.each(test, function (value,index) {
        });
        function choiseAlphabet(){
          $(letters[14]).click(function () {
              $('.table').show();
              $('.row1 td:eq(0)').html(test[0]);
              $('.row2 td:eq(0)').html(test[2])
              $('.row3').hide();
              $('.row2').show();
              $('.row4').hide();
          });
          $(letters[4]).click(function () {
              $('.table').show();
              $('.row1 td:eq(0)').html(test[1]);
              $('.row1 td:eq(1)').html('150.00');
              $('.row2').hide();
              $('.row3').hide();
              $('.row4').hide();
          });
          $(letters[7]).click(function () {
              $('.table').show();
              $('.row1 td:eq(0)').html(test[3]);
              $('.row2 td:eq(0)').html(test[16]);
              $('.row3 td:eq(0)').html(test[17]);
              $('.row4 td:eq(0)').html(test[18]);
              $('.row2').show();
              $('.row3').show();
              $('.row4').show();
          });
            $(letters[6]).click(function () {
                $('.table').show();
                $('.row1 td:eq(0)').html(test[4]);
                $('.row2 td:eq(0)').html(test[14]);
                $('.row2').show();
                $('.row3').hide();
                $('.row4').hide();
            });
            $(letters[8]).click(function () {
                $('.table').show();
                $('.row1 td:eq(0)').html(test[5]);
                $('.row2').hide();
                $('.row3').hide();
                $('.row4').hide();
            });
            $(letters[1]).click(function () {
                $('.table').show();
                $('.row1 td:eq(0)').html(test[6]);
                $('.row2').hide();
                $('.row3').hide();
                $('.row4').hide();

            });
            $(letters[2]).click(function () {
                $('.table').show();
                $('.row1 td:eq(0)').html(test[7]);
                $('.row2 td:eq(0)').html(test[8]);
                $('.row3 td:eq(0)').html(test[9]);
                $('.row4 td:eq(0)').html(test[13]);
                $('.row2').show();
                $('.row3').show();
                $('.row4').show();
            });
            $(letters[15]).click(function () {
                $('.table').show();
                $('.row1 td:eq(0)').html(test[15]);
                $('.row2').hide();
                $('.row3').hide();
                $('.row4').hide();
            });
        }
        choiseAlphabet();
    }

    testLetters();
    alphabet();
    function bottomList() {
    var bottomtest = $('.testswrap span');
    for (var i = 0;i<=bottomtest.length;i++){
        $(bottomtest[0]).click(function () {
           $('.table').show();
           $('.row1 td:eq(0)').html('Respiratory syncytial virus (RSV)');
           $('.row2').hide();
           $('.row3 ').hide();
           $('.row4 ').hide();
        });
    }
    }
    bottomList();













