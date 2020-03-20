// We could add custom functions to existing data-types

let x = new String("Enrique");
console.log(x);

// DANGER!!!
// String.prototype.charAt = function(index) {
//   return 0;
// };

String.prototype.isLenghtGreaterThan = function(limit) {
  return this.length > limit;
};

console.log(x.charAt(2));
console.log(x.isLenghtGreaterThan(2));
