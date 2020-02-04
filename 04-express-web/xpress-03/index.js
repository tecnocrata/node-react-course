var http = require('http');

var server = http.createServer(function (req, res) {
    //Following HTTP standar we should specify return's type
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    //res.end('Hi everybody on Tekhne!');
    res.end('<p>Here is a paragraph of <strong>HTML</strong>!</p>');
});
server.listen(8080);