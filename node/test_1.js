/**
 * Created by Administrator on 2017/2/13.
 */
var http = require("http");
http.createServer(function (req, res) {

    res.writeHead(200, {'Content-type': 'text/html'});
    res.write("<h1>Node.js</h1>");
    res.write("<h2> cool</h2>");
    res.end('<p>hellow world</p>');

}).listen(3000);
console.log("http server is listen ar port 3000.");