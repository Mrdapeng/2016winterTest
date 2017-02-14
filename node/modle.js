/**
 * Created by Administrator on 2017/2/13.
 */
var name;
exports.SetNames=function (thisname) {
    name=thisname;
};
exports.sayHello=function () {
  console.log(name+"hello");
};
