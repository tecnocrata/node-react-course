/* 
Please try previous samples using these urls:
http://localhost:8080
http://localhost:8080/basement
http://localhost:8080/floor/1/bedroom 
*/
let express = require('express');

let app = express();

app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.write('<!DOCTYPE html>' +
        '<html>' +
        '    <head>' +
        '        <meta charset="utf-8" />' +
        '        <title>My Node.js page!</title>' +
        '    </head>' +
        '    <body>' +
        '       <p>Here is a paragraph of <strong>HTML</strong>!</p>' +
        '    </body>' +
        '</html>');
    res.end();
});

app.get('/basement', function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('You\’re in the wine cellar. Those bottles are mine!');
});

app.get('/floor/1/bedroom', function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hey, this is a private area!');
});

app.listen(8080);