            var nrImg = 3;
            var IntSeconds = 4;
            function load(){
                nrShown = 0;
                Vect = new Array(nrImg + 10);
                Vect[0] = document.getElementById("img1");
                Vect[0].style.visibility = "visible";
                for (var i = 1; i < nrImg; i++)
                    {
                        Vect[i] = document.getElementById("img"+(i + 1));
                    }
                mytime = setInterval(Timer, IntSeconds * 1000);
            }
            function Timer(){
                nrShown++;
                if (nrShown == nrImg)
                    nrShown = 0;
                Effect();
            }
            /*function next(){
                nrShown++;
                if (nrShown == nrImg)
                    nrShown = 0;
                Effect();
                clearInterval(myTime);
                myTime = setInterval(Timer, IntSecond * 1000);
            }
            function prev(){
                nrShown--;
                if (nrShown == -1)
                    nrShown = nrImg -1 ;
                Effect();
                clearInterval(myTime);
                myTime = setInterval(Timer, IntSecond * 1000);
            }*/
            function Effect(){
                for (var i=0;i<nrImg;i++)
                    {
                        Vect[i].style.opacity = "0";
                        Vect[i].style.visibility = "hidden";
                    }
                Vect[nrShown].style.opacity = "1";
                Vect[nrShown].style.visibility = "visible";
            }
$(function(){
    $('*').css({
        'margin':'0',
        'padding':'0'
    });
   $('body').css({
       'margin':'0 auto',
       'background':'#744D26',
       'height':'auto'
   }); 
    $('.text-slider').css({
        'width':'100%',
        'height':'695px',
        'background':'rgba(000,000,000,.5)',
        'position':'absolute'
    });
    $('.isitextslider').css({
        'width':'auto',
        'height':'auto',
        'border':'solid 0px white',
        'marginLeft':'1040px',
        'borderRadius':'5px',
        'marginTop':'50px',
        'marginRight':'20px',
        'position':'fixed'
    });
    $('.btn-info').css({
        'width':'70px',
        'height':'70px',
        'background':'rgba(0,0,0,.0)',
        'border':'0',
        'boxShadow':'0px 0px 0px 0px',
        'borderRadius':'50%',
        'border':'solid 1px white',
        'marginLeft':'230px',
        'marginBottom':'0px',
        'marginTop':'10px'
    });
    $('.search').css({
       'width':'300px',
        'height':'50px',
        'border':'solid 0px white'
    });
    $('.search').slideUp();
    $('.btn-info').eq(4).click(function(){
        $('.search').slideToggle(1000);
        $('.list').slideUp(1000);
        $('.rate').slideUp(1000);
        $('.others').slideUp(1000);
    });
    $('.txtsearch').css({
        'width':'250px',
        'height':'30px',
        'border':'0',
        'paddingLeft':'15px',
        'borderRadius':'20px',
        'marginLeft':'45px',
        'fontFamily':'arial',
        'fontSize':'13px',
        'marginTop':'7px'
    });
    $('.btn-search').css({
        'width':'30px',
        'height':'30px',
        'border':'0',
        'borderRadius':'20px',
        'background':'white',
        'marginLeft':'-40px',
        'marginTop':'-10px'
    });
    $('.list').css({
        'width':'300px',
        'height':'50px',
        'border':'solid 0px white',
        'marginTop':'10px'
    });
    $('.rate').css({
        'width':'300px',
        'height':'50px',
        'border':'solid 0px white',
        'marginTop':'10px'
    });
    $('.others').css({
        'width':'300px',
        'height':'50px',
        'border':'solid 0px white',
        'marginTop':'10px'
    });
    $('.list').slideUp();
    $('.btn-list').css({
        'width':'50px',
        'height':'50px',
        'border':'0',
        'borderRadius':'50%',
        'background':'white',
        'marginLeft':'0px',
        'marginTop':'0px',
        'float':'right',
    });
    $('.btn-info').eq(0).click(function(){
        $('.list').slideUp(1000);
        $('.rate').slideUp(1000);
        $('.others').slideUp(1000);
        $('.search').slideUp(1000);
        $('.subusers').slideUp(1000);
    });
    $('.btn-info').eq(1).click(function(){
        $('.list').slideToggle(1000);
        $('.rate').slideUp(1000);
        $('.others').slideUp(1000);
        $('.search').slideUp(1000);
    });
    $('.btn-info').eq(1).css({
       'marginBottom':'0px' 
    });
    $('.btn-list').eq(1).css({
        'marginRight':'0px'
    });
    $('.btn-list').css({
        'marginRight':'10px'
    });
    $('.rate').slideUp();
   $('.btn-info').eq(2).click(function(){
       $('.rate').slideToggle(1000);
       $('.list').slideUp(1000);
       $('.others').slideUp(1000);
       $('.search').slideUp(1000);
   }); 
    $('.others').slideUp();
    $('.btn-info').eq(3).click(function(){
       $('.others').slideToggle(1000);
       $('.list').slideUp(1000);
       $('.rate').slideUp(1000);
        $('.search').slideUp(1000);
   }); 
    
    $('.usersmenu').css({
        'width':'500px',
        'height':'auto',
        'border':'solid 0px white'
    });
    $('.btn-info').eq(5).click(function(){
        $('.subusers').slideToggle(1000);
    });
    $('.btn-info').eq(5).css({
       'margin':'0'
    });
    $('.subusers').css({
        'width':'350px',
        'height':'50px',
        'border':'solid 0px white',
        'marginTop':'-60px',
        'marginLeft':'80px',
        'position':'absolute'
    });
    $('.subusers').slideUp();
    $('.btn-subusers').css({
        'width':'50px',
        'height':'50px',
        'border':'0',
        'borderRadius':'50%',
        'background':'white',
        'marginRight':'10px',
        'marginTop':'0px',
        'float':'left',
    });
    $('.btn-subusers').eq(0).css({
        'marginLeft':'7px'
    });
    $('.btn-info').eq(0).mouseenter(function(){
        $('.btn-info').eq(0).css({
            'background':'rgba(0,0,0,0.50)'
        });
    });
    $('.btn-info').eq(0).mouseleave(function(){
        $('.btn-info').eq(0).css({
            'background':'rgba(000,000,000,.0)',
            'transition':'all 0.5s'
        });
    });
    $('.btn-info').eq(1).mouseenter(function(){
        $('.btn-info').eq(1).css({
            'background':'rgba(0,0,0,0.50)'
        });
    });
    $('.btn-info').eq(1).mouseleave(function(){
        $('.btn-info').eq(1).css({
            'background':'rgba(000,000,000,.0)',
            'transition':'all 0.5s'
        });
    });
    $('.btn-info').eq(2).mouseenter(function(){
        $('.btn-info').eq(2).css({
            'background':'rgba(0,0,0,0.50)'
        });
    });
    $('.btn-info').eq(2).mouseleave(function(){
        $('.btn-info').eq(2).css({
            'background':'rgba(000,000,000,.0)',
            'transition':'all 0.5s'
        });
    });
    $('.btn-info').eq(3).mouseenter(function(){
        $('.btn-info').eq(3).css({
            'background':'rgba(0,0,0,0.50)'
        });
    });
    $('.btn-info').eq(3).mouseleave(function(){
        $('.btn-info').eq(3).css({
            'background':'rgba(000,000,000,.0)',
            'transition':'all 0.5s'
        });
    });
    $('.btn-info').eq(4).mouseenter(function(){
        $('.btn-info').eq(4).css({
            'background':'rgba(0,0,0,0.50)'
        });
    });
    $('.btn-info').eq(4).mouseleave(function(){
        $('.btn-info').eq(4).css({
            'background':'rgba(000,000,000,.0)',
            'transition':'all 0.5s'
        });
    });
    $('.btn-info').eq(5).mouseenter(function(){
        $('.btn-info').eq(5).css({
            'background':'rgba(0,0,0,0.50)'
        });
    });
    $('.btn-info').eq(5).mouseleave(function(){
        $('.btn-info').eq(5).css({
            'background':'rgba(000,000,000,.0)',
            'transition':'all 0.5s'
        });
    });
    $('.banner').css({
        'width':'700px',
        'height':'300px',
        'position':'absolute',
        'border':'solid 1px white',
        'marginTop':'10px',
        'borderRadius':'20px',
        'marginLeft':'325px'
    });
    $('.bsatu').css({
        'color':'white',
        'fontFamily':'Blessed Day',
        'fontSize':'100px',
        'textAlign':'center'
    });
    $('.bdua').css({
        'color':'white',
        'fontFamily':'timeburner',
        'fontSize':'20px',
        'textAlign':'center',
        'marginTop':'-30px'
    });
    $('.underbenner').css({
        'width':'700px',
        'height':'50px',
        'position':'absolute',
        'border':'solid 1px white',
        'marginTop':'320px',
        'borderRadius':'20px',
        'marginLeft':'325px',
        'fontFamily':'Blessed Day',
        'fontSize':'50px',
        'color':'white',
        'textAlign':'center'
    });
    $('.punderbenner').css({
        'marginTop':'-10px'
    });
    $('.promotion').css({
        'width':'220px',
        'height':'200px',
        'border':'solid 1px white',
        'position':'absolute',
        'marginTop':'380px',
        'borderRadius':'20px',
        'marginLeft':'325px'
    });
    $('.promotion').eq(1).css({
        'marginLeft':'563px'
    });
    $('.promotion').eq(2).css({
        'marginLeft':'800px'
    });
    $('.img-promo').css({
        'width':'200px',
        'height':'180px',
        'margin':'10px',
        'borderRadius':'10px',
        'boxShadow':'0px 0px 0px 0px white'
    });
    $('a').css({
        'color':'white'
    });
    $('.price').css({
        'position':'absolute',
        'width':'150px',
        'height':'50px',
        'background':'rgba(000,000,000,.5)',
        'marginTop':'-110px',
        'color':'white',
        'fontSize':'18px',
        'fontFamily':'timeBurner', 
        'textAlign':'center'
    });
    $('.order').css({
        'marginTop':'-50px',
        'height':'30px',
        'width':'150px',
        'paddingTop':'5px',
        'background':'rgba(000,000,000,.5)',
        'position':'absolute',
        'color':'white',
        'fontSize':'18px',
        'fontFamily':'timeBurner', 
        'textAlign':'center'
    });
    $('.order').eq(0).mouseenter(function(){
        $('.order').eq(0).css({
        'background':'rgba(000,000,000,.9)',
        });
    });
    $('.order').eq(0).mouseleave(function(){
        $('.order').eq(0).css({
        'background':'rgba(000,000,000,.5)',
        'transition':'all 0.5s'
        });
    });
    $('.order').eq(1).mouseenter(function(){
        $('.order').eq(1).css({
        'background':'rgba(000,000,000,.9)',
        });
    });
    $('.order').eq(1).mouseleave(function(){
        $('.order').eq(1).css({
        'background':'rgba(000,000,000,.5)',
        'transition':'all 0.5s'
        });
    });
    $('.order').eq(2).mouseenter(function(){
        $('.order').eq(2).css({
        'background':'rgba(000,000,000,.9)',
        });
    });
    $('.order').eq(2).mouseleave(function(){
        $('.order').eq(2).css({
        'background':'rgba(000,000,000,.5)',
        'transition':'all 0.5s'
        });
    });
    $('.btn-danger').css({
        'width':'50px',
        'height':'50px',
        'position':'absolute',
        'border':'0',
        'borderRadius':'50%',
        'border':'solid 1px white',
        'marginTop':'460px',
        'marginLeft':'250px',
        'background':'rgba(0,0,0,0.0)'
    });
    $('.btn-danger').eq(1).css({
        'marginLeft':'1050px'
    });
    $('.btn-danger').first().mouseenter(function(){
        $('.btn-danger').first().css({
            'background':'rgba(000,000,000,.9)',
            'transition':'all 0.5s'
        });
    });
    $('.btn-danger').first().mouseleave(function(){
        $('.btn-danger').first().css({
            'background':'rgba(000,000,000,.0)',
            'transition':'all 0.5s'
        });
    });
    $('.btn-danger').last().mouseenter(function(){
        $('.btn-danger').last().css({
            'background':'rgba(000,000,000,.9)',
            'transition':'all 0.5s'
        });
    });
    $('.btn-danger').last().mouseleave(function(){
        $('.btn-danger').last().css({
            'background':'rgba(000,000,000,.0)',
            'transition':'all 0.5s'
        });
    });
    $('.copyright').css({
        'width':'700px',
        'height':'30px',
        'color':'white',
        'fontFamily':'timeBurner',
        'fontSize':'13px',
        'border':'solid 1px white',
        'marginTop':'590px',
        'marginLeft':'325px',
        'textAlign':'center',
        'borderRadius':'20px',
        'paddingTop':'7px'
    });
});