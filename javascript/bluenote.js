var nrImg=5;
var IntSeconds=4;
function load(){
    nrShown=0;
    Vect=new Array(nrImg + 10);
    Vect[0]=document.getElementById("img1");
    Vect[0].style.visibility="visible";
    document.getElementById("S" + 0).style.visibility="visible";
    for (var i=0;i<nrImg;i++){
        Vect[i]=document.getElementById("img" + (i+1));
        document.getElementById("S" + i).style.visibility="visible";
    }
    document.getElementById("S" + 0).style.background="rgba(225,225,225,.5)";
    document.getElementById("SP" + 0).style.visibility="visible";
    mytime=setInterval(Timer, IntSeconds * 1000);
}
function Timer(){
    nrShown++;
    if(nrShown == nrImg)
        nrShown=0;
    Effect();
}
function next(){
    nrShown++;
    if (nrShown == nrImg)
        nrShown=0;
    Effect();
    clearInterval(mytime);
    mytime=setInterval(Timer, IntSeconds * 1000);
}
function prev(){
    nrShown--;
    if (nrShown == -1)
        nrShown=nrImg -1;
    Effect();
    clearInterval(mytime);
    mytime=setInterval(Timer, IntSeconds * 1000);
}
function satu(){
    nrShown=0;
    Effect();
    clearInterval(mytime);
    mytime=setInterval(Timer, IntSeconds * 1000);
}
function dua(){
    nrShown=1;
    Effect();
    clearInterval(mytime);
    mytime=setInterval(Timer, IntSeconds * 1000);
}
function tiga(){
    nrShown=2;
    Effect();
    clearInterval(mytime);
    mytime=setInterval(Timer, IntSeconds * 1000);
}
function empat(){
    nrShown=3;
    Effect();
    clearInterval(mytime);
    mytime=setInterval(Timer, IntSeconds * 1000);
}
function lima(){
    nrShown=4;
    Effect();
    clearInterval(mytime);
    mytime=setInterval(Timer, IntSeconds * 1000);
}
function Effect(){
    for(var i=0;i<nrImg;i++){
        Vect[i].style.opacity="0";
        Vect[i].style.visibility="hidden";
        document.getElementById("S" + i).style.background="rgba(0,0,0,0.7)";
        document.getElementById("SP" + i).style.visibility="hidden";
    }
        Vect[nrShown].style.opacity="1";
        Vect[nrShown].style.visibility="visible";
        document.getElementById("S" + nrShown).style.background="rgba(225,225,225,.5)";
        document.getElementById("SP" + nrShown).style.visibility="visible";
}
window.setTimeout("waktu()",1000);
function waktu(){
    var a="Senin";
    var b="Selasa";
    var c="Rabu";
    var d="Kamis";
    var e="Jumat";
    var f="Sabtu";
    var g="Minggu";
    var jam= new Date();
    var hari= jam.getDay();
    setTimeout("waktu()",1000);
    if(hari == 1){
        document.getElementById('hari').innerHTML = a;
    }else if(hari == 2){
        document.getElementById('hari').innerHTML = b;
    }else if(hari == 3){
        document.getElementById('hari').innerHTML = c;
    }else if(hari == 4){
        document.getElementById('hari').innerHTML = d;
    }else if(hari == 5){
        document.getElementById('hari').innerHTML = e;
    }else if(hari == 6){
        document.getElementById('hari').innerHTML = f;
    }else{
        document.getElementById('hari').innerHTML = g;
    }
}
window.setTimeout("bulan()",1000);
function bulan(){
    var ja="Januari";    var jul="Juli";    
    var feb="Februari";    var agu="Agustus";
    var mar="Maret";    var sep="September";
    var ap="April";    var ok="Oktober";
    var mei="Mei";    var no="November";
    var jun="Juni";    var des="Desember";
    var tgl=new Date();
    var bulan= tgl.getMonth();
    setTimeout("waktu()",1000);
    if(bulan == 0){        document.getElementById("tanggal").innerHTML=tgl.getDate()+" "+ja+" "+tgl.getFullYear();
    }else if(bulan == 1){
    document.getElementById("tanggal").innerHTML=tgl.getDate()+" "+feb+" "+tgl.getFullYear();
    }else if(bulan == 2){
    document.getElementById("tanggal").innerHTML=tgl.getDate()+" "+mar+" "+tgl.getFullYear();
    }else if(bulan == 3){
    document.getElementById("tanggal").innerHTML=tgl.getDate()+" "+ap+" "+tgl.getFullYear();
    }else if(bulan == 4){
    document.getElementById("tanggal").innerHTML=tgl.getDate()+" "+mei+" "+tgl.getFullYear();
    }else if(bulan == 5){
    document.getElementById("tanggal").innerHTML=tgl.getDate()+" "+jun+" "+tgl.getFullYear();
    }else if(bulan == 6){
    document.getElementById("tanggal").innerHTML=tgl.getDate()+" "+jul+" "+tgl.getFullYear();
    }else if(bulan == 7){
    document.getElementById("tanggal").innerHTML=tgl.getDate()+" "+agu+" "+tgl.getFullYear();
    }else if(bulan == 8){
    document.getElementById("tanggal").innerHTML=tgl.getDate()+" "+sep+" "+tgl.getFullYear();
    }else if(bulan == 9){
    document.getElementById("tanggal").innerHTML=tgl.getDate()+" "+ok+" "+tgl.getFullYear();
    }else if(bulan == 10){
    document.getElementById("tanggal").innerHTML=tgl.getDate()+" "+no+" "+tgl.getFullYear();
    }else{
    document.getElementById("tanggal").innerHTML=tgl.getDate()+" "+des+" "+tgl.getFullYear();
    }
}
$(function(){
    $('*').css({
        'margin':'0',
        'padding':'0'
    });
    $('body').css({
        margin:'0 auto',
        background:'#FAFDFB',
        overflowX:'hidden'
    });
    $('a').css({
        color:'white',
        textDecoration:'none'
    });
   $('header').css({
       'width':'100%',
       'height':'80px',
        background:'#6FC6DC'
   });
    $('.subheader').css({
        'width':'100%',
        'height':'40px',
        'background':'#194661',
        color:'white',
        fontSize:'15px',
        fontFamily:'timeBurner',
        boxShadow:'0px 0px 3px 0px #194661'
    });
    $('.judul').css({
        width:'200px',
        height:'100%',
        border:'solid 0px white',
        fontFamily:'Aventura',
        fontSize:'50px',
        color:'white',
        margin:'0 auto'
    });
    $('.biru').css({
        color:'#194661'
    });
    $('.newspaper').css({
        fontSize:'15px',
        fontFamily:'timeBurner',
        marginTop:'-20px',
        float:'right'
    });
    $('.menu').first().css({
        marginTop:'-7px'
    });
    $('.menu').css({
        listStyle:'none',
        float:'left',
        marginLeft:'20px',
        height:'40px',
        paddingTop:'10px',
        textAlign:'center'
    });
    $('.menu').last().css({
        float:'right',
        padding:'0',
        marginTop:'0px',
        
    });
    $('.menu').eq(1).mouseenter(function(){
        $('.menu').eq(1).css({
            borderBottom:'solid 3px #fff',
            transition:' 0.1s'
        });
    });
    $('.menu').eq(1).mouseleave(function(){
        $('.menu').eq(1).css({
            borderBottom:'0',
        });
    });
    $('.menu').eq(2).mouseenter(function(){
        $('.menu').eq(2).css({
            borderBottom:'solid 3px #fff',
            transition:' 0.1s'
        });
    });
    $('.menu').eq(2).mouseleave(function(){
        $('.menu').eq(2).css({
            borderBottom:'0',
        });
    });
    $('.menu').eq(3).mouseenter(function(){
        $('.menu').eq(3).css({
            borderBottom:'solid 3px #fff',
            transition:' 0.1s'
        });
    });
    $('.menu').eq(3).mouseleave(function(){
        $('.menu').eq(3).css({
            borderBottom:'0',
        });
    });
    $('.menu').eq(4).mouseenter(function(){
        $('.menu').eq(4).css({
            borderBottom:'solid 3px #fff',
            transition:' 0.1s'
        });
    });
    $('.menu').eq(4).mouseleave(function(){
        $('.menu').eq(4).css({
            borderBottom:'0',
        });
    });
    $('.menu').eq(5).mouseenter(function(){
        $('.menu').eq(5).css({
            borderBottom:'solid 3px #fff',
            transition:' 0.1s'
        });
    });
    $('.menu').eq(5).mouseleave(function(){
        $('.menu').eq(5).css({
            borderBottom:'0',
        });
    });
    $('.menu').eq(6).mouseenter(function(){
        $('.menu').eq(6).css({
            borderBottom:'solid 3px #fff',
            transition:' 0.1s'
        });
    });
    $('.menu').eq(6).mouseleave(function(){
        $('.menu').eq(6).css({
            borderBottom:'0',
        });
    });
    $('.menu').eq(7).mouseenter(function(){
        $('.menu').eq(7).css({
            borderBottom:'solid 3px #fff',
            transition:' 0.1s'
        });
    });
    $('.menu').eq(7).mouseleave(function(){
        $('.menu').eq(7).css({
            borderBottom:'0',
        });
    });
    $('.menu').eq(8).mouseenter(function(){
        $('.menu').eq(8).css({
            borderBottom:'solid 3px #fff',
            transition:' 0.1s'
        });
    });
    $('.menu').eq(8).mouseleave(function(){
        $('.menu').eq(8).css({
            borderBottom:'0',
        });
    });
    $('.menu').eq(9).mouseenter(function(){
        $('.menu').eq(9).css({
            borderBottom:'solid 3px #fff',
            transition:' 0.1s'
        });
    });
    $('.menu').eq(9).mouseleave(function(){
        $('.menu').eq(9).css({
            borderBottom:'0',
        });
    });
    $('.menu').eq(10).mouseenter(function(){
        $('.menu').eq(10).css({
            borderBottom:'solid 3px #fff',
            transition:' 0.1s'
        });
    });
    $('.menu').eq(10).mouseleave(function(){
        $('.menu').eq(10).css({
            borderBottom:'0',
        });
        });
    $('.btnhome').css({
        width:'35px',
        height:'35px',
        background:'rgba(0,0,0,0.0)',
        border:'solid 1px white',
        borderRadius:'50%',
        paddingTop:'2px'
    });
    $('.searchtxt').css({
        width:'200px',
        height:'40px',
        border:'0',
        background:'#fff',
        paddingLeft:'10px',
        color:'black',
        fontSize:'14px'
    });
    $('.btncari').css({
        width:'60px',
        height:'40px',
        border:'0',
        marginLeft:'-4px',
        fontSize:'14px',
        background:'#6FC6DC'
    });
    $('.btncari').mouseenter(function(){
        $('.btncari').css({
            background:'#194661',
            transition:'all 0.3s'
        });
    });
    $('.btncari').mouseleave(function(){
        $('.btncari').css({
            background:'#6FC6DC',
        });
    });
    $('.ulsocial').css({        
        top:'0'
    });
    $('.social').css({
        width:'30px',
        height:'30px',
        border:'solid 1px white',
        borderRadius:'50%',
        position:'absolute',
        top:'0',
        fontSize:'12px',
        marginTop:'5px',
        marginLeft:'10px',
        color:'white',
        fontFamily:'timeBurner',
        listStyle:'none',
        paddingTop:'7px',
        paddingLeft:'0px',
        textAlign:'center'
    });
    $('.social').eq(1).css({
        marginLeft:'45px'
    });
    $('.social').eq(2).css({
        marginLeft:'80px'
    });
    $('.social').eq(3).css({
        marginLeft:'115px'
    });
    $('.social').eq(4).css({
        marginLeft:'1185px'
    });
    $('.social').eq(5).css({
        marginLeft:'1220px'
    });
    $('.social').last().css({
        borderRadius:'0',
        width:'100px',
        marginLeft:'1260px',
        border:'0'
    });
    $('.social').eq(0).mouseenter(function(){
        $('.social').eq(0).css({
            background:'#fff',
            transition:'all 0.3s',
            color:'#1C5E8D',
            border:'0'
        });
    });
    $('.social').eq(0).mouseleave(function(){
        $('.social').eq(0).css({
            background:'#6FC6DC',
            color:'white',
            border:'solid 1px white'
        });
    });
    $('.social').eq(1).mouseenter(function(){
        $('.social').eq(1).css({
            background:'#fff',
            transition:'all 0.3s',
            color:'#1C5E8D',
            border:'0'
        });
    });
    $('.social').eq(1).mouseleave(function(){
        $('.social').eq(1).css({
            background:'#6FC6DC',
            color:'white',
            border:'solid 1px white'
        });
    });
    $('.social').eq(2).mouseenter(function(){
        $('.social').eq(2).css({
            background:'#fff',
            transition:'all 0.3s',
            color:'#1C5E8D',
            border:'0'
        });
    });
    $('.social').eq(2).mouseleave(function(){
        $('.social').eq(2).css({
            background:'#6FC6DC',
            color:'white',
            border:'solid 1px white'
        });
    });
    $('.social').eq(3).mouseenter(function(){
        $('.social').eq(3).css({
            background:'#fff',
            transition:'all 0.3s',
            color:'#1C5E8D',
            border:'0'
        });
    });
    $('.social').eq(3).mouseleave(function(){
        $('.social').eq(3).css({
            background:'#6FC6DC',
            color:'white',
            border:'solid 1px white'
        });
    });
    $('.user').css({
        width:'100px',
        height:'80px',
        background:'white',
        borderRadius:'10px 10px 10px 10px',
        position:'absolute',
        marginLeft:'1150px',
        marginTop:'-50px',
        boxShadow:'0px 0px 3px 0px #1C5E8D',
        visibility:'hidden'
    });
    $('.social').eq(4).click(function(){
        $('.user').css({
            visibility:'visible',
            marginTop:'-40px',
            transition:'all 0.5s'
        });
    });
    $('.user').mouseleave(function(){
        $('.user').css({
            visibility:'hidden',
        });
    });
    $('.user').mouseenter(function(){
        $('.user').css({
            visibility:'visible'
        });
    });
    $('.puser').css({
        width:'100%',
        height:'30px',
        background:'#fff',
        marginTop:'10px',
        fontSize:'15px',
        fontFamily:'timeBurner',
        paddingTop:'5px',
        paddingLeft:'5px',
        color:'black'
    });
    $('.puser').eq(1).css({
        marginTop:'0px'
    });
    $('.puser').eq(3).css({
        marginTop:'0px'
    });
    $('.puser').eq(0).mouseenter(function(){
        $('.puser').eq(0).css({
            background:'#eee',
            transition:'all 0.3s'
        });
    });
    $('.puser').eq(0).mouseleave(function(){
        $('.puser').eq(0).css({
            background:'#fff',
        });
    });
    $('.puser').eq(1).mouseenter(function(){
        $('.puser').eq(1).css({
            background:'#eee',
            transition:'all 0.3s'
        });
    });
    $('.puser').eq(1).mouseleave(function(){
        $('.puser').eq(1).css({
            background:'#fff',
        });
    });
    $('.puser').eq(2).mouseenter(function(){
        $('.puser').eq(2).css({
            background:'#eee',
            transition:'all 0.3s'
        });
    });
    $('.puser').eq(2).mouseleave(function(){
        $('.puser').eq(2).css({
            background:'#fff',
        });
    });
    $('.puser').eq(3).mouseenter(function(){
        $('.puser').eq(3).css({
            background:'#eee',
            transition:'all 0.3s'
        });
    });
    $('.puser').eq(3).mouseleave(function(){
        $('.puser').eq(3).css({
            background:'#fff',
        });
    });
    $('.puser').eq(4).mouseenter(function(){
        $('.puser').eq(4).css({
            background:'#eee',
            transition:'all 0.3s'
        });
    });
    $('.puser').eq(4).mouseleave(function(){
        $('.puser').eq(4).css({
            background:'#fff',
        });
    });
    $('.puser').eq(5).mouseenter(function(){
        $('.puser').eq(5).css({
            background:'#eee',
            transition:'all 0.3s'
        });
    });
    $('.puser').eq(5).mouseleave(function(){
        $('.puser').eq(5).css({
            background:'#fff',
        });
    });
    $('.puser').eq(6).mouseenter(function(){
        $('.puser').eq(6).css({
            background:'#eee',
            transition:'all 0.3s'
        });
    });
    $('.puser').eq(6).mouseleave(function(){
        $('.puser').eq(6).css({
            background:'#fff',
        });
    });
    $('.puser').eq(7).mouseenter(function(){
        $('.puser').eq(7).css({
            background:'#eee',
            transition:'all 0.3s'
        });
    });
    $('.puser').eq(7).mouseleave(function(){
        $('.puser').eq(7).css({
            background:'#fff',
        });
    });
    $('.puser').eq(8).mouseenter(function(){
        $('.puser').eq(8).css({
            background:'#eee',
            transition:'all 0.3s'
        });
    });
    $('.puser').eq(8).mouseleave(function(){
        $('.puser').eq(8).css({
            background:'#fff',
        });
    });
    $('.puser').eq(9).mouseenter(function(){
        $('.puser').eq(9).css({
            background:'#eee',
            transition:'all 0.3s'
        });
    });
    $('.puser').eq(9).mouseleave(function(){
        $('.puser').eq(9).css({
            background:'#fff',
        });
    });
    $('.puser').eq(10).mouseenter(function(){
        $('.puser').eq(10).css({
            background:'#eee',
            transition:'all 0.3s'
        });
    });
    $('.puser').eq(10).mouseleave(function(){
        $('.puser').eq(10).css({
            background:'#fff',
        });
    });
    $('.social').eq(5).click(function(){
        $('.setting').css({
            visibility:'visible',
            marginTop:'-40px',
            transition:'all 0.5s'
        });
    });
    $('.setting').css({
        width:'100px',
        height:'80px',
        background:'white',
        borderRadius:'10px 10px 10px 10px',
        position:'absolute',
        marginLeft:'1200px',
        marginTop:'-50px',
        boxShadow:'0px 0px 3px 0px #1C5E8D',
        visibility:'hidden'
    });
    $('.setting').mouseleave(function(){
        $('.setting').css({
            visibility:'hidden',
        });
    });
    $('.setting').mouseenter(function(){
        $('.setting').css({
            visibility:'visible'
        });
    });
    $('.social').eq(6).click(function(){
        $('.edition').css({
            visibility:'visible',
            marginTop:'-40px',
            transition:'all 0.5s',
            zIndex:'1000'
        });
    });
    $('.edition').css({
        width:'100px',
        height:'300px',
        background:'white',
        borderRadius:'10px 10px 10px 10px',
        position:'absolute',
        marginLeft:'1250px',
        marginTop:'-50px',
        boxShadow:'0px 0px 3px 0px #1C5E8D',
        visibility:'hidden'
    });
    $('.edition').mouseleave(function(){
        $('.edition').css({
            visibility:'hidden',
        });
    });
    $('.edition').mouseenter(function(){
        $('.edition').css({
            visibility:'visible'
        });
    });
    $('#slider').css({
        width:'auto',
        height:'auto',
        
    });
    $('.navli').css({
        listStyle:'none',
        width:'20px',
        height:'20px',
        background:'rgba(0,0,0,0.7)',
        borderRadius:'50%',
        position:'absolute',
        marginLeft:'600px',
        marginTop:'160px',
        border:'solid 0px white'
    });
    $('#nav').css({
       marginLeft:'25px' ,
        marginTop:'120px'
    });
    $('.navli').eq(1).css({
        marginLeft:'620px'
    });
    $('.navli').eq(2).css({
        marginLeft:'640px'
    });
    $('.navli').eq(3).css({
        marginLeft:'660px'
    });
    $('.navli').eq(4).css({
        marginLeft:'680px'
    });
    $('#left').css({
        width:'30px',
        height:'30px',
        borderRadius:'50%',
        border:'none',
        background:'rgba(0,0,0,0.7)',
        color:'white',
        marginLeft:'640px',
        position:'absolute',
        marginTop:'190px',
        border:'solid 0px white',
        paddingTop:'2px'
    });
    $('#right').css({
        width:'30px',
        height:'30px',
        borderRadius:'50%',
        border:'none',
        background:'rgba(0,0,0,0.7)',
        color:'white',
        marginLeft:'685px',
        position:'absolute',
        marginTop:'190px',
        border:'solid 0px white'
    });
    $('#navbottom').css({
        width:'700px',
        height:'300px',
        background:'rgba(0,50,100,.0)',
        position:'absolute',
        marginLeft:'320px',
        marginTop:'50px',
        borderRadius:'5px'
    });
    $('.espe').css({
        position:'absolute',
        color:'white',
        width:'680px',
        height:'210px',
        border:'solid 0px white',
        marginLeft:'10px',
        marginTop:'10px',
        borderRadius:'5px',
        paddingLeft:'10px',
        paddingTop:'5px',
        background:'rgba(0,50,100,.5)',
        textAlign:'center',
        fontFamily:'timeBurner',
        fontSize:'16px'
    });
    $('.atjeh').css({
        fontFamily:'Blessed Day',
        fontSize:'60px'
    });
    $('.container').css({
        width:'1200px',
        height:'500px',
        border:'solid 1px black',
        position:'absolute',
        marginTop:'290px',
        marginLeft:'80px',
    });
    $('.headlines').css({
        width:'200px',
        height:'600px',
        background:'#6FC6DC',
        borderTop:'solid 5px #194661',
        color:'black',
        fontFamily:'timeBurner',
        fontSize:'25px',
        paddingLeft:'10px',
        position:'absolute'
    });
    $('#hari').css({
        fontSize:'17px',
        marginTop:'-10px',
        position:'absolute',
        fontFamily:'calibri',
        color:'white'
    });
    $('#tanggal').css({
        fontSize:'17px',
        marginTop:'-25px',
        position:'absolute',
        fontFamily:'calibri',
        color:'white'
    });
    $('.mainheadline').css({
        width:'auto',
        height:'auto',
        border:'solid 1px black',
        color:'white',
        fontFamily:'timeBurner',
        fontSize:'25px',
        paddingLeft:'10px',
        marginLeft:'210px'
    });
    $('.firstheadline').css({
        width:'700px',
        height:'300px',
        background:'#6FC6DC',
        borderTop:'solid 5px #194661',
        color:'white',
        fontFamily:'timeBurner',
        fontSize:'25px',
        paddingLeft:'10px',
        position:'absolute',
        marginLeft:'-10px'
    });
    $('.insthead').css({
        width:'200px',
        height:'290px',
        border:'solid 0px black',
        position:'absolute',
        marginLeft:'-10px',
        fontSize:'13px',
        fontFamily:'arial',
        paddingLeft:'5px'
    });
    $('.title').css({
        fontSize:'17px',
        fontFamily:'timeBurner',
        fontWeight:'bold',
        color:'black'
    });
    $('.imgsthead').css({
        width:'500px',
        height:'100%',
        float:'right'
    });
    $('.garis').css({
        width:'5px',
        height:'300px',
        background:'#194661',
        marginLeft:'700px',
        position:'absolute'
    });
    $('.secheadline').css({
        width:'260px',
        height:'145px',
        background:'#6FC6DC',
        marginLeft:'715px',
        borderTop:'solid 5px #194661',
        marginBottom:'10px'
    });
    $('.secheadline').eq(1).css({
        marginBottom:'0'
    });
    $('.imgsecheadline').css({
        width:'100%',
        height:'100%'
    });
    $('.ketsechead').css({
        width:'260px',
        height:'50px',
        position:'absolute',
        background:'rgba(0,50,100,.5)',
        marginTop:'95px',
        top:'0',
        fontSize:'15px',
        textAlign:'center'
    });
    $('.btnplay').css({
        width:'30px',
        height:'30px',
        borderRadius:'50%',
        border:'none',
        background:'rgba(0,50,100,.5)',
        color:'white',
        position:'absolute',
        border:'solid 0px white',
        fontSize:'17px',
        paddingTop:'5px',
        paddingLeft:'0px',
        marginLeft:'-145px',
        marginTop:'50px'
    });
    $('.secmainheadline').css({
        width:'100px',
        height:'50px',
        border:'solid 1px black',
        background:'blue',
        position:'absolute',
        marginLeft:'220px'
    });
});