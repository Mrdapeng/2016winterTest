$(function () {
    //搜索框
    $("#inputSearch").on("focus", function () {
        if (this.value = this.defaultValue) {
            this.value = "";
        }
    }).on("blur", function () {
        if (this.value == "") {
            this.value = this.defaultValue;
        }
    });
//导航菜单

    $("#nav li").hover(function () {
        $(this).children(".jnNav").show();
    }, function () {
        $(this).children('.jnNav').hide();
    });
    //加hot gif图
    $(".promoted").append('<s class="hot"></s>');
    $("#jnImageroll div a").on("mouseover", function () {
        $(this).addClass("chos").siblings().removeClass("chos");
        $('#JS_imgWrap img').eq($(this).index()).fadeIn().parent().siblings().children().fadeOut();
    });
    tooltip("#jnNoticeInfo li a");
    tooltip(".jnCatainfo a");
    $("#skin li").on("click", function () {
        var skinIndex=$(this).index();
        console.log(skinIndex);
    $(this).addClass("selected").siblings().removeClass("selected");
    $("#nav").attr("class","mainNav skin"+skinIndex);
    $("#jnCatalog h2").attr("class","jnCatalog h2 skin"+skinIndex);
    console.log("mainNav skin"+skinIndex);
    console.log("jnCatalog h2 skin"+skinIndex);
    });

    function setCookie(key,value,day){

        var str = key+"="+value+";";
        if(day){
            var date = new Date();

            date.setDate(date.getDate()+day);

            str+= 'expires='+date;
        }

        document.cookie = str;


    }

    function getCookie(key){
        //'age=18; name=lisi'
        var str = document.cookie;
        var arr = str.split('; ')  //['age=18','name=lisi']

        for(var i=0; i<arr.length; i++){
            var arr2 = arr[i].split('=');  //['name','lisi']

            if(arr2[0] == key){
                return arr2[1];
            }
        }
    }
});