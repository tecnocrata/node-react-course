// Function Currying
// Crear la copia de una funcion con algunos paramtros pre-definidos en valor

function multiply(a, b) {
  return a * b;
}

let multiplyByTwo = multiply.bind(this, 2);

console.log(multiplyByTwo(7));
