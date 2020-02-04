//Complex Callback converted to Promise
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
/*getText = function(url, callback) // How can I use this callback?
{
    let request = new XMLHttpRequest();
    request.onreadystatechange = function()
    {
        if (request.readyState === 4 && request.status === 200)
        {
            callback(request.responseText); // Another callback here
        }
    }; 
    request.open('GET', url);
    request.send();
}

function mycallback(data) {
   console.log(data);
}

getText('https://github.com/tecnocrata/', mycallback); */

const promiseAnathomy = function (...myparameters){
    return new Promise((resolve, reject) => {
        // do something asynchronous which eventually calls either:
        //
        //   resolve(someValue); // fulfilled
        // or
        //   reject("failure reason"); // rejected
    });
}

function getContent(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = () => resolve(xhr.responseText);
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();
    });
}

getContent('https://github.com/tecnocrata/')
.then(data=>{
    console.log(data);
})
.catch(e=>{
    console.log(e);
});