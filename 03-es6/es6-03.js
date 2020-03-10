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

// Listing employee's properties... but WAIT....
for (const prop in employee) {
  console.log(`Name --> ${prop} and Value -->${employee[prop]}`);
}
