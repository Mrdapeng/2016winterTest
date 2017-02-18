/**
 * Created by Administrator on 2017/2/11.
 */
$(function () {
    // $(".sub-menu").toggle();
    $(".main a").on("click", function () {
        $(this).siblings().children(".sub-menu").toggle();
    });

});