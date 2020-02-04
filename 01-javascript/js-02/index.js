console.log ('=====Javascript Operators=====');

console.log ('-----Precedence-----');
console.log('Please goto here, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence');

console.log('-----Coercion (Converting a value from one type to another)-----');
let a = 1 + 'a';
console.log(a); //Why? 1 was coerced to converted to string

console.log('-----Comparison operators and Coercion-----');
console.log(1<2<3);
console.log(3<2<1);