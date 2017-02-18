/**
 * Created by Administrator on 2017/2/15.
 */
var http = require("http");
var fs = require("fs");
var url = require("url");
var query=require('querystring');
http.createServer(function (req, res) {

    var geturl=url.parse(req.url).query;
    var queryUrl=query.parse(geturl);
    console.log(queryUrl);
    console.log(queryUrl.aa);
    console.log(queryUrl.bb);

}).listen(3000);
console.log("is running");