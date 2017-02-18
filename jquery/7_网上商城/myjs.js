/**
 * Created by Administrator on 2017/2/12.
 */

$(function () {

    // var uls = document.getElementById('uls');
    // var as=uls.getElementsByTagName("a");
    // for (var i = 0; i < as.length; i++) {
    //     as[i].num = i;
    // }
    // for (var i = 0; i < as.length; i++) {
    //    console.log(as[i].num);
    // }

    // $(".ad-tab li a ").on("mouseover", function () {
    //     $(".role-ad img").eq($(this).index()).fadeIn().parent().siblings().children().fadeOut();
    //    console.log($(this).index());
    // });
    var index = 0;
    var timer;
    $(".ad-tab li ").on("click", function () {

        // console.log($(this).index());
        $(".uls li").eq($(this).index()).css("display", "block").siblings().hide();
        $(this).children().addClass("select").parent().siblings().children().removeClass("select");
        // console.log($(".role-ad img").eq($(this).index()).index());

    });
    run();

    function run() {
        timer = setInterval(function () {
            index++;
            if (index == $(".ad-tab li").size()) {

                index = 0;
            }
            $(".ad-tab li").eq(index).trigger("click");
        }, 1000);
    }

    $(".content-left").hover(function () {
        clearInterval(timer)
    }, function () {
        run();
    });


    $("#input").on("focus", function () {

        if (this.value == this.defaultValue) {
            this.value = "";
        }

    }).on("blur", function () {
        if (this.value == "") {
            this.value = this.defaultValue;
        }
    });
    var octbox = document.getElementById("ctbox");
    var aDivs = octbox.getElementsByTagName("div");
    for (var i = 0; i < aDivs.length; i++) {
        aDivs[i].num = i;
    }
    $(".tab-id li").hover(function () {
        console.log($(".tab_box .show-div").index());
        $("#ctbox div").eq($(this).index()).show().siblings().hide();
    }, function () {
        // alert("aaa");
    });

    $(".skin-tab li").on("click", function () {
        $(this).addClass("selcted").siblings().removeClass("selcted");
        skinindex = $(this).index();
        console.log(skinindex);

        $('#skin-h2').attr("class", "skin-h2 shop-class-skin" + skinindex);
        var cl=$("#skin-h2").css("background-color");
        console.log(cl);
        $('.head-bottom').css("background",cl);
    });


});