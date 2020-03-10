// We could add custom functions to existing data-types

let x = new String("Enrique");
console.log(x);

String.prototype.isLenghtGreaterThan = function(limit) {
  return this.length > limit;
};

console.log(x.isLenghtGreaterThan(2));
