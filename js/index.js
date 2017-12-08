$(function(){
    var words = ['html','css','javascript','python','java','H5C3','angular.js','node.js'];
    var colors = ['green','red','yellow','pink','skyblue','blue','orange','tomato'];
    var directionArr = [0,'-'];
    $('body').click(function(e){
        var radom = Math.floor(Math.random()*7);
        var radomColor = colors[Math.floor(Math.random()*7)];
        var angle = Math.floor(Math.random()*180);
        var direction1 = directionArr[Math.floor(Math.random()*2)];
        var direction2 = directionArr[Math.floor(Math.random()*2)];
        var x = e.pageX;
        var y = e.pageY;
        var left = direction1>=0?direction1+(50+x):x-50;
        var top = direction2>=0?direction2+(50+y):y-50;
        var span = $('.main .words');
        span.html(words[radom]);
        span.css({
            left:x,
            top:y,
            opacity:1,
            marginLeft:0,
            transform:'rotate('+angle+'deg) scale(1)',
            color:radomColor
        });
        span.stop().animate({'opacity':0,left:left,top:top},1000);
        // $('body').html()+=;
        console.log(x,y,left,top);
        
    })
    //轮播图js
    playBox();
    function playBox(){
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
    }

    //tab栏切换变色 
    $('.navbar li a').click(function(e){
        e.preventDefault();
        $(this).parent().addClass('active').siblings().removeClass('active');
    })
})