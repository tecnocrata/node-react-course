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

class Employee extends Person {
  constructor(firstName, lastName) {
    super(firstName, lastName);
  }

  greet() {
    return `Hi employee ${this.firstName}`;
  }
}

let jhon = new Person("Jhon", "Doe");
console.log(jhon.greet());

let sarah = new Employee("Sarah", "Connor");
console.log(sarah.greet());

//What is going behind the scenes?
//Explain showing the execution under a browser!
