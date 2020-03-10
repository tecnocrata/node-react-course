//
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.getFullName = function() {
    return this.firstName + " " + this.lastName;
  };
}

let jean = new Person("Jean", "Donovan");
let jhon = new Person("Jhon", "Castro");

console.log(jean);
console.log(jhon);
//Please observe that each instance has its own function,
// which is not necessary the desired effect
console.log(Person.prototype);
