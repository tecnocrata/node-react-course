// ES6 Classes and TypeScript classes and Babel Classes
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greet() {
    return `Hi ${this.firstName}`;
  }
}

let jhon = new Person("Jhon", "Doe");
console.log(jhon.greet());
