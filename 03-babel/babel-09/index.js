// Classes - inheritance

class Employee {
    constructor(firstName, familyName) {
        this._firstName = firstName;
        this._familyName = familyName;
    }

    getFullName() {
        return `${this._firstName} ${this._familyName}`;
    }
}

class Manager extends Employee {
    constructor(firstName, familyName) {
        super(firstName, familyName); //mandatory!
        this._managedEmployees = [];
    }

    addEmployee(employee) {
        this._managedEmployees.push(employee);
    }
}

let xy = new Manager('Enrique', 'Ortuno');
console.log(xy.getFullName());