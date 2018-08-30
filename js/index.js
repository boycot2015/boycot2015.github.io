$(function () {
    //点击body切换文字动画
    changeWord();

    function changeWord() {
        function Words(obj) {
            this.words = obj.words;
            this.colors = obj.colors;
            this.Dom = $(obj.selector);
            var that = this;
            this.click = $('body').click(function (e) {
                var angel = Math.floor(Math.random() * 360);            
                var radom = Math.floor(Math.random() * this.words.length - 1);
                var radomColor = this.colors[Math.floor(Math.random() * this.colors.length - 1)];
                var direction1 = '';
                var direction2 = '';
                direction1 = angel>90&&angel<270?'-':0;
                direction2 = angel>0&&angel<180?'-':0;
                var x = e.pageX;
                var y = e.pageY;
                var left = direction1 >= 0 ? direction1 + (50 + x) : x - 50;
                var top = direction2 >= 0 ? direction2 + (50 + y) : y - 50;
                this.Dom.html(this.words[radom]);
                this.Dom.css({
                    left: x,
                    top: y,
                    display:'block',
                    opacity: 1,
                    transform: 'rotate(' + angel + 'deg) scale(1.5)',
                    color: radomColor
                });
                this.Dom.stop().animate({
                    'opacity': 0,
                    left: left,
                    top: top
                }, 1000,function(){                    
                    $(this).css('display','none');
                });
                
                // $('body').html()+=;
                // console.log(x,y,left,top);
            }.bind(that))
        }
        var option = {
            words: ['html', 'css', 'javascript', 'python', 
            'java', 'H5C3', 'angular.js', 'node.js','handler',
            'processor','desktop',' exceed',
            ' layout',' suggest','	convenient'],
            colors: ['green', 'red', 'yellow', 'pink', 'skyblue', 'blue', 'orange', 'tomato'],
            directionArr: [0, '-'],
            selector: '.words'
        }
        new Words(option);
    }

    //轮播图js
    playBox();

    function playBox() {
        var timer = null;
        var index = 0;
        var imgW = $('.main .swiper').width();
        var maxindex = $('.main .swiper .items a').length - 4;
        // console.log(maxindex);

        function play() {
            timer = setInterval(function () {
                index++;
                if (index > maxindex) {
                    index=0;
                    // $('.main .swiper .items').css('marginLeft', 0);
                    // index = 1;
                }
                $('.main .swiper .items').animate({
                    marginLeft: (-imgW * index)
                }, 500);
            }, 3000);
        }
        play();
    }

    //tab栏切换变色 
    $('.navbar li a').click(function (e) {
        e.preventDefault();
        var idx = $(this).parent().index();
        // $('body').click(null);
        $(this).parent().addClass('active').siblings().removeClass('active');
        $('.main .slide_box').animate({marginLeft:-idx*$('.main').width()});
    })

    //tab栏切换
    jQuery(document).ready(function(){
        if( $('.cd-stretchy-nav').length > 0 ) {
            var stretchyNavs = $('.cd-stretchy-nav');
            
            stretchyNavs.each(function(){
                var stretchyNav = $(this),
                    stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');
                
                stretchyNavTrigger.on('click', function(event){
                    event.preventDefault();
                    stretchyNav.toggleClass('nav-is-visible');
                });
            });
            $(document).on('click', function(event){
                ( !$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span') ) && stretchyNavs.removeClass('nav-is-visible');
            });
        }
    });
})