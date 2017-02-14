/**
 * Created by Administrator on 2017/2/14.
 */
var http = require("http");
var fs = require('fs');
var url = require('url');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type': 'text/html'});
    // res.end();
    //1.先拼路径
    var readpath = __dirname + "/" + url.parse("index_app3.html").pathname;
    var data = fs.readFileSync(readpath, 'utf-8');
    /*
     * 本地流状态 网络流状态 move_upload_file('c:\1.txt','d:\1.txt')
     * */
    res.end(data);
}).listen(3000);
console.log('server start at 3000');