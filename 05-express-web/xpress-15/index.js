/* 
Using middleware in Express

Express comes with over 15 basic pieces of middleware, and of course developers can add others via NPM. 
Each piece of middleware provides a micro-feature. Here are a few examples:

compression: enables for gzip compression of pages for faster sending to the server.
cookie-parser: allows you to work with cookies.
cookie-session: allows you to generate session information (during a visitor’s stay on the website).
serve-static: allows the return of static files contained in a folder (images, files to download, etc.).
serve-favicon: manages your website's favicon.
csrf: provides protection against CSRF faults.

To use a piece of middleware, all you need to do is call the app.use()method. 
You can do this, for example:
*/
let express = require('express');
let morgan = require('morgan'); // loads the piece of middleware for logging
let favicon = require('serve-favicon'); // loads the piece of middleware for the favicon

let app = express();
app.use(morgan('combined')) // loads the piece of middleware for logging
    .use(express.static(__dirname + '/public')) // Specifies that the /public folder includes static files (basic piece of middleware loaded)
    .use(favicon(__dirname + '/public/favicon.ico')); // Activates the favicon specified

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
    })
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