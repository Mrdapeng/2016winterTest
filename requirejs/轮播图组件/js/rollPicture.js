/**
 * Created by Administrator on 2017/2/20.
 */
define(['jquery'], function ($) {
    function RollPicture() {
        this.defaultVal = {
            buttonStyle: 'square',
            speed: 800
        };
        this.$container = $('<div class="carousel-container"></div>');
        this.$container = $('<div class="carousel-container"></div>');
        this.$content = $('<div class="carousel-content"></div>');
        this.$tab = $('<ul class="carousel-tab"></ul>');
        this.$arrow = $('<div class="carousel-arrow"></div>');
        this.$prev = $('<span class="carousel-prev">&lt;</span>');
        this.$next = $('<span class="carousel-next">&gt;</span>');
    }

    RollPicture.prototype.init = function (Options) {

        $.extend(this.defaultVal, Options);
        this.$container.append(this.$content).append(this.$tab).append(this.$arrow);
        for (var i = 0; i < this.defaultVal.imgData.length; i++) {
            this.$content.append('<img class= "' + (i == 0 ? 'selected' : '') + '" src="' + this.defaultVal.imgData[i] + '">')
            this.$tab.append('<li class="' + (i == 0 ? 'selected' : '') + '">' + (i + 1) + '</li>');

        }
        this.$arrow.append(this.$prev).append(this.$next);
        $(this.defaultVal.selector).append(this.$container);

    };

    return RollPicture;
});