$(function(){
    var timer = null;
    var index = 0;
    var imgW = $('.main .swiper').width();
    function play(){
        timer =  setInterval(function(){
            index++;
            if(index>3){
                $('.main .swiper .items').css('marginLeft',0);
                index = 1;
            }
            $('.main .swiper .items').animate({marginLeft:(-imgW*index)},500);
        },2000);
    }
    play();
})