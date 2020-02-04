//Complex Callback

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
getText = function(url, callback) // How can I use this callback?
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

getText('https://github.com/tecnocrata/', mycallback);
