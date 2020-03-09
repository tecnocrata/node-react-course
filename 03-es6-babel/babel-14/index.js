//Modules - function with params export
import suma from './mylib';
let w = suma(100, 500);
console.log(`w = ${w}`);

//Why .default? https://stackoverflow.com/questions/33704714/cant-require-default-export-value-in-babel-6-x
let z = (require('./mylib')).default(10,50);
console.log(`z = ${z}`);