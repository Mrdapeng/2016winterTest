/**
 * Created by Administrator on 2017/2/14.
 */
var http = require('http');
var fs = require('fs');
var url = require('url');
http.createServer(function (req, res) {
    var requrl = url.parse(req.url).pathname;
    // console.log(requrl);
    switch (requrl) {
        //路由
        case "/":
            resindex(res);
            break;
        case "/login":
            reslogin(res);
            break;
        default:
            reserro(res);
            break;
    }
}).listen(3000);
console.log("start server");
function resindex(res) {
    res.writeHead(200, {"Content-type": "text/html"});
    var requrl = __dirname + "/" + url.parse("index_app3.html").pathname;
    var data = fs.readFileSync(requrl, "utf-8");
    res.end(data);
}
function reserro(res) {
    res.writeHead(404, {"Content-type": "text/plain"});
    res.end('so sad');
}
function reslogin(res) {
    res.writeHead(200, {"Content-type": "image/jpeg"});
    var realurl = __dirname + "/" + url.parse("1.jpg").pathname;
    var data = fs.readFileSync(realurl);
    res.end(data);

}