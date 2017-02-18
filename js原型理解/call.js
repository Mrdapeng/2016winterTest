/**
 * Created by Administrator on 2017/2/15.
 */
function class1() {
    var private = "key";
    this.name = "bbbb";
    this.show = function () {
        console.log(this.name);
    };
}
// class1.prototype.cc = function () {
// console.log("cc");
// };
var obj = new Object();
class1.call(obj);
obj.name = "aaaaa";
obj.show();
obj.cc();
/*
 * 相当于谁调用call，相当于打电话，class1打电话，就把自己传输给对方，把共有的变量和方法传过去，
 * 有可能覆盖本来的方法和变量
 * 把class1的内存映像全给了obj
 * 不能拷贝私有变量，例如上面的private变量，就不能拷贝，拷贝的是成员方法和成员函数
 * */
// function obj() {
//
//     this.name="bbb";
//     this.name="aaa";
//     this.show=function () {
//         console.log(this.name);
//
//     }

// }