/**
 * Created by Administrator on 2017/2/19.
 */
require(['jquery', 'dialog2'], function ($, Dialog) {
    $('#btn').on("click", function () {
        // dialog.open({
        //     width: 800,
        //     height: 500,
        //     title: '呵呵',
        //     content: 'hjsgdkhag '
        //
        // });
        var dialog = new Dialog();
        dialog.open();
        // dialog.close();
    });


});
