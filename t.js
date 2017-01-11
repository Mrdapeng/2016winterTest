/**
 * Created by Administrator on 2017/1/8.
 */
var oScrollBtn = document.getElementById("scroll-btn"),
    oScrollBar = document.getElementById("scroll-bar"),
    oContent = document.getElementById("content"),
    oContainer = document.getElementById("container");
oScrollBtn.onmousedown = function(e){
    e = e || window.event;
    var iDisY = e.clientY - oScrollBtn.offsetTop;
    document.onmousemove = function(e){
        e = e || window.event;
        var top = e.clientY - iDisY;
        if(top < 0){
            top = 0;
        }
        if(top > oScrollBar.offsetHeight - oScrollBtn.offsetHeight){
            top = oScrollBar.offsetHeight - oScrollBtn.offsetHeight;
        }
        oScrollBtn.style.top = top + "px";
        var fScale = top/(oScrollBar.offsetHeight - oScrollBtn.offsetHeight);
        oContent.style.top = -(oContent.offsetHeight - oContainer.offsetHeight) * fScale + "px";
        return false;
    }
    document.onmouseup = function(){
        document.onmousemove = null;
    };
};