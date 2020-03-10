//Classical vs Prototypal Inheritance
let person = {
  firstName: "Default",
  lastName: "Default",
  getFullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

var employee = {
  firstName: "Sarah",
  lastName: "Donoso"
};

// !!!!!! DON'T DO EVER !!!!!!!
employee.__proto__ = person;

console.log(employee.firstName);
console.log(employee.getFullName());

// proto content
console.log(employee);
console.log(employee.__proto__);
console.log(employee.prototype); // BE CAREFULL this has an important meaning
