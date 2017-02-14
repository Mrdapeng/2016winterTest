/**
 * Created by Administrator on 2017/2/14.
 */
var http = require("http");
require("fs");
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end('<h1> hello world</h1>');
}).listen(3000);
console.log(this);
console.log("server start port 3000");