/**
 * Created by Administrator on 2017/1/11.
 */
var oContainer = document.getElementById("container");
var oBigImg = document.getElementById('big-img');
var aBigImgs = oBigImg.getElementsByTagName('img');
var oSmallImg = document.getElementById('small-img');
var aSmallImgs = oSmallImg.getElementsByTagName('img');
var oPrev = document.getElementById('prev');
var oNext = document.getElementById('next');
var oInfo = document.getElementById('info');
var oCurrentPage = document.getElementById('current-page');
var iNow = 0;
var zIndex = 9;
var timer;

//调节图片层级 倒着来
for (var i = 0; i < aBigImgs.length; i++) {

    aBigImgs[i].style.zIndex = aBigImgs.length - 1;
}

/*
*
* 给每个小图片设置透明度，刚开始都设置成0.3，之后将第一个的设置为1，能看到，
*

* */
for (var i = 0; i < aSmallImgs.length; i++) {

    aSmallImgs[i].style.opacity = 0.3;
    aSmallImgs[i].style.filter = "alpha(opacity=30)";

}
aSmallImgs[0].style.opacity = 1;
aSmallImgs[0].style.filter = "alpha(opacity=100)";
/*
* 给左右二个span设置动画，鼠标划入显示，划出隐藏，
*
* */
oPrev.onmouseover = oNext.onmouseover = function () {
    animate(this, {
        opacity: 100
    });
};
oPrev.onmouseout = oNext.onmouseout = function () {
    animate(this, {
        opacity: 0
    });
};
/*
二个按钮的点击事件是一样的，判断是哪个按钮点击的，在判断现在是否超了约定的值，
*
* */
oPrev.onclick = oNext.onclick = function () {

    if (this == oNext) {
        iNow++;
        if (iNow == aBigImgs.length) {
            iNow = 0;
        }
    } else {
        iNow--;
        if (iNow == -1) {
            iNow = aBigImgs.length - 1;
        }
    }
    changeImg();

};

/*
*
* 小图点击与大图对应，
*
* */
for (var i = 0; i < aSmallImgs.length; i++) {
    aSmallImgs[i].index = i;
    aSmallImgs[i].onclick = function () {

        if (iNow != this.index) {
            iNow = this.index;
            changeImg();
        }

    };

}
oContainer.onmouseover = function () {
    clearInterval(timer);
};
oContainer.onmouseout = function () {
    myplay();
};


myplay();


function myplay() {
    timer = setInterval(function () {
        oNext.onclick();
    }, 1000);


}
function changeImg() {

    aBigImgs[iNow].style.opacity = 0;
    aBigImgs[iNow].style.filter = "alpha(opacity=0)";
    aBigImgs[iNow].style.zIndex = zIndex++;
    oInfo.style.zIndex = oPrev.style.zIndex = oNext.style.zIndex = zIndex++;
    animate(aBigImgs[iNow], {
        opacity: 100
    });

    //info里面的信息切换
    oCurrentPage.innerHTML = iNow + 1;

    //小图片所有都透明，当前图片不透明
    for (var i = 0; i < aSmallImgs.length; i++) {
        aSmallImgs[i].style.opacity = 0.3;
        aSmallImgs[i].style.filter = "alpha(opacity=30)";
    }
    aSmallImgs[iNow].style.opacity = 1;
    aSmallImgs[iNow].style.filter = "alpha(opacity=100)";

    //小图片运动规律
    /*
     iNow    移动的距离
     0       0*width
     1       0*width

     2       1*width
     3       2*width
     4       3*width
     5       4*width

     6       4*width
     7       4*width
     * */
    var left = 0;
    if (iNow == 0 || iNow == 1) {
        left = 0;
    } else if (iNow == aSmallImgs.length - 1 || iNow == aSmallImgs.length - 2) {
        left = aSmallImgs.length / 2;//4
    } else {
        left = iNow - 1;
    }
    animate(oSmallImg, {
        left: -left * aSmallImgs[0].offsetWidth
    });

    // console.log(iNow);
}