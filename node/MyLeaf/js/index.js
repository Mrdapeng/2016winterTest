/**
 * Created by Administrator on 2017/2/14.
 */
/*
* require加载js模块，后面的function
* 是回调函数，在加载完【】里的文件后调用。
*
*
*
* */
require(['./leaf'], function (Leaf) {
var oContainer=document.getElementById('container');
var winWidth=document.documentElement.clientWidth;
    for (var i = 0; i < 4; i++) {
        var iWidth=50+parseInt(Math.random()*51);
        var leaf=new Leaf({
            width: iWidth,//0~1,50-80
            left: parseInt(Math.random() * (winWidth - iWidth)),
            container: oContainer
        });
      leaf.fall();
    }
});