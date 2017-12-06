$(function(){
    var timer = null;
    var index = 0;
    function play(){
        var imgW = $('.main .swiper').width();
        timer =  setInterval(function(){
            index++;
            console.log(imgW);          
            if(index>3){
                $('.main .swiper .items').css('marginLeft',0);
                index = 1;
            }
            $('.main .swiper .items').animate({marginLeft:(-imgW*index)},500);
        },2000);
    }
    play();
})