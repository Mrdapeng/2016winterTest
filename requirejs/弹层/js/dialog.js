define(['jquery'], function ($) {

    //向外暴露方法
    return {
        defaultvalue: {
            width: 400,
            height: 300
        },
        open: function (options) {
            $.extend(this.defaultvalue, options);
            var str = '<div class="container">' +
                '<div class="mask">' +
                '<div class="dialog">' +
                '<div class="header">' +
                '<div class="title">' + this.defaultvalue.content + '</div>' +
                '<div id="close" class="close">[x]</div>' +
                '</div>' +
                '<div class="footer">' +
                '<div class="content">' + this.defaultvalue.content+
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
            $('body').append(str);
            $('.dialog').css({

                width: this.defaultvalue.width,
                height: this.defaultvalue.height,
                'margin-left': -this.defaultvalue.width / 2,
                'margin-top': -this.defaultvalue.height / 2

            });
        },
        close: function () {
            $('.close').on('click', function () {
                $('.container').remove();

            });
        }
    }

});