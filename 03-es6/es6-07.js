// WHICH is the correct way to define a function
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  // this.getFullName = function() {
  //   return this.firstName + " " + this.lastName;
  // };
}

Person.prototype.getFullName = function() {
  return this.firstName + " " + this.lastName;
};

let jean = new Person("Jean", "Donovan");
let jhon = new Person("Jhon", "Castro");

console.log(jean);
console.log(jhon);
