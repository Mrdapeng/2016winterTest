/**
 * Created by Administrator on 2017/2/20.
 */
require(['jquery', 'rollPicture'], function ($, RollPicture) {


    var roll = new RollPicture();

    roll.init({
        selector: '#content1',
        buttonStyle: 'circle',
        speed: '400',
        imgData: ['img/1.jpg', 'img/2.jpg', 'img/3.jpg','img/4.jpg']
    });
});