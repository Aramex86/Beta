    var test = $('.testslist span');
    var letters = $('.alphabet a');
    /*function testLetters() {
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
              $('.price').html('150.00');
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
        $(bottomtest[1]).click(function () {
            $('.table').show();
            $('.row1 td:eq(0)').html('Epstein-Barr virus');
            $('.row2').hide();
            $('.row3 ').hide();
            $('.row4 ').hide();
        });
        $(bottomtest[2]).click(function () {
            $('.table').show();
            $('.row1 td:eq(0)').html('Rotavirus');
            $('.row2').hide();
            $('.row3 ').hide();
            $('.row4 ').hide();
        });
        $(bottomtest[3]).click(function () {
            $('.table').show();
            $('.row1 td:eq(0)').html('Hepatitis');
            $('.row2').hide();
            $('.row3 ').hide();
            $('.row4 ').hide();
        });
        $(bottomtest[4]).click(function () {
            $('.table').show();
            $('.row1 td:eq(0)').html('Genital warts (human papillomavirus, or HPV)');
            $('.row2').hide();
            $('.row3 ').hide();
            $('.row4 ').hide();
        });
        $(bottomtest[5]).click(function () {
            $('.table').show();
            $('.row1 td:eq(0)').html('Influenza (flu)');
            $('.row2').hide();
            $('.row3 ').hide();
            $('.row4 ').hide();
        });
        $(bottomtest[6]).click(function () {
            $('.table').show();
            $('.row1 td:eq(0)').html('Blood glucose test');
            $('.row2').hide();
            $('.row3 ').hide();
            $('.row4 ').hide();
        });
        $(bottomtest[7]).click(function () {
            $('.table').show();
            $('.row1 td:eq(0)').html('Cardiac enzymes');
            $('.row2').hide();
            $('.row3 ').hide();
            $('.row4 ').hide();
        });
        $(bottomtest[8]).click(function () {
            $('.table').show();
            $('.row1 td:eq(0)').html('Calcium blood test');
            $('.row2').hide();
            $('.row3 ').hide();
            $('.row4 ').hide();
        });
        $(bottomtest[9]).click(function () {
            $('.table').show();
            $('.row1 td:eq(0)').html('C-reactive protein (CRP) test<');
            $('.row2').hide();
            $('.row3 ').hide();
            $('.row4 ').hide();
        });
        $(bottomtest[10]).click(function () {
            $('.table').show();
            $('.row1 td:eq(0)').html('Full blood count');
            $('.row2').hide();
            $('.row3 ').hide();
            $('.row4 ').hide();
        });
        $(bottomtest[11]).click(function () {
            $('.table').show();
            $('.row1 td:eq(0)').html('Liver function tests');
            $('.row2').hide();
            $('.row3 ').hide();
            $('.row4 ').hide();
        });
        $(bottomtest[12]).click(function () {
            $('.table').show();
            $('.row1 td:eq(0)').html('Chlamydia Testing');
            $('.row2').hide();
            $('.row3 ').hide();
            $('.row4 ').hide();
        });
        $(bottomtest[13]).click(function () {
            $('.table').show();
            $('.row1 td:eq(0)').html('Gonorrhea Testing');
            $('.row2').hide();
            $('.row3 ').hide();
            $('.row4 ').hide();
        });
        $(bottomtest[14]).click(function () {
            $('.table').show();
            $('.row1 td:eq(0)').html('Syphilis Tests');
            $('.row2').hide();
            $('.row3 ').hide();
            $('.row4 ').hide();
        });
        $(bottomtest[15]).click(function () {
            $('.table').show();
            $('.row1 td:eq(0)').html('HPV Test');
            $('.row2').hide();
            $('.row3 ').hide();
            $('.row4 ').hide();
        });
        $(bottomtest[16]).click(function () {
            $('.table').show();
            $('.row1 td:eq(0)').html('Herpes Testing');
            $('.row2').hide();
            $('.row3 ').hide();
            $('.row4 ').hide();
        });
        $(bottomtest[16]).click(function () {
            $('.table').show();
            $('.row1 td:eq(0)').html('HIV Antibody Test');
            $('.row2').hide();
            $('.row3 ').hide();
            $('.row4 ').hide();
        });
    }
    }
    function changeValue() {
        var value = 0;
        var row1= parseInt($('.price:eq(0)').text());
        var row2= parseInt($('.price:eq(1)').text());
        var row3= parseInt($('.price:eq(2)').text());
        var row4= parseInt($('.price:eq(3)').text());
       function tableClick() {
           $('.table td').click(function () {
               value ++;
               $('.blood').attr("src","images/bloodtest-2.png");
               document.getElementById("numberitem").innerHTML = value;
               //document.getElementById("amountitem").innerHTML = value;
               return false
           });
           $('.row1 td').click(function () {
             $('.row1 td:eq(2) img').attr("src","images/bloodtest-2.png");
                $('#amountitem').html(row1);
                return false
           });
           $('.row2 td').click(function () {
              $('.row2 td:eq(2) img').attr("src","images/bloodtest-2.png");
               $('#amountitem').html(row2+row1);
           });
           $('.row3 td').click(function () {
              $('.row3 td:eq(2) img').attr("src","images/bloodtest-2.png");
               $('#amountitem').html(row1 + row2 + row3 );
           });
           $('.row4 td').click(function () {
              $('.row4 td:eq(2) img').attr("src","images/bloodtest-2.png");
               $('#amountitem').html(row1 + row2 + row3 + row4);
           });
            $(letters).click(function () {
                $('.table img').attr("src","images/bloodtest-1.png");
            });
       }
       tableClick();
    }
    testLetters();
    alphabet();
    bottomList();
    changeValue();
    */
   var testsName = {
       item1:{name:'Respiratory syncytial virus (RSV)',price:'150.00'},
       item2:{name:'Rotavirus',price:'250.00'},
       item3:{name:'Epstein-Barr virus',price:'100.00'},
       item4:{name:'Hepatitis',price:'150.00'},
       item5:{name:'Genital warts (human papillomavirus, or HPV)',price:'200.00'},
       item6:{name:'Influenza (flu)',price:'100.00'},
       item7:{name:'Blood glucose test',price:'110.00'},
       item8:{name:'Cardiac enzymes',price:'300.00'},
       item9:{name:'Calcium blood test',price:'130.00'},
       item10:{name:'C-reactive protein (CRP) test',price:'150.00'},
       item11:{name:'Folate test',price:'160.00'},
       item12:{name:'Full blood count',price:'100.00'},
       item13:{name:'Liver function tests',price:'140.00'},
       item14:{name:'Chlamydia Testing',price:'220.00'},
       item15:{name:'Gonorrhea Testing',price:'180.00'},
       item16:{name:'Syphilis Tests',price:'120.00'},
       item17:{name:'HPV Test',price:'500.00'},
       item18:{name:'Herpes Testing',price:'300.00'},
       item19:{name:'HIV Antibody Test',price:'350.00'},
   };
   function itemSwich(){
        $('.alphabet a:eq(14)').click(function () {
           $('.table').show();
            document.querySelector('#name').textContent = testsName.item1.name;
            document.querySelector('#price').textContent = testsName.item1.price;
            document.querySelector('#name1').textContent = testsName.item2.name;
            document.querySelector('#price1').textContent = testsName.item2.price;
            $('.row2').show();
            $('.row3').hide();
            $('.row4').hide();
        });
        $('.alphabet a:eq(2)').click(function () {
           $('.table').show();
           document.querySelector('#name').textContent = testsName.item8.name;
           document.querySelector('#price').textContent = testsName.item8.price;
           document.querySelector('#name1').textContent = testsName.item9.name;
           document.querySelector('#price1').textContent = testsName.item9.price;
           document.querySelector('#name2').textContent = testsName.item14.name;
           document.querySelector('#price2').textContent = testsName.item14.price;
           document.querySelector('#name3').textContent = testsName.item10.name;
           document.querySelector('#price3').textContent = testsName.item10.price;
            $('.row2').show();
            $('.row3').show();
            $('.row4').show();
        });
       $('.alphabet a:eq(4)').click(function () {
           $('.table').show();
           document.querySelector('#name').textContent = testsName.item3.name;
           document.querySelector('#price').textContent = testsName.item3.price;
           $('.row2').hide();
           $('.row3').hide();
           $('.row4').hide();
       });
       $('.alphabet a:eq(7)').click(function () {
           $('.table').show();
           document.querySelector('#name').textContent = testsName.item4.name;
           document.querySelector('#price').textContent = testsName.item4.price;
           document.querySelector('#name1').textContent = testsName.item17.name;
           document.querySelector('#price1').textContent = testsName.item17.price;
           document.querySelector('#name2').textContent = testsName.item18.name;
           document.querySelector('#price2').textContent = testsName.item18.price;
           document.querySelector('#name3').textContent = testsName.item19.name;
           document.querySelector('#price3').textContent = testsName.item19.price;
           $('.row2').show();
           $('.row3').show();
           $('.row4').show();
       });
       $('.alphabet a:eq(6)').click(function () {
           $('.table').show();
           document.querySelector('#name').textContent = testsName.item5.name;
           document.querySelector('#price').textContent = testsName.item5.price;
           document.querySelector('#name1').textContent = testsName.item15.name;
           document.querySelector('#price1').textContent = testsName.item15.price;
           $('.row2').show();
           $('.row3').hide();
           $('.row4').hide();
       });
       $('.alphabet a:eq(8)').click(function () {
           $('.table').show();
           document.querySelector('#name').textContent = testsName.item6.name;
           document.querySelector('#price').textContent = testsName.item6.price;
           $('.row2').hide();
           $('.row3').hide();
           $('.row4').hide();
       });
       $('.alphabet a:eq(1)').click(function () {
           $('.table').show();
           document.querySelector('#name').textContent = testsName.item7.name;
           document.querySelector('#price').textContent = testsName.item7.price;
           $('.row2').hide();
           $('.row3').hide();
           $('.row4').hide();
       });
       $('.alphabet a:eq(5)').click(function () {
           $('.table').show();
           document.querySelector('#name').textContent = testsName.item11.name;
           document.querySelector('#price').textContent = testsName.item11.price;
           document.querySelector('#name1').textContent = testsName.item12.name;
           document.querySelector('#price1').textContent = testsName.item12.price;
           $('.row2').show();
           $('.row3').hide();
           $('.row4').hide();
       });
       $('.alphabet a:eq(9)').click(function () {
           $('.table').show();
           document.querySelector('#name').textContent = testsName.item13.name;
           document.querySelector('#price').textContent = testsName.item13.price;
           $('.row2').hide();
           $('.row3').hide();
           $('.row4').hide();
       });
       $('.alphabet a:eq(15)').click(function () {
           $('.table').show();
           document.querySelector('#name').textContent = testsName.item16.name;
           document.querySelector('#price').textContent = testsName.item16.price;
           $('.row2').hide();
           $('.row3').hide();
           $('.row4').hide();
       });
   }
   function bottom() {
       $('.row2,.row3,.row4').hide();
      $('.testswrap span:eq(0)').click(function () {
          $('.table').show();
           document.querySelector('#name').textContent = testsName.item1.name;
           document.querySelector('#price').textContent = testsName.item1.price;
      });
       $('.testswrap span:eq(1)').click(function () {
           $('.table').show();
           document.querySelector('#name').textContent = testsName.item3.name;
           document.querySelector('#price').textContent = testsName.item3.price;
       });
       $('.testswrap span:eq(2)').click(function () {
           $('.table').show();
           document.querySelector('#name').textContent = testsName.item2.name;
           document.querySelector('#price').textContent = testsName.item2.price;
       });
       $('.testswrap span:eq(3)').click(function () {
           $('.table').show();
           document.querySelector('#name').textContent = testsName.item4.name;
           document.querySelector('#price').textContent = testsName.item4.price;
       });
       $('.testswrap span:eq(4)').click(function () {
           $('.table').show();
           document.querySelector('#name').textContent = testsName.item5.name;
           document.querySelector('#price').textContent = testsName.item5.price;
       });
       $('.testswrap span:eq(5)').click(function () {
           $('.table').show();
           document.querySelector('#name').textContent = testsName.item6.name;
           document.querySelector('#price').textContent = testsName.item6.price;
       });
       $('.testswrap span:eq(6)').click(function () {
           $('.table').show();
           document.querySelector('#name').textContent = testsName.item7.name;
           document.querySelector('#price').textContent = testsName.item7.price;
       });
       $('.testswrap span:eq(7)').click(function () {
           $('.table').show();
           document.querySelector('#name').textContent = testsName.item8.name;
           document.querySelector('#price').textContent = testsName.item8.price;
       });
       $('.testswrap span:eq(8)').click(function () {
           $('.table').show();
           document.querySelector('#name').textContent = testsName.item9.name;
           document.querySelector('#price').textContent = testsName.item9.price;
       });
       $('.testswrap span:eq(9)').click(function () {
           $('.table').show();
           document.querySelector('#name').textContent = testsName.item10.name;
           document.querySelector('#price').textContent = testsName.item10.price;
       });
       $('.testswrap span:eq(10)').click(function () {
           $('.table').show();
           document.querySelector('#name').textContent = testsName.item11.name;
           document.querySelector('#price').textContent = testsName.item11.price;
       });
       $('.testswrap span:eq(11)').click(function () {
           $('.table').show();
           document.querySelector('#name').textContent = testsName.item12.name;
           document.querySelector('#price').textContent = testsName.item12.price;
       });
       $('.testswrap span:eq(12)').click(function () {
           $('.table').show();
           document.querySelector('#name').textContent = testsName.item13.name;
           document.querySelector('#price').textContent = testsName.item13.price;
       });
       $('.testswrap span:eq(13)').click(function () {
           $('.table').show();
           document.querySelector('#name').textContent = testsName.item14.name;
           document.querySelector('#price').textContent = testsName.item14.price;
       });
       $('.testswrap span:eq(14)').click(function () {
           $('.table').show();
           document.querySelector('#name').textContent = testsName.item15.name;
           document.querySelector('#price').textContent = testsName.item15.price;
       });
       $('.testswrap span:eq(15)').click(function () {
           $('.table').show();
           document.querySelector('#name').textContent = testsName.item16.name;
           document.querySelector('#price').textContent = testsName.item16.price;
       });
       $('.testswrap span:eq(16)').click(function () {
           $('.table').show();
           document.querySelector('#name').textContent = testsName.item17.name;
           document.querySelector('#price').textContent = testsName.item17.price;
       });
       $('.testswrap span:eq(17)').click(function () {
           $('.table').show();
           document.querySelector('#name').textContent = testsName.item18.name;
           document.querySelector('#price').textContent = testsName.item18.price;
       });
       $('.testswrap span:eq(18)').click(function () {
           $('.table').show();
           document.querySelector('#name').textContent = testsName.item19.name;
           document.querySelector('#price').textContent = testsName.item19.price;
       });







   }
    itemSwich();
    bottom();



























