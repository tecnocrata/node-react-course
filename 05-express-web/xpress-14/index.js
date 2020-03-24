/* 
Multiple parameters and loops with EJS
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

app
    .get('/basement', function (req, res) {
        res.setHeader('Content-Type', 'text/plain');
        res.end('You’re in the wine cellar. Those bottles are mine!');
    })
    /* .get('/floor/:floornum/bedroom', function(req, res) {
        res.setHeader('Content-Type', 'text/plain');
        res.end('You’re in the bedroom on floor No:' + req.params.floornum);
    }) */
    .get('/floor/:floornum/bedroom', function (req, res) {
        res.render('bedroom.ejs', {
            floor: req.params.floornum
        });
    })
    .get('/count/:number', function (req, res) {
        var names = ['Robert', 'Jack', 'David'];
        res.render('page.ejs', {
            counter: req.params.number,
            names: names
        });
    })
    .use(function (req, res, next) {
        res.setHeader('Content-Type', 'text/plain');
        res.status(404).send('Page cannot be found!')
    });

app.listen(8080);