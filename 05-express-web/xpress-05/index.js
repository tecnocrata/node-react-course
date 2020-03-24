let http = require('http');
/* 
Please try previous samples using these urls:
http://localhost:8080
http://localhost:8080/mypage
http://localhost:8080/folder/otherpage 

All return same page, but now with url module.....
*/
let url = require("url");
let server = http.createServer(function (req, res) {
    let page = url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    res.write('<!DOCTYPE html>' +
        '<html>' +
        ' <head>' +
        ' <meta charset="utf-8" />' +
        ' <title>My Node.js page!</title>' +
        ' </head>' +
        ' <body>' +
        ' <p>Here is a paragraph of <strong>HTML</strong>!</p>' +
        ' </body>' +
        '</html>');
    res.end();
});
server.listen(8080);