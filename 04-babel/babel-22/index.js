//Callbacks & Promises
const tenSecondsLater = () => console.log('5 seconds passed!')

setTimeout(tenSecondsLater, 5000)
console.log('Start!')

const promiseAnathomy = function (...myparameters){
    return new Promise((resolve, reject) => {
        // do something asynchronous which eventually calls either:
        //
        //   resolve(someValue); // fulfilled
        // or
        //   reject("failure reason"); // rejected
    });
}

let myFirstPromise = function() {
    return new Promise((resolve, reject) => {
        // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
        // In this example, we use setTimeout(...) to simulate async code. 
        // In reality, you will probably be using something like XHR or an HTML5 API.
        setTimeout(function () {
            resolve("Success!"); // Yay! Everything went well!
        }, 10000);
    });
}

myFirstPromise().then((successMessage) => {
    // successMessage is whatever we passed in the resolve(...) function above.
    // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
    console.log("10 seconds again! " + successMessage);
});
//The code doesn't stop the execution on previous lines
//it continues until HERE even after call myFirstPromise
console.log('FINISHED!!!');
