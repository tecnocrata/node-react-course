/* 
Please try previous samples using these urls:
http://localhost:8080
http://localhost:8080/mypage
http://localhost:8080/folder/otherpage 
*/
let express = require('express');

let app = express();

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('You\'re in reception');
});

app.listen(8080);