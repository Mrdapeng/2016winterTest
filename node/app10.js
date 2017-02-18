/**
 * Created by Administrator on 2017/2/16.
 */
var http = require("http");
var mysql = require('mysql');
http.createServer(function (req, res) {
    res.end("2000");

}).listen(3000);
console.log("start sever");