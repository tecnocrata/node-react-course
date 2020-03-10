//
function Person() {
  this.firstName = "Default";
  this.lastName = "Default";
  this.getFullName = function() {
    return this.firstName + " " + this.lastName;
  };
}

let jean = new Person();

console.log("Jean: ", jean);
console.log("Prototype", Person.prototype);
