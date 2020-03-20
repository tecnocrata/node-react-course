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
//console.log(employee.prototype);

// Only listin employee's properties
for (const prop in employee) {
  if (employee.hasOwnProperty(prop)) {
    console.log(`Name --> ${prop} and Value -->${employee[prop]}`);
  }
}
