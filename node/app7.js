/**
 * Created by Administrator on 2017/2/15.
 */
var http = require('http');
var fs = require('fs');
var url = require('url');
http.createServer(function (req, res) {
    console.log (url.parse(req.url).query);
    var person=url.parse(req.url,true).query;
    console.log(person.aa+""+person.bb);
    console.log(person);
    var requrl=url.parse(req.url).pathname;
    console.log(requrl);
    console.log(req.method);
}).listen(3000);
console.log("sever start");