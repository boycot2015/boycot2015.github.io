$(function(){
    var timer = null;
    var index = 0;
    var imgW = $('.main .swiper').width();
    var maxindex = $('.main .swiper .items a').length-2;
    console.log(maxindex);
    
    function play(){
        timer =  setInterval(function(){
            index++;
            if(index>maxindex){
                $('.main .swiper .items').css('marginLeft',0);
                index = 1;
            }
            $('.main .swiper .items').animate({marginLeft:(-imgW*index)},500);
        },2000);
    }
    play();
})