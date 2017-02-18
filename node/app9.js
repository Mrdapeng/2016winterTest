/**
 * Created by Administrator on 2017/2/15.
 */
var utils = require('util');
var events = require("events");

/*
 * 继承方式
 * 1子类call到父类的属性和方法，父类.call(子类)；将父类的方法还有属性复制到子类 所以是父类call
 * 2.调用inherits方法（子类，父类）
 * 主要是把父类的construc拿到
 * 将一个构造函数的原型方法继承到另一个构造函数中。constructor构造函数的原型将被设置为使用superConstructor构造函数所创建的一个新对象。

 As an additional convenience, superConstructor will be accessiblethrough theconstructor.super_ property.

 此方法带来的额外的好处是，可以通过constructor.super_属性来访问superConstructor构造函数。

 var util = require("util");
 var events = require("events");

 function MyStream() {
 events.EventEmitter.call(this);
 }
 * */
function mystream() {
    events.EventEmitter.call(this);
    utils.inherits(mystream, events.EventEmitter);
}
//this指向mystream.prototype
mystream.prototype.write = function (data) {
    this.emit("data", data);
};
var stream = new mystream();
stream.on('data', function (postdata) {
    console.log("recieve ok" + postdata);
});
stream.write("lrp is so cool");