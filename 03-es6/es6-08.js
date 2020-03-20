// WHAT IS WRONG!!!????
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.getFullName = function() {
  return this.firstName + " " + this.lastName;
};

let jean = Person("Jean", "Donovan");
let jhon = Person("Jhon", "Castro");

console.log(jean.getFullName());
console.log(jhon.getFullName());
