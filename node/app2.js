/**
 * Created by Administrator on 2017/2/14.
 */
var http = require('http');
var urls = ["www.baidu.com", "www.souhou.com", "www.qq.com","www.163.com"];
function fetchPage(url) {

    var start = new Date();
    http.get({'host': url}, function () {
        console.log("got response from :" + url);
        console.log(new Date() - start+"ms");
    });
}
for (var i = 0; i < urls.length; i++) {
    fetchPage(urls[i]);
}