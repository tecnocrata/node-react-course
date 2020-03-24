let http = require('http');
/* 
Please NOW try sing these urls:
http://localhost:8080
http://localhost:8080/basement
http://localhost:8080/floor/1/bedroom 

BUT what about: http://localhost:8080/basement?fisrtname=John&lastname=Doe
*/
let url = require("url");
let server = http.createServer(function (req, res) {
    let page = url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    if (page === '/') {
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
    } else if (page === '/basement') {
        res.write('You\'re in the wine cellar. These bottles are mine!');
    } else if (page === '/floor/1/bedroom') {
        res.write('Hey, this is a private area!');
    }
    res.end();
});
server.listen(8080);