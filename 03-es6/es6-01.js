//Classical vs Prototypal Inheritance
let person = {
  firstName: "Default",
  lastName: "Default",
  getFullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.prototype);
// All objerct contains prototype object
console.log(person.__proto__);

function demo() {
  return 1 + 2;
}
// including functions
console.log(demo.__proto__);
