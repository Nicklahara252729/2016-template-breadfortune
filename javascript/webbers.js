            $(function(){
                $('*').css({
                   'margin':'0',
                    'padding':'0'
                });
                $('body').css({
                   'background':'#eee',
                    'height':'2000px',
                });
                $('.header').css({
                    'width':'100%',
                    'height':'140px',
                    'background':'#ac0041'
                });
                $('#btn1').click(function(){
   $('#headerid').slideToggle(1000) ;
                });
                $('#btn1').click(function(){
                    $('ul').slideToggle(1000);
                });
                $('#btn1').click(function(){
                    $('.btnmenu').slideToggle(750);
                });
                $('#btn1').css({
                    'width':'60px',
                    'height':'30px',
                    'border':'0',
                    'background':'#ac0041',
                    'fontFamily':'Letter Gothic Std',
                    'fontSize':'13px',
                    'float':'right',
                    'color':'white'
                });
                $('#btn1').mousemove(function(){
                    $('#btn1').css({
                    'background':'white',
                    'transition':'all 0.5s',
                    'border-left':'solid 1px #ac0041',
                    'border-bottom':'solid 1px #ac0041',
                    'color':'#ac0041'
                    });
                });
                $('#btn1').mouseleave(function(){
                    $('#btn1').css({
                    'background':'#ac0041',
                    'color':'white'
                    });
                });
                $('.txtheader').css({
                    'float':'right',
                    'width':'150px',
                    'height':'25px',
                    'border':'0',
                    'paddingLeft':'10px',
                    'fontFamily':'arial',
                    'fontSize':'13px',
                    'color':'#ac0041',
                    'marginRight':'10px',
                    'borderRadius':'2px',
                    'marginTop':'2px'
                });
                $('.txtheader-cari').css({
                    'width':'400px',
                    'height':'25px',
                    'border':'0',
                    'paddingLeft':'10px',
                    'fontFamily':'arial',
                    'fontSize':'13px',
                    'color':'#ac0041',
                    'marginLeft':'420px',
                    'borderRadius':'2px 0px 0px 2px',
                    'marginTop':'2px'
                });
                $('.password').css({
                    'float':'right',
                    'width':'150px',
                    'height':'25px',
                    'border':'0',
                    'paddingLeft':'10px',
                    'fontFamily':'arial',
                    'fontSize':'13px',
                    'color':'#ac0041',
                    'marginTop':'30px',
                    'marginRight':'-160px',
                    'borderRadius':'2px'
                });
                $('.btnheader').eq(0).css({
                    'float':'right',
                    'width':'80px',
                    'height':'25px',
                    'border':'0',
                    'fontFamily':'arial',
                    'fontSize':'13px',
                    'color':'#fff',
                    'marginTop':'60px',
                    'marginRight':'-160px',
                    'borderRadius':'0px',
                    'background':'#ac0041',
                    'marginLeft':'0px',
                    'border':'solid 0px #fff'
                });
                $('.btnheader').eq(1).css({
                    'float':'right',
                    'width':'80px',
                    'height':'25px',
                    'border':'0',
                    'fontFamily':'arial',
                    'fontSize':'13px',
                    'color':'#fff',
                    'marginTop':'60px',
                    'marginRight':'-80px',
                    'borderRadius':'2px',
                    'background':'#ac0041',
                    'marginLeft':'0px',
                    'border':'solid 1px #fff'
                });
               $('.btn-cari').css({
                    'width':'80px',
                    'height':'25px',
                    'border':'0',
                    'fontFamily':'arial',
                    'fontSize':'13px',
                    'color':'#fff',
                    'marginLeft':'-4px',
                    'marginTop':'2px',
                    'borderRadius':'0px 2px 2px 0px',
                    'background':'#ac0041',
                    'border':'solid 1px #fff'
                }); $('.btnheader').eq(1).mousemove(function(){
                    $('.btnheader').eq(1).css({
                    'transition':'all 0.3s',
                    'background':'white',
                    'color':'#ac0041'    
                    });
                });                $('.btnheader').eq(1).mouseleave(function(){
                    $('.btnheader').eq(1).css({
                    'transition':'all 0.3s',
                    'background':'#ac0041',
                    'color':'white',
                    'border':'solid 1px #fff'
                    });
                });
                $('.btnheader').eq(0).mousemove(function(){ $('.btnheader').eq(0).css({
                        'borderBottom':'solid 1px white',
                    });
                });
                $('.btnheader').eq(0).mouseleave(function(){
                    $('.btnheader').eq(0).css({
                        'borderBottom':'solid 0px white',
                    });
                });
 $('.btn-cari').mousemove(function(){
                    $('.btn-cari').css({
                    'transition':'all 0.3s',
                    'background':'white',
                    'color':'#ac0041'    
                    });
                });
 $('.btn-cari').mouseleave(function(){
                    $('.btn-cari').css({
                    'transition':'all 0.3s',
                    'background':'#ac0041',
                    'color':'white',
                    'border':'solid 1px #fff'
                    });
                });
                $('.container').css({
                    'border':'solid 0px #000',
                    'width':'1200px',
                    'height':'250px',
                    'marginLeft':'70px',
                    'background':'#ac0041',
                    'fontFamily':'Variane Script',
                    'color':'white',
                    'textAlign':'center',
                    'fontSize':'40px',
                    'position':'absolute',
                    'marginTop':'1px'
                });
                $('.pcontainer').css({
                    'fontSize':'100px',
                    'marginTop':'50px'
                });
                $('.pcontainer2').css({
                    'marginTop':'-40px'
                });
                    $('.btnmenu').css({
                    'border':'0',
                    'width':'70px',
                    'height':'25px',
                    'marginTop':'10px',
                    'marginRight':'0px',
                    'background':'#ac0041',
                    'color':'#fff',
                    'borderRadius':'0px',
                    'fontFamily':'arial',
                    'fontSize':'15px',
                    'position':'absolute'
                        });
                $('.btnmenu').eq(1).css({
                    'marginLeft':'514px'
                });
                $('.btnmenu').eq(2).css({
                    'marginLeft':'588px'
                });
                $('.btnmenu').eq(3).css({
                    'marginLeft':'662px'
                });
                $('.btnmenu').eq(4).css({
                    'marginLeft':'736px'
                });
                $('.btnmenu').eq(5).css({
                    'marginLeft':'810px'
                });
                $('.btnmenu').eq(0).mousemove(function(){
                    $('.btnmenu').eq(0).css({
                        'borderBottom':'solid 1px #fff',
                        'transition':'all 0s',
                        'background':'#ac0041',
                        'color':'white'
                    });
                });
                $('.btnmenu').eq(1).mousemove(function(){
                    $('.btnmenu').eq(1).css({
                         'borderBottom':'solid 1px #fff',
                        'transition':'all 0s',
                        'background':'#ac0041',
                        'color':'white'
                    });
                });
               $('.btnmenu').eq(2).mousemove(function(){
                    $('.btnmenu').eq(2).css({
                        'borderBottom':'solid 1px #fff',
                        'transition':'all 0s',
                        'background':'#ac0041',
                        'color':'white'
                    });
                });
                $('.btnmenu').eq(3).mousemove(function(){
                    $('.btnmenu').eq(3).css({
                        'borderBottom':'solid 1px #fff',
                        'transition':'all 0s',
                        'background':'#ac0041',
                        'color':'white'
                    });
              }); $('.btnmenu').eq(4).mousemove(function(){
                    $('.btnmenu').eq(4).css({
                        'borderBottom':'solid 1px #fff',
                        'transition':'all 0s',
                        'background':'#ac0041',
                        'color':'white'
                    });
                });
               $('.btnmenu').eq(5).mousemove(function(){
                    $('.btnmenu').eq(5).css({
                        'borderBottom':'solid 1px #fff',
                        'transition':'all 0s',
                        'background':'#ac0041',
                        'color':'white'
                    });
                }); $('.btnmenu').eq(0).mouseleave(function(){
                    $('.btnmenu').eq(0).css({
                        'background':'#ac0041', 
                        'color':'#fffs',
                        'borderBottom':'solid 0px #fff',
                    });
                });
                $('.btnmenu').eq(1).mouseleave(function(){
                    $('.btnmenu').eq(1).css({
                        'background':'#ac0041', 
                        'color':'#fffs',
                        'borderBottom':'solid 0px #fff',
                    });
                });
                $('.btnmenu').eq(2).mouseleave(function(){
                    $('.btnmenu').eq(2).css({
                        'background':'#ac0041', 
                        'color':'#fffs',
                        'borderBottom':'solid 0px #fff',
                    });
                });
                $('.btnmenu').eq(3).mouseleave(function(){
                    $('.btnmenu').eq(3).css({
                        'background':'#ac0041', 
                        'color':'#fffs',
                        'borderBottom':'solid 0px #fff',
                    });
                });
               $('.btnmenu').eq(4).mouseleave(function(){
                    $('.btnmenu').eq(4).css({
                        'background':'#ac0041', 
                        'color':'#fffs',
                        'borderBottom':'solid 0px #fff',
                    });
                }); $('.btnmenu').eq(5).mouseleave(function(){
                    $('.btnmenu').eq(5).css({
                        'background':'#ac0041', 
                        'color':'#fffs',
                        'borderBottom':'solid 0px #fff',
                    });
                });
                $('.btnmenu').text(function(){
                   $('.btnmenu').eq(0).css({
                       'marginLeft':'440px'
                   }) ;
                });
                $('.sosmed').css({
                    'width':'25px',
                    'height':'25px',
                    'border':'0',
                    'background':'#fff',
                    'color':'#ac0041',
                    'border':'solid 0px #fff',
                    'borderRadius':'50%',
                    'fontSize':'13px',
                });
                $('.sosmed').eq(0).css({
                    'marginLeft':'60px',
                });
                $('.sosmed').eq(0).mousemove(function(){
                    $('.sosmed').eq(0).css({
                        'background':'#ac0041',
                        'color':'#fff',
                        'border':'solid 1px #fff',
                        'transition':'all 0.3s'
                    });
                });
                $('.sosmed').eq(1).mousemove(function(){
                    $('.sosmed').eq(1).css({
                        'background':'#ac0041',
                        'color':'#fff',
                        'border':'solid 1px #fff',
                        'transition':'all 0.3s'
                    });
                });
                $('.sosmed').eq(2).mousemove(function(){
                    $('.sosmed').eq(2).css({
                        'background':'#ac0041',
                        'color':'#fff',
                        'border':'solid 1px #fff',
                        'transition':'all 0.3s'
                    });
                });
                $('.sosmed').eq(3).mousemove(function(){
                    $('.sosmed').eq(3).css({
                        'background':'#ac0041',
                        'color':'#fff',
                        'border':'solid 1px #fff',
                        'transition':'all 0.3s'
                    });
                });
                $('.sosmed').eq(4).mousemove(function(){
                    $('.sosmed').eq(4).css({
                        'background':'#ac0041',
                        'color':'#fff',
                        'border':'solid 1px #fff',
                        'transition':'all 0.3s'
                    });
                });
                $('.sosmed').eq(0).mouseleave(function(){
                    $('.sosmed').eq(0).css({
                        'background':'white',
                        'color':'#ac0041'
                    });
                });
                $('.sosmed').eq(1).mouseleave(function(){
                    $('.sosmed').eq(1).css({
                        'background':'white',
                        'color':'#ac0041'
                    });
                });
                $('.sosmed').eq(2).mouseleave(function(){
                    $('.sosmed').eq(2).css({
                        'background':'white',
                        'color':'#ac0041'
                    });
                });
                $('.sosmed').eq(3).mouseleave(function(){
                    $('.sosmed').eq(3).css({
                        'background':'white',
                        'color':'#ac0041'
                    });
                });
                $('.sosmed').eq(4).mouseleave(function(){
                    $('.sosmed').eq(4).css({
                        'background':'white',
                        'color':'#ac0041'
                    });
                });
                $('.foot').css({
                    'color':'white',
                    'marginRight':'10px'
                });
                $('.foot').eq(8).css({
                    'float':'right'
                });
                $('.foot').eq(9).css({
                    'float':'right'
                });
                $('.foot').last().css({
                    'float':'right'
                });
                
 $('.foot').eq(0).mousemove(function(){
                    $('.foot').eq(0).css({
                'textDecoration':'underline',
                    });
                });
                $('.foot').eq(1).mousemove(function(){
                    $('.foot').eq(1).css({
                'textDecoration':'underline',
                    });
                });
                $('.foot').eq(2).mousemove(function(){
                    $('.foot').eq(2).css({
                'textDecoration':'underline',
                    });
                });
                $('.foot').eq(3).mousemove(function(){
                    $('.foot').eq(3).css({
                'textDecoration':'underline',
                    });
                });
                $('.foot').eq(4).mousemove(function(){
                    $('.foot').eq(4).css({
                'textDecoration':'underline',
                    });
                });
                $('.foot').eq(5).mousemove(function(){
                    $('.foot').eq(5).css({
                'textDecoration':'underline',
                    });
                });
                $('.foot').eq(6).mousemove(function(){
                    $('.foot').eq(6).css({
                'textDecoration':'underline',
                    });
                });
                $('.foot').eq(7).mousemove(function(){
                    $('.foot').eq(7).css({
                'textDecoration':'underline',
                    });
                });
                $('.foot').eq(8).mousemove(function(){
                    $('.foot').eq(8).css({
                'textDecoration':'underline',
                    });
                });
               $('.foot').eq(9).mousemove(function(){
                    $('.foot').eq(9).css({
                'textDecoration':'underline',
                    });
                });
                $('.foot').eq(10).mousemove(function(){
                    $('.foot').eq(10).css({
                'textDecoration':'underline',
                    });
                });$('.foot').eq(0).mouseleave(function(){
                    $('.foot').eq(0).css({ 'textDecoration':'none'
                    });
                });
                $('.foot').eq(1).mouseleave(function(){
                    $('.foot').eq(1).css({ 'textDecoration':'none'
                    });
                });
                $('.foot').eq(2).mouseleave(function(){
                    $('.foot').eq(2).css({ 'textDecoration':'none'
                    });
                });
                $('.foot').eq(3).mouseleave(function(){
                    $('.foot').eq(3).css({ 'textDecoration':'none'
                    });
                });
$('.foot').eq(4).mouseleave(function(){
                    $('.foot').eq(4).css({ 'textDecoration':'none'
                    });
                });
                $('.foot').eq(5).mouseleave(function(){
                    $('.foot').eq(5).css({ 'textDecoration':'none'
                    });
                });
                $('.foot').eq(6).mouseleave(function(){
                    $('.foot').eq(6).css({ 'textDecoration':'none'
                    });
                });
                $('.foot').eq(7).mouseleave(function(){
                    $('.foot').eq(7).css({ 'textDecoration':'none'
                    });
                });
                $('.foot').eq(8).mouseleave(function(){
                    $('.foot').eq(8).css({ 'textDecoration':'none'
                    });
                });
                $('.foot').eq(9).mouseleave(function(){
                    $('.foot').eq(9).css({ 'textDecoration':'none'
                    });
                });
                $('.foot').eq(10).mouseleave(function(){
                    $('.foot').eq(10).css({ 'textDecoration':'none'
                    });
                });
                $('ul').css({
                    'position':'absolute',
                    'color':'white',
                    'fontSize':'12px',
                    'marginLeft':'120px',
                    'fontFamily':'arial',
                });
                $('ul').eq(1).css({
                    'marginLeft':'280px'
                });
                $('.ahref').slideUp();
                $('.ap').slideUp();
                $('.ap').css({
                    'color':'#ac0041',
                });
                $('ul').eq(3).css({
                    'marginLeft':'950px',
                    'marginTop':'-85px',
                    'width':'200px',
                    'fontSize':'12px',
                    'position':'relative'
                });
               $('li').css({
                   'textAlign':'left',
                   'listStyle':'none'
               }); $('li').filter('#lihead,#lihead2').css({
                    'listStyle':'none',
                    'textAlign':'center',
                    'fontFamily':'arial',
                    'fontSize':'15px',
                    
                });
                $('.btnlihead').click(function(){
 $('.ap').slideToggle(2000);
                });
                $('.btnlihead').click(function(){
 $('.divimg1').slideToggle(1500);
                });
               $('.btnlihead2').click(function(){
 $('.divimg1').slideToggle(1500);
                }); $('.btnlihead2').click(function(){
 $('.ahref').slideToggle(2000);
            });
                $('.btnlihead,.btnlihead2').css({
                    'width':'125px',
                    'border':'0',
                    'background':'white',
                    'borderRadius':'2px',
                    'color':'#ac0041',
                    'marginTop':'3px',
                    'boxShadow':'0px 0px 1px 0px #ac0041'
                });
                $('.btnlihead').mousemove(function(){
                    $('.btnlihead').css({
                    'border':'solid 1px white',
                    'background':'#ac0041',
                    'color':'#fff',
                        'transition':'all 0.3s'
                        });
                });
                $('.btnlihead').mouseleave(function(){
                    $('.btnlihead').css({
                        'border':'solid 0px white',
                    'background':'#fff',
                    'color':'#ac0041',
                        'transition':'all 0.3s'
                        });
                });
                $('.btnlihead2').mousemove(function(){
                    $('.btnlihead2').css({
                    'border':'solid 1px white',
                    'background':'#ac0041',
                    'color':'#fff',
                        'transition':'all 0.3s'
                        });
                });
                $('.btnlihead2').mouseleave(function(){
                    $('.btnlihead2').css({
                        'border':'solid 0px white',
                    'background':'#fff',
                    'color':'#ac0041',
                        'transition':'all 0.3s'
                        });
                });
                $('.inhead').css({
                    'width':'auto',
                    'height':'auto',
                    'border':'solid 1px #fff',
                    'borderRadius':'5px',
                    'paddingLeft':'10px',
                    'background':'white',
                    'boxShadow':'0px 0px 1px 0px #ac0041'
                });
                $('.inhead').eq(2).css({
                    'overflow':'auto',
                    'width':'230px',
                    'height':'60px',
                    'marginTop':'-15px',
                    'marginLeft':'925px',
                    'fontFamily':'arial',
                    'color':'#ac0041',
                    'background':'#fff',
                    'fontSize':'13px'
                    
                });
                $('.inhead').eq(3).css({
                    'background':'#ac0041',
                    'height':'15px',
                    'marginTop':'0px',
                    'borderRadius':'0',
                    'fontFamily':'arial',
                    'color':'white',
                    'fontSize':'11px',
                    'border':'0'
                });
                $('.op').css({
                    'width':'243px',
                    'height':'27px',
                    'border':'0',
                    'borderRadius':'2px',
                    'fontFamily':'arial',
                    'color':'#ac0041',
                    'marginTop':'4px',
                    'marginLeft':'925px'
                });
                $('.themes').css({
                    'width':'30px',
                    'height':'30px',
                    'background':'#104668',
                    'borderRadius':'2px',
                    
                    'marginTop':'5px'
                });
                $('.themes').eq(0).mousemove(function(){                    $('.themes').eq(0).css({
                    'transform':'scale(1.3)',
                    'transition':'all 0.2s'
                });
                });
                $('.themes').eq(0).mouseleave(function(){
 $('.themes').eq(0).css({
     'transform':'scale(1.0)',
     'transition':'all 0.2s'
 });
                });
                $('.themes').eq(1).css({
                    'background':'#fffc00',
                    'marginLeft':'38px',
                    'marginTop':'-30px'
                });
                $('.themes').eq(1).mousemove(function(){                    $('.themes').eq(1).css({
                    'transform':'scale(1.3)',
                    'transition':'all 0.2s'
                });
                });
                $('.themes').eq(1).mouseleave(function(){
 $('.themes').eq(1).css({
     'transform':'scale(1.0)',
     'transition':'all 0.2s'
 });
                });
                $('.themes').eq(2).css({
                    'background':'#9f101a',
                    'marginLeft':'77px',
                    'marginTop':'-30px'
                });
                $('.themes').eq(2).mousemove(function(){                    $('.themes').eq(2).css({
                    'transform':'scale(1.3)',
                    'transition':'all 0.2s'
                });
                });
                $('.themes').eq(2).mouseleave(function(){
 $('.themes').eq(2).css({
     'transform':'scale(1.0)',
     'transition':'all 0.2s'
 });
                });
                $('.themes').eq(3).css({
                    'background':'#7dd402',
                    'marginLeft':'115px',
                    'marginTop':'-30px'
                });
                $('.themes').eq(3).mousemove(function(){                    $('.themes').eq(3).css({
                    'transform':'scale(1.3)',
                    'transition':'all 0.2s'
                });
                });
                $('.themes').eq(3).mouseleave(function(){
 $('.themes').eq(3).css({
     'transform':'scale(1.0)',
     'transition':'all 0.2s'
 });
                });
                $('.themes').eq(4).css({
                    'background':'#ff7200',
                    'marginLeft':'153px',
                    'marginTop':'-30px'
                });
                $('.themes').eq(4).mousemove(function(){                    $('.themes').eq(4).css({
                    'transform':'scale(1.3)',
                    'transition':'all 0.2s'
                });
                });
                $('.themes').eq(4).mouseleave(function(){
 $('.themes').eq(4).css({
     'transform':'scale(1.0)',
     'transition':'all 0.2s'
 });
                });
                $('.themes').eq(5).css({
                    'background':'#8105aa',
                    'marginLeft':'190px',
                    'marginTop':'-30px'
                });
                $('.themes').eq(5).mousemove(function(){                    $('.themes').eq(5).css({
                    'transform':'scale(1.3)',
                    'transition':'all 0.2s'
                });
                });
                $('.themes').eq(5).mouseleave(function(){
 $('.themes').eq(5).css({
     'transform':'scale(1.0)',
     'transition':'all 0.2s'
 });
                });
                $('.themes').eq(0).click(function(){
                    $('.themes').eq(0).css({
                        'boxShadow':'0px 0px 0px 5px #ac0041',
                    });
                });
                $('.themes').eq(1).click(function(){
                    $('.themes').eq(1).css({
                        'boxShadow':'0px 0px 0px 5px #ac0041',
                    });
                });
                $('.themes').eq(2).click(function(){
                    $('.themes').eq(2).css({
                        'boxShadow':'0px 0px 0px 5px #ac0041',
                    });
                });
                $('.themes').eq(3).click(function(){
                    $('.themes').eq(3).css({
                        'boxShadow':'0px 0px 0px 5px #ac0041',
                    });
                });
                $('.themes').eq(4).click(function(){
                    $('.themes').eq(4).css({
                        'boxShadow':'0px 0px 0px 5px #ac0041',
                    });
                });
                $('.themes').eq(5).click(function(){
                    $('.themes').eq(5).css({
                        'boxShadow':'0px 0px 0px 5px #ac0041',
                    });
                });
                $('.themes').eq(0).dblclick(function(){
                    $('.themes').eq(0).css({
                        'boxShadow':'0px 0px 0px 0px #ac0041',
                    });
                });
                $('.themes').eq(1).dblclick(function(){
                    $('.themes').eq(1).css({
                        'boxShadow':'0px 0px 0px 0px #ac0041',
                    });
                });
                $('.themes').eq(2).dblclick(function(){
                    $('.themes').eq(2).css({
                        'boxShadow':'0px 0px 0px 0px #ac0041',
                    });
                });
                $('.themes').eq(3).dblclick(function(){
                    $('.themes').eq(3).css({
                        'boxShadow':'0px 0px 0px 0px #ac0041',
                    });
                });
                $('.themes').eq(4).dblclick(function(){
                    $('.themes').eq(4).css({
                        'boxShadow':'0px 0px 0px 0px #ac0041',
                    });
                });
                $('.themes').eq(5).dblclick(function(){
                    $('.themes').eq(5).css({
                        'boxShadow':'0px 0px 0px 0px #ac0041',
                    });
                });
                $('a').css({
                    'textDecoration':'none'
                });
 $('a').eq(0).mousemove(function(){
                    $('a').eq(0).css({
 'textDecoration':'underline',
                    });
                });
  $('a').eq(1).mousemove(function(){
                    $('a').eq(1).css({
 'textDecoration':'underline',
                    });
                });                $('a').eq(2).mousemove(function(){
                    $('a').eq(2).css({
 'textDecoration':'underline',
                    });
                });
 $('a').eq(3).mousemove(function(){
                    $('a').eq(3).css({
 'textDecoration':'underline',
                    });
                });
 $('a').eq(4).mousemove(function(){
                    $('a').eq(4).css({
 'textDecoration':'underline',
                    });
                });
                $('a').eq(0).mouseleave(function(){
                    $('a').eq(0).css({
 'textDecoration':'none',
                    });
                });
  $('a').eq(1).mouseleave(function(){
                    $('a').eq(1).css({
 'textDecoration':'none',
                    });
                });                $('a').eq(2).mouseleave(function(){
                    $('a').eq(2).css({
 'textDecoration':'none',
                    });
                });
 $('a').eq(3).mouseleave(function(){
                    $('a').eq(3).css({
 'textDecoration':'none',
                    });
                });
 $('a').eq(4).mouseleave(function(){
                    $('a').eq(4).css({
 'textDecoration':'none',
                    });
                });
               $('.ahref').css({
                   'color':'#ac0041'
               }); $('.ahref').eq(0).mousemove(function(){
                   $('.ahref').eq(0).css({
 'textDecoration':'underline',
                   });
                });
                $('.ahref').eq(1).mousemove(function(){
                   $('.ahref').eq(1).css({
 'textDecoration':'underline',
                   });
                });
                $('.ahref').eq(2).mousemove(function(){
                   $('.ahref').eq(2).css({
 'textDecoration':'underline',
                   });
                });
                $('.ahref').eq(3).mousemove(function(){
                   $('.ahref').eq(3).css({
 'textDecoration':'underline',
                   });
                });
                $('.ahref').eq(4).mousemove(function(){
                   $('.ahref').eq(4).css({
 'textDecoration':'underline',
                   });
                });
                $('.ahref').eq(0).mouseleave(function(){
                   $('.ahref').eq(0).css({
 'textDecoration':'none',
                   });
                });
                $('.ahref').eq(1).mouseleave(function(){
                   $('.ahref').eq(1).css({
 'textDecoration':'none',
                   });
                });
                $('.ahref').eq(2).mouseleave(function(){
                   $('.ahref').eq(2).css({
 'textDecoration':'none',
                   });
                });
                $('.ahref').eq(3).mouseleave(function(){
                   $('.ahref').eq(3).css({
 'textDecoration':'none',
                   });
                });
                $('.ahref').eq(4).mouseleave(function(){
                   $('.ahref').eq(4).css({
 'textDecoration':'none',
                   });
                });
                
                $('.inbtn1').css({
                    'width':'30px',
                    'height':'2px',
                    'background':'white',
                    'marginLeft':'15px',
                    'marginTop':'-2px',
                    'position':'absolute'
                });
                $('#btn1').mousemove(function(){
                    $('.inbtn1').css({
 'background':'#ac0041',
                        'transition':'all 0.5s'
                    });
                });
 $('#btn1').mouseleave(function(){
                    $('.inbtn1').css({
                        'background':'#fff'
                    });
                });
                
                $('.bloggers').css({
                    'marginLeft':'0px',
                    'fontSize':'55px',
                    'fontFamily':'Variane Script',
                    'marginTop':'20px',
                    'marginLeft':'7px'
                });
                $('.bloggers').text(function(){                    $('li').eq(1).css({       
                        'fontSize':'20px',
                    'marginTop':'-20px',
                    'marginLeft':'5px'
                      });
                });
                $('.img1').css({
                    'width':'55px',
                    'height':'55px',
                    'borderRadius':'10px',
                });
                $('.divimg1').css({
                    'width':'55px',
                    'height':'55px',
                    'marginTop':'-85px',
                    'marginLeft':'120px',
                    'borderRadius':'10px',
                    'background':'white'
                });
                $('.divimg1').eq(1).css({ 
                    'width':'214px',
                    'height':'55px',
                    'marginTop':'-55px',
                    'marginLeft':'180px',
                    'borderRadius':'10px',
                    'background':'white',
                    'color':'#ac0041',
                    'fontSize':'10px',
                    'fontFamily':'arial',
                    'paddingLeft':'10px'
                });
                $('.container2').css({
                    'width':'700px',
                    'height':'auto',
                    'border':'solid 0px',
                    'position':'absolute',
                    'marginTop':'255px',
                    'marginLeft':'70px',
                    'fontFamily':'arial',
                    'fontSize':'16px',
                    'background':'#fff',
                    'paddingLeft':'50px',
                    'paddingRight':'50px',
                    'paddingTop':'10px',
                    'paddingBottom':'10px',
                    'color':'#545460'
                });
                $('.container3').css({
                    'width':'397px',
                    'height':'30px',
                    'border':'solid 0px',
                    'position':'absolute',
                    'marginLeft':'873px',
                    'marginTop':'255px',
                    'background':'#ac0041',
                    'color':'white',
                    'textAlign':'center',
                    'fontFamily':'arial',
                    'fontSize':'16px',
                    'paddingTop':'5px'
                });
                $('.container3').eq(1).css({
                    'width':'397px',
                    'height':'auto',
                    'border':'solid 0px',
                    'position':'absolute',
                    'marginLeft':'873px',
                    'marginTop':'293px',
                    'background':'#fff',
                    'color':'#ac0041',
                    'textAlign':'center',
                    'fontFamily':'arial',
                    'fontSize':'15px',
                    'padding':'10px 0px 10px 0px'
                });
                $('.pc3').css({
                    'fontSize':'13px',
                    'paddingLeft':'10px',
                    'paddingRight':'10px',
                    'textAlign':'justify',
                    'marginTop':'10px'
                });
                $('.c3txt').css({
                    'width':'250px',
                    'height':'30px',
                    'paddingLeft':'10px',
                    'marginBottom':'10px',
                    'border':'0',
                    'borderRadius':'5px',
                    'boxShadow':'0px 0px 0px 1px #F1F1F0',
                    'color':'#ac0041'
                });
                $('.c3btn').css({
                    'width':'260px',
                    'height':'30px',
                    'color':'white',
                    'border':'0',
                    'borderRadius':'5px',
                    'background':'#ac0041'
                });
                $('.c3btn').eq(0).mouseenter(function(){
                    $('.c3btn').eq(0).css({
                        'border':'solid 1px #ac0041',
                        'transition':'all 0.3s',
                        'background':'white',
                        'color':'#ac0041'
                    });
                });
                $('.c3btn').eq(0).mouseleave(function(){
                    $('.c3btn').eq(0).css({
                        'background':'#ac0041',
                        'color':'white',
                        'transition':'all 0.3s'
                    });
                });
                $('.c3btn').eq(1).mouseenter(function(){
                    $('.c3btn').eq(1).css({
                        'border':'solid 1px #ac0041',
                        'transition':'all 0.3s',
                        'background':'white',
                        'color':'#ac0041'
                    });
                });
                $('.c3btn').eq(1).mouseleave(function(){
                    $('.c3btn').eq(1).css({
                        'background':'#ac0041',
                        'color':'white',
                        'transition':'all 0.3s'
                    });
                });
                $('.container5').css({
                    'width':'397px',
                    'height':'30px',
                    'border':'solid 0px',
                    'position':'absolute',
                    'marginLeft':'873px',
                    'marginTop':'550px',
                    'background':'#ac0041',
                    'color':'white',
                    'textAlign':'center',
                    'fontFamily':'arial',
                    'fontSize':'16px',
                    'paddingTop':'5px'
                });
                $('.container5').eq(1).css({
                    'width':'397px',
                    'height':'auto',
                    'border':'solid 0px',
                    'position':'absolute',
                    'marginLeft':'873px',
                    'marginTop':'588px',
                    'background':'#fff',
                    'color':'#ac0041',
                    'textAlign':'center',
                    'fontFamily':'arial',
                    'fontSize':'15px',
                    'padding':'10px 0px 10px 0px'
                });
                $('.inc5').css({
                    'width':'260px',
                    'height':'60px',
                    'boxShadow':'0px 0px 0px 1px #F1F1F0',
                    'margin':'0 auto',
                    'textAlign':'center',
                    'fontFamily':'arial',
                    'fontSize':'14px',
                    'borderRadius':'5px',
                    'marginBottom':'10px'
                });
                $('.inc5').eq(2).css({
                    'height':'70px'
                });
                $('.container4').css({
                    'width':'210px',
                    'height':'521px',
                    'background':'#fff',
                    'position':'fixed',
                    'marginTop':'1px',
                    'borderRadius':'4px',
                    'border':'solid 1px #ac0041',
                    'color':'white',
                    'fontFamily':'arial',
                    'fontSize':'12px',
                    'marginLeft':'1px',
                    'overflow':'auto'
                });
                $('.container4').slideUp();
                $('.btncontainer4').css({
                    'marginLeft':'0px',
                    'marginTop':'523px',
                    'position':'fixed',
                    'width':'70px',
                    'height':'30px',
                    'border':'0',
                    'background':'#ac0041',
                    'color':'white',
                    'fontFamily':'arial',
                    'borderRadius':'4px',
                    'marginLeft':'1px'
                });
               $('.btncontainer4').mouseenter(function(){
                   $('.btncontainer4').css({
                       'background':'white',
                       'color':'#ac0041',
                       'transition':'all 0.3s',
                       'border':'solid 1px #ac0041'
                   });
               }); $('.btncontainer4').click(function(){
 $('.container4').slideToggle();
                });
                $('.btncontainer4').mouseleave(function(){
                    $('.btncontainer4').css({
  'background':'#ac0041',
                        'color':'white',
                        'border':'0',
                        'transition':'all 0.3s'
                    });
                });
                $('.txt1').css({
                    'width':'150px',
                    'height':'25px',
                    'marginTop':'5px',
                    'color':'#ac0041',
                    'fontSize':'12px',
                    'fontFamily':'arial',
                    'border':'0',
                    'marginLeft':'3px',
                    'paddingLeft':'3px',
                    'boxShadow':'0px 0px 0px 1px #F1F1F0',
                    'position':'fixed'
                });
                $('.btntxt').css({
                    'border':'0',
                    'height':'25px',
                    'marginTop':'5px',
                    'color':'white',
                    'fontFamily':'arial',
                    'position':'absolute',
                    'background':'#ac0041',
                    'border':'solid 0px white',
                    'marginLeft':'155px',
                    'boxShadow':'0px 0px 0px 1px #F1F1F0',
                    'position':'fixed'
                });
                $('.btntxt').mouseenter(function(){
                    $('.btntxt').css({
                        'background':'white',
                        'color':'#ac0041',
                        'transition':'all 0.3s'
                    });
                });
                $('.btntxt').mouseleave(function(){
                    $('.btntxt').css({
                        'background':'#ac0041',
                        'color':'white',
                        'transition':'all 0.3s'
                    });
                });
                $('.ptxt').css({
                    'marginTop':'20px',
                    'width':'50px',
                    'height':'50px',
                    'borderRadius':'5px',
                    'marginLeft':'3px',
                    
                });
                $('.ptxt2').css({
                    'width':'50px',
                    'height':'50px',
                    'borderRadius':'5px',
                    'marginLeft':'145px',                    
                    'marginTop':'-50px',
                    'position':'absolute'
                    
                });
                $('.ptxt3').css({
                    'marginTop':'58px',
                    'width':'50px',
                    'height':'50px',
                    'borderRadius':'5px',
                    'marginLeft':'3px',
                    'marginTop':'10px'
                });
                $('.isimsg').css({
                    'width':'139px',
                    'height':'50px',
                    'background':'#eee',
                    'marginTop':'-55px',
                    'marginLeft':'55px',
                    'borderRadius':'5px',
                    'fontFamily':'arial',
                    'color':'#545460',
                    'fontSize':'12px',
                    'overflow':'auto'
                });
                $('.isimsg2').css({
                    'width':'139px',
                    'height':'50px',
                    'background':'#eee',
                    'marginTop':'10px',
                    'marginLeft':'3px',
                    'borderRadius':'5px',
                    'fontFamily':'arial',
                    'color':'#545460',
                    'fontSize':'12px',
                    'overflow':'auto',
                    
                });
                $('.isimsg3').css({
                    'width':'139px',
                    'height':'50px',
                    'background':'#eee',
                    'marginTop':'-53px',
                    'marginLeft':'55px',
                    'borderRadius':'5px',
                    'fontFamily':'arial',
                    'color':'#545460',
                    'fontSize':'12px',
                    'overflow':'auto',
                    
                });
                $('h2').css({
                    'marginTop':'20px',
                    'color':'#000'
                });
                $('.pc2').css({
                    'color':'#545460'
                });
                $('.imgc2').css({
                    'width':'700px',
                    'height':'100px'
                });
                $('.imgc').css({
                    'marginLeft':'0px',
                    'height':'auto',
                    'width':'578px',
                    'marginTop':'0px',
                    'border':'solid 0px'
                });
                $('.imgc').eq(1).css({
                    'marginTop':'60px',
                    'width':'550px',
                    'marginLeft':'0px'
                });
                $('.imgc').eq(2).css({
                    'marginTop':'60px',
                    'width':'550px',
                    'marginLeft':'0px'
                });
                $('.imgc').eq(3).css({
                    'marginTop':'0px',
                    'width':'550px',
                    'marginLeft':'0px'
                });
                $('.imgc').eq(4).css({
                    'marginTop':'0px',
                    'width':'500px',
                    'marginLeft':'0px'
                });
                $('.imgc').eq(5).css({
                    'marginTop':'0px',
                    'width':'500px',
                    'marginLeft':'0px'
                });
                $('.imgc').eq(6).css({
                    'marginTop':'90px',
                    'width':'500px',
                    'marginLeft':'0px'
                });
                $('.imgc').eq(7).css({
                    'marginTop':'0px',
                    'width':'500px',
                    'marginLeft':'0px'
                });
                $('.imgc').eq(8).css({
                    'marginTop':'0px',
                    'width':'500px',
                    'marginLeft':'0px'
                });
                $('.imgc').eq(9).css({
                    'marginTop':'0px',
                    'width':'500px',
                    'marginLeft':'0px'
                });
                $('.imgc').eq(10).css({
                    'marginTop':'0px',
                    'width':'500px',
                    'marginLeft':'0px'
                });
                $('.imgc2-2').css({
                    'marginTop':'5px'
                });
                $('.imgc2-2').eq(1).css({
                    'marginTop':'10px',
                    'position':'absolute'
                });
                $('.imgc2-2').eq(2).css({
                    'marginTop':'10px',
                    'position':'absolute'
                });
                $('.imgc2-2').eq(6).css({
                    'marginTop':'20px',
                    'position':'absolute'
                });
                $('h3').css({
                    'marginTop':'10px',
                    'color':'#000'
                });
                $('h1').css({
                    'marginTop':'10px',
                    'color':'#000'
                });
                $('.amenu').css({
                    'color':'#ac0041'
                });
                $('.amenu').first().mouseenter(function(){
                    $('.amenu').first().css({
                        'textDecoration':'underline'
                        });  
                });
                $('.amenu').eq(1).mouseenter(function(){
                    $('.amenu').eq(1).css({
                        'textDecoration':'underline'
                        });  
                });
                $('.amenu').last().mouseenter(function(){
                    $('.amenu').last().css({
                        'textDecoration':'underline'
                        });  
                });
                $('.amenu').first().mouseleave(function(){
                    $('.amenu').first().css({
                        'textDecoration':'none'
                        });  
                });
                $('.amenu').eq(1).mouseleave(function(){
                    $('.amenu').eq(1).css({
                        'textDecoration':'none'
                        });  
                });
                $('.amenu').last().mouseleave(function(){
                    $('.amenu').last().css({
                        'textDecoration':'none'
                        });  
                });
                $('.tc5').css({
                    'width':'30px',
                    'height':'30px',
                    'background':'#104668',
                    'borderRadius':'2px',
                    'position':'absolute',
                    'marginTop':'5px',
                    'marginLeft':'10px'
                });
                $('.tc5').eq(0).mousemove(function(){                    $('.tc5').eq(0).css({
                    'transform':'scale(1.3)',
                    'transition':'all 0.2s'
                });
                });
                $('.tc5').eq(0).mouseleave(function(){
 $('.tc5').eq(0).css({
     'transform':'scale(1)',
     'transition':'all 0.2s'
 });
                });
                $('.tc5').eq(1).css({
                    'background':'#fffc00',
                    'marginLeft':'53px'
                });
                $('.tc5').eq(1).mousemove(function(){                    $('.tc5').eq(1).css({
'transform':'scale(1.3)',
                    'transition':'all 0.2s'
                });
                });
                $('.tc5').eq(1).mouseleave(function(){
 $('.tc5').eq(1).css({
     'transform':'scale(1)',
     'transition':'all 0.2s'
 });
                });
                $('.tc5').eq(2).css({
                    'background':'#9f101a',
                    'marginLeft':'95px'
                });
                $('.tc5').eq(2).mousemove(function(){                    $('.tc5').eq(2).css({
'transform':'scale(1.3)',
                    'transition':'all 0.2s'
                });
                });
                $('.tc5').eq(2).mouseleave(function(){
 $('.tc5').eq(2).css({
     'transform':'scale(1)',
     'transition':'all 0.2s'
 });
                });
                $('.tc5').eq(3).css({
                    'background':'#7dd402',
                    'marginLeft':'137px'
                });
                $('.tc5').eq(3).mousemove(function(){                    $('.tc5').eq(3).css({
                    'transform':'scale(1.3)',
                    'transition':'all 0.2s'
                });
                });
                $('.tc5').eq(3).mouseleave(function(){
 $('.tc5').eq(3).css({
     'transform':'scale(1)',
     'transition':'all 0.2s'
 });
                });
                $('.tc5').eq(4).css({
                    'background':'#ff7200',
                    'marginLeft':'179px'
                });
                $('.tc5').eq(4).mousemove(function(){                    $('.tc5').eq(4).css({
                    'transform':'scale(1.3)',
                    'transition':'all 0.2s'
                });
                });
                $('.tc5').eq(4).mouseleave(function(){
 $('.tc5').eq(4).css({
     'transform':'scale(1)',
     'transition':'all 0.2s'
 });
                });
                $('.tc5').eq(5).css({
                    'background':'#8105aa',
                    'marginLeft':'220px'
                });
                $('.tc5').eq(5).mousemove(function(){                    $('.tc5').eq(5).css({
                    'transform':'scale(1.3)',
                    'transition':'all 0.2s'
                });
                });
                $('.tc5').eq(5).mouseleave(function(){
 $('.tc5').eq(5).css({
     'transform':'scale(1)',
     'transition':'all 0.2s'
 });
                });
                $('.tc5').eq(0).click(function(){
                    $('.tc5').eq(0).css({
                        'boxShadow':'0px 0px 0px 5px #ac0041',
                    });
                });
                $('.tc5').eq(1).click(function(){
                    $('.tc5').eq(1).css({
                        'boxShadow':'0px 0px 0px 5px #ac0041',
                    });
                });
                $('.tc5').eq(2).click(function(){
                    $('.tc5').eq(2).css({
                        'boxShadow':'0px 0px 0px 5px #ac0041',
                    });
                });
                $('.tc5').eq(3).click(function(){
                    $('.tc5').eq(3).css({
                        'boxShadow':'0px 0px 0px 5px #ac0041',
                    });
                });
                $('.tc5').eq(4).click(function(){
                    $('.tc5').eq(4).css({
                        'boxShadow':'0px 0px 0px 5px #ac0041',
                    });
                });
                $('.tc5').eq(5).click(function(){
                    $('.tc5').eq(5).css({
                        'boxShadow':'0px 0px 0px 5px #ac0041',
                    });
                });
                $('.tc5').eq(0).dblclick(function(){
                    $('.tc5').eq(0).css({
                        'boxShadow':'0px 0px 0px 0px #ac0041',
                    });
                });
                $('.tc5').eq(1).dblclick(function(){
                    $('.tc5').eq(1).css({
                        'boxShadow':'0px 0px 0px 0px #ac0041',
                    });
                });
                $('.tc5').eq(2).dblclick(function(){
                    $('.tc5').eq(2).css({
                        'boxShadow':'0px 0px 0px 0px #ac0041',
                    });
                });
                $('.tc5').eq(3).dblclick(function(){
                    $('.tc5').eq(3).css({
                        'boxShadow':'0px 0px 0px 0px #ac0041',
                    });
                });
                $('.tc5').eq(4).dblclick(function(){
                    $('.tc5').eq(4).css({
                        'boxShadow':'0px 0px 0px 0px #ac0041',
                    });
                });
                $('.tc5').eq(5).dblclick(function(){
                    $('.tc5').eq(5).css({
                        'boxShadow':'0px 0px 0px 0px #ac0041',
                    });
                });
                $('.imgf').css({
                    'width':'30px',
                    'height':'30px',
                    'marginTop':'5px',
                    'boxShadow':'0px 0px 0px 1px #F1F1F0',
                    'marginLeft':'6px'
                });
                $('.imgf').eq(0).mousemove(function(){
                    $('.imgf').eq(0).css({
                        'transition':'all 0.3s',
                        'transform':'scale(1.3)'
                    });
                });
                $('.imgf').eq(0).mouseleave(function(){
                    $('.imgf').eq(0).css({
                        'transition':'all 0.3s',
                        'transform':'scale(1)'
                    });
                });
                $('.imgf').eq(0).click(function(){
                    $('.imgf').eq(0).css({
                        'boxShadow':'0px 0px 0px 5px #ac0041',
                    });
                });
                
                $('.imgf').eq(1).click(function(){
                    $('.imgf').eq(1).css({
                        'boxShadow':'0px 0px 0px 5px #ac0041',
                    });
                });
                $('.imgf').eq(2).click(function(){
                    $('.imgf').eq(2).css({
                        'boxShadow':'0px 0px 0px 5px #ac0041',
                    });
                });
                $('.imgf').eq(3).click(function(){
                    $('.imgf').eq(3).css({
                        'boxShadow':'0px 0px 0px 5px #ac0041',
                    });
                });
                $('.imgf').eq(4).click(function(){
                    $('.imgf').eq(4).css({
                        'boxShadow':'0px 0px 0px 5px #ac0041',
                    });
                });
                $('.imgf').eq(5).click(function(){
                    $('.imgf').eq(5).css({
                        'boxShadow':'0px 0px 0px 5px #ac0041',
                    });
                });
                $('.imgf').eq(0).dblclick(function(){
                    $('.imgf').eq(0).css({
                        'boxShadow':'0px 0px 0px 0px #ac0041',
                    });
                });
                $('.imgf').eq(1).dblclick(function(){
                    $('.imgf').eq(1).css({
                        'boxShadow':'0px 0px 0px 0px #ac0041',
                    });
                });
                $('.imgf').eq(2).dblclick(function(){
                    $('.imgf').eq(2).css({
                        'boxShadow':'0px 0px 0px 0px #ac0041',
                    });
                });
                $('.imgf').eq(3).dblclick(function(){
                    $('.imgf').eq(3).css({
                        'boxShadow':'0px 0px 0px 0px #ac0041',
                    });
                });
                $('.imgf').eq(4).dblclick(function(){
                    $('.imgf').eq(4).css({
                        'boxShadow':'0px 0px 0px 0px #ac0041',
                    });
                });
                $('.imgf').eq(5).dblclick(function(){
                    $('.imgf').eq(5).css({
                        'boxShadow':'0px 0px 0px 0px #ac0041',
                    });
                });
                $('.imgf').eq(1).mousemove(function(){
                    $('.imgf').eq(1).css({
                        'transition':'all 0.3s',
                        'transform':'scale(1.3)'
                    });
                });
                $('.imgf').eq(1).mouseleave(function(){
                    $('.imgf').eq(1).css({
                        'transition':'all 0.3s',
                        'transform':'scale(1)'
                    });
                });
                $('.imgf').eq(2).mousemove(function(){
                    $('.imgf').eq(2).css({
                        'transition':'all 0.3s',
                        'transform':'scale(1.3)'
                    });
                });
                $('.imgf').eq(2).mouseleave(function(){
                    $('.imgf').eq(2).css({
                        'transition':'all 0.3s',
                        'transform':'scale(1)'
                    });
                });
                $('.imgf').eq(3).mousemove(function(){
                    $('.imgf').eq(3).css({
                        'transition':'all 0.3s',
                        'transform':'scale(1.3)'
                    });
                });
                $('.imgf').eq(3).mouseleave(function(){
                    $('.imgf').eq(3).css({
                        'transition':'all 0.3s',
                        'transform':'scale(1)'
                    });
                });
                $('.imgf').eq(4).mousemove(function(){
                    $('.imgf').eq(4).css({
                        'transition':'all 0.3s',
                        'transform':'scale(1.3)'
                    });
                });
                $('.imgf').eq(4).mouseleave(function(){
                    $('.imgf').eq(4).css({
                        'transition':'all 0.3s',
                        'transform':'scale(1)'
                    });
                });
                $('.imgf').eq(5).mousemove(function(){
                    $('.imgf').eq(5).css({
                        'transition':'all 0.3s',
                        'transform':'scale(1.3)'
                    });
                });
                $('.imgf').eq(5).mouseleave(function(){
                    $('.imgf').eq(5).css({
                        'transition':'all 0.3s',
                        'transform':'scale(1)'
                    });
                });
                $('.font').css({
                    'width':'190px',
                    'height':'30px',
                    'border':'0',
                    'borderRadius':'2px',
                    'fontFamily':'arial',
                    'color':'#ac0041',
                    'marginTop':'10px',
                    'marginLeft':'0px',
                    'boxShadow':'0px 0px 0px 1px #F1F1F0',
                });
                $('.font').eq(1).css({
                    'width':'50px',
                    'textAlign':'center',
                });
                $('.container6').css({
                    'width':'397px',
                    'height':'30px',
                    'border':'solid 0px',
                    'position':'absolute',
                    'marginLeft':'873px',
                    'marginTop':'1060px',
                    'background':'#ac0041',
                    'color':'white',
                    'textAlign':'center',
                    'fontFamily':'arial',
                    'fontSize':'16px',
                    'paddingTop':'5px'
                });
                $('.container6').eq(1).css({
                    'width':'397px',
                    'height':'300px',
                    'border':'solid 0px',
                    'position':'absolute',
                    'marginLeft':'873px',
                    'marginTop':'1100px',
                    'background':'#fff',
                    'color':'#ac0041',
                    'textAlign':'center',
                    'fontFamily':'arial',
                    'fontSize':'15px',
                    'overflow':'auto',
                    'padding':'10px 0px 20px 0px'
                });
                $('.container7').css({
                    'width':'397px',
                    'height':'30px',
                    'border':'solid 0px',
                    'position':'absolute',
                    'marginLeft':'873px',
                    'marginTop':'1440px',
                    'background':'#ac0041',
                    'color':'white',
                    'textAlign':'center',
                    'fontFamily':'arial',
                    'fontSize':'16px',
                    'paddingTop':'5px'
                });
                $('.container7').eq(1).css({
                    'width':'397px',
                    'height':'300px',
                    'border':'solid 0px',
                    'position':'absolute',
                    'marginLeft':'873px',
                    'marginTop':'1480px',
                    'background':'#fff',
                    'color':'#545460',
                    'textAlign':'center',
                    'fontFamily':'arial',
                    'fontSize':'14px',
                    'padding':'10px 0px 10px 0px'
                });
                $('.container8').css({
                    'width':'397px',
                    'height':'30px',
                    'border':'solid 0px',
                    'position':'absolute',
                    'marginLeft':'873px',
                    'marginTop':'1850px',
                    'background':'#ac0041',
                    'color':'white',
                    'textAlign':'center',
                    'fontFamily':'arial',
                    'fontSize':'16px',
                    'paddingTop':'5px'
                });
                $('.container8').eq(1).css({
                    'width':'397px',
                    'height':'300px',
                    'border':'solid 0px',
                    'position':'absolute',
                    'marginLeft':'873px',
                    'marginTop':'1890px',
                    'background':'#fff',
                    'color':'#545460',
                    'textAlign':'center',
                    'fontFamily':'arial',
                    'fontSize':'12px',
                    'padding':'10px 0px 10px 0px'
                });
                $('.db').css({
                    'width':'170px',
                    'height':'25px',
                    'marginTop':'5px',
                    'float':'left',
                    'marginLeft':'10px',
                    'border':'0',
                    'boxShadow':'0px 0px 0px 1px #F1F1F0',
                    'color':'#ac0041',
                    'paddingLeft':'5px'
                });
                $('.db').eq(1).css({
                    'width':'60px',
                    'marginLeft':'0px'
                });
                $('.imgc6').css({
                    'width':'60px',
                    'height':'60px',
                    'float':'left',
                    'marginLeft':'10px',
                    'marginBottom':'10px'
                });
                $('.imgc6').mouseenter(function(){
                    $('.imgc6').text('<i>htmn</i>');
                });
                $('.inimgc6').css({
                    'boxShadow':'0px 0px 0px 1px #F1F1F0',
                    'width':'280px',
                    'height':'60px',
                    'marginLeft':'80px',
                    'borderRadius':'5px',
                    'textAlign':'left',
                    'paddingLeft':'10px',
                    'color':'#545460',
                    'background':'#F8F8F8'
                });
                $('.lic7,.ac7').css({
                    'listStyle':'circle',
                    'marginLeft':'20px',
                    'color':'#545460',
                    'marginRight':'5px'
                });
                $('.ac7').first().mouseenter(function(){
                    $('.ac7').first().css({
                       'textDecoration':'underline' 
                    });
                });
                $('.ac7').first().mouseleave(function(){
                    $('.ac7').first().css({
                       'textDecoration':'none' 
                    });
                });
                $('.ac7').eq(1).mouseenter(function(){
                    $('.ac7').eq(1).css({
                       'textDecoration':'underline' 
                    });
                });
                $('.ac7').eq(1).mouseleave(function(){
                    $('.ac7').eq(1).css({
                       'textDecoration':'none' 
                    });
                });
                $('.ac7').eq(2).mouseenter(function(){
                    $('.ac7').eq(2).css({
                       'textDecoration':'underline' 
                    });
                });
                $('.ac7').eq(2).mouseleave(function(){
                    $('.ac7').eq(2).css({
                       'textDecoration':'none' 
                    });
                });
                $('.ac7').eq(3).mouseenter(function(){
                    $('.ac7').eq(3).css({
                       'textDecoration':'underline' 
                    });
                });
                $('.ac7').eq(3).mouseleave(function(){
                    $('.ac7').eq(3).css({
                       'textDecoration':'none' 
                    });
                });
                $('.ac7').eq(4).mouseenter(function(){
                    $('.ac7').eq(4).css({
                       'textDecoration':'underline' 
                    });
                });
                $('.ac7').eq(4).mouseleave(function(){
                    $('.ac7').eq(4).css({
                       'textDecoration':'none' 
                    });
                });
                $('.ac7').eq(5).mouseenter(function(){
                    $('.ac7').eq(5).css({
                       'textDecoration':'underline' 
                    });
                });
                $('.ac7').eq(5).mouseleave(function(){
                    $('.ac7').eq(5).css({
                       'textDecoration':'none' 
                    });
                });
                $('.ac7').eq(6).mouseenter(function(){
                    $('.ac7').eq(6).css({
                       'textDecoration':'underline' 
                    });
                });
                $('.ac7').eq(6).mouseleave(function(){
                    $('.ac7').eq(6).css({
                       'textDecoration':'none' 
                    });
                });
                $('.ac7').eq(7).mouseenter(function(){
                    $('.ac7').eq(7).css({
                       'textDecoration':'underline' 
                    });
                });
                $('.ac7').eq(7).mouseleave(function(){
                    $('.ac7').eq(7).css({
                       'textDecoration':'none' 
                    });
                });
                $('.ac7').eq(8).mouseenter(function(){
                    $('.ac7').eq(8).css({
                       'textDecoration':'underline' 
                    });
                });
                $('.ac7').eq(8).mouseleave(function(){
                    $('.ac7').eq(8).css({
                       'textDecoration':'none' 
                    });
                });
                $('.ac7').eq(9).mouseenter(function(){
                    $('.ac7').eq(9).css({
                       'textDecoration':'underline' 
                    });
                });
                $('.ac7').eq(9).mouseleave(function(){
                    $('.ac7').eq(9).css({
                       'textDecoration':'none' 
                    });
                });
                $('.ac7').eq(10).mouseenter(function(){
                    $('.ac7').eq(10).css({
                       'textDecoration':'underline' 
                    });
                });
                $('.ac7').eq(10).mouseleave(function(){
                    $('.ac7').eq(10).css({
                       'textDecoration':'none' 
                    });
                });
                $('.ac7').eq(11).mouseenter(function(){
                    $('.ac7').eq(11).css({
                       'textDecoration':'underline' 
                    });
                });
                $('.ac7').eq(11).mouseleave(function(){
                    $('.ac7').eq(11).css({
                       'textDecoration':'none' 
                    });
                });
                $('.ac7').eq(12).mouseenter(function(){
                    $('.ac7').eq(12).css({
                       'textDecoration':'underline' 
                    });
                });
                $('.ac7').eq(12).mouseleave(function(){
                    $('.ac7').eq(12).css({
                       'textDecoration':'none' 
                    });
                });
                $('.ac7').eq(13).mouseenter(function(){
                    $('.ac7').eq(13).css({
                       'textDecoration':'underline' 
                    });
                });
                $('.ac7').eq(13).mouseleave(function(){
                    $('.ac7').eq(13).css({
                       'textDecoration':'none' 
                    });
                });
                $('.txtinc5').css({
                    'width':'80px',
                    'float':'left',
                    'marginLeft':'10px',
                    'height':'25px',
                    'border':'0',   
                    'boxShadow':'0px 0px 0px 1px #F1F1F0',
                    'color':'#ac0041',
                    'marginTop':'5px',
                    'textAlign':'center',                    
                });
                $('.txtinc5').eq(1).css({
                    'width':'50px',
                    'marginLeft':'0'
                });
                $('.txtinc5').eq(2).css({
                    'width':'50px',
                    'marginLeft':'0'
                });
                $('.style').css({
                    'width':'60px',
                    'height':'25px',
                    'border':'0',
                    'boxShadow':'0px 0px 0px 1px #F1F1F0',
                    'float':'left',
                    'color':'#ac0041',
                    'marginTop':'5px',
                    'fontSize':'12px',
                    'fontFamily':'arial'
                });
        });