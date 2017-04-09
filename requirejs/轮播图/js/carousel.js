/**
 * Created by apple on 17/2/20.
 */
define(['jquery'], function ($) {
    //引入jquery后执行函数
    /*
     *
     * 大写的Carousel是一个类，
     * 设置他的默认属性：this.xx(){
     *
     *
     * }
     * 将普通的dom对象通过$()变成jquery对象
     * 之后逐步插入组装
     *
     *
     *
     * */
    function Carousel() {
        this.defaultVal = {
            buttonStyle: 'square',
            speed: 800,
        }
        this.$container = $('<div class="carousel-container"></div>');
        this.$content = $('<div class="carousel-content"></div>');
        this.$tab = $('<ul class="carousel-tab"></ul>');
        this.$arrow = $('<div class="carousel-arrow"></div>');
        this.$prev = $('<span class="carousel-prev">&lt;</span>');
        this.$next = $('<span class="carousel-next">&gt;</span>');

    }

    Carousel.prototype.init = function (options) {
        $.extend(this.defaultVal, options);
        var _this = this;
        var iNow = 0;
        this.$container.append(this.$content).append(this.$tab).append(this.$arrow);
        //插图片

        for (var i = 0; i < this.defaultVal.imgData.length; i++) {
            /*var imgClass = '';
             if(i == 0){
             imgClass = 'selected';
             }
             imgClass = i == 0?'selected':'';*/
            this.$content.append('<img class="' + (i == 0 ? 'selected' : '') + '" src="' + this.defaultVal.imgData[i] + '"/>');
            this.$tab.append('<li class="' + (i == 0 ? 'selected' : '') + '">' + (i + 1) + '</li>');
        }


        this.$arrow.append(this.$prev).append(this.$next);

        $(this.defaultVal.selector).append(this.$container);
        $('li', this.$tab).on('click', function () {

        });
        function changeImg(index) {

            $('li', _this.$tab).eq(index).addClass('selected').siblings().removeClass('selected');
            $('img', _this.$content).eq(index).addClass('selected').siblings().removeClass('selected');
        }

        this.$prev.on('click', function () {
            iNow--;
            if (iNow == -1) {
                iNow == _this.defaultVal.imgData.length - 1;
            }
            changeImg(iNow);
        });
        this.$next.on('click', function () {
            iNow++;
            if (iNow == _this.defaultVal.imgData.length) {
                iNow = 0;
            }
            changeImg(iNow);
        });

        var timer;

        function run() {
            timer = setInterval(function () {
                _this.$next.trigger('click');

            }, _this.defaultVal.speed);
        }

        run();
        this.$container.hover(function () {
            clearInterval(timer);
        }, function () {
            run();
        })

    };


    return Carousel;
});