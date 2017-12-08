$(function () {
    //点击body切换文字动画
    changeWord();

    function changeWord() {
        function Words(obj) {
            this.words = obj.words;
            this.colors = obj.colors;
            this.directionArr = obj.directionArr;
            this.Dom = $(obj.selector);
            this.angle = Math.floor(Math.random() * 180);
            var that = this;
            this.click = $('body').click(function (e) {
                var radom = Math.floor(Math.random() * this.words.length - 1);
                var radomColor = this.colors[Math.floor(Math.random() * this.colors.length - 1)];
                var direction1 = this.directionArr[Math.floor(Math.random() * 2)];
                var direction2 = this.directionArr[Math.floor(Math.random() * 2)];
                var x = e.pageX;
                var y = e.pageY;
                var left = direction1 >= 0 ? direction1 + (50 + x) : x - 50;
                var top = direction2 >= 0 ? direction2 + (50 + y) : y - 50;
                this.Dom.html(this.words[radom]);
                this.Dom.css({
                    left: x,
                    top: y,
                    opacity: 1,
                    marginLeft: 0,
                    transform: 'rotate(' + this.angle + 'deg) scale(1)',
                    color: radomColor
                });
                this.Dom.stop().animate({
                    'opacity': 0,
                    left: left,
                    top: top
                }, 1000);
                // $('body').html()+=;
                // console.log(x,y,left,top);
            }.bind(that))
        }
        var option = {
            words: ['html', 'css', 'javascript', 'python', 'java', 'H5C3', 'angular.js', 'node.js'],
            colors: ['green', 'red', 'yellow', 'pink', 'skyblue', 'blue', 'orange', 'tomato'],
            directionArr: [0, '-'],
            selector: '.main .words'
        }
        new Words(option);
    }

    //轮播图js
    playBox();

    function playBox() {
        var timer = null;
        var index = 0;
        var imgW = $('.main .swiper').width();
        var maxindex = $('.main .swiper .items a').length - 2;
        console.log(maxindex);

        function play() {
            timer = setInterval(function () {
                index++;
                if (index > maxindex) {
                    $('.main .swiper .items').css('marginLeft', 0);
                    index = 1;
                }
                $('.main .swiper .items').animate({
                    marginLeft: (-imgW * index)
                }, 500);
            }, 2000);
        }
        play();
    }

    //tab栏切换变色 
    $('.navbar li a').click(function (e) {
        e.preventDefault();
        $(this).parent().addClass('active').siblings().removeClass('active');
    })
})