//Classical vs Prototypal Inheritance
let entity = {
  see: function() {
    console.log("I can see");
  }
};

let person = {
  firstName: "Default",
  lastName: "Default",
  getFullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

let employee = {
  firstName: "Sarah",
  lastName: "Donoso"
};

// !!!!!! DON'T DO EVER !!!!!!!
person.__proto__ = entity;
employee.__proto__ = person;

employee.see();

// Listing employee's properties... but WAIT....
for (const prop in employee) {
  console.log(`Name --> ${prop} and Value -->${employee[prop]}`);
}
