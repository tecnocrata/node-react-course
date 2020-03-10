// Object.create and Pure Prototypal Inheritance
// Another way to create objects!
let person = {
  firstName: "Default",
  lastName: "Default",
  getFullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

let jhon = Object.create(person);
console.log(jhon); // WHY IS EMPTY? ... Please try in a browser and let's see the PURE Protypal Inheritance!!!
