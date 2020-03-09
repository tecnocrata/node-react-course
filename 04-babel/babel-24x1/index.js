import fetch from 'node-fetch';

//Please fix this file, contains errors

fetch('https://github.com/tecnocrata')
    .then(res => {
        console.log(res.ok);
        console.log(res.status);
        console.log(res.statusText);
        console.log(res.headers.raw());
        console.log(res.headers.get('content-type'));
    });