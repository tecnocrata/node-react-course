// Simple string substitution
var name = "Enrique";
console.log(`Yo, ${name}!`);

var a = 10;
var b = 10;
//PLEASE OBSERVE THE QUOTES
console.log(`JavaScript first appeared ${a+b} years ago. Crazy!`);
//=> JavaScript first appeared 20 years ago. Crazy!

console.log(`The number of JS MVC frameworks is ${2 * (a + b)} and not ${10 * (a + b)}.`);
//=> The number of JS frameworks is 40 and not 200.

function fn() {
    return "I am a result of a function";
}
console.log(`foo ${fn()} !!!`);
//=> foo I am a result of a function !!!