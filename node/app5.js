/**
 * Created by Administrator on 2017/2/15.
 */
var http = require('http');
var fs = require('fs');
// var url = require('url');
http.createServer(function (req, res) {
    console.log(req.url);
    console.log(req.method);
}).listen(3000);
console.log("start server");