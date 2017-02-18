/**
 * Created by Administrator on 2017/2/15.
 */
var http = require('http');
var fs = require('fs');
var url = require('url');
var querystr = require('querystring');
var querystring = require('querystring');
http.createServer(function (req, res) {
    var geturl = url.parse(req.url.pathname);
    switch (geturl) {

        case"/login":
            reslogin(res);
            break;
        case 'dologin':
            resdologin(res);
            break;

    }

}).listen(3000);
console.log("start sever");
function reslogin(res) {
    var realpath = __dirname + "/" + url.parse("app6index.html").pathname;
    var data = fs.readFileSync(realpath, "utf-8");
    res.end(data);
}
function resdologin(req, res) {

    if (req.method == post) {
        var person = querystring.parse(req.url);
        var name = person.name;
        var pwd = person.pwd;


    } else if (req.method == post) {

    }


}