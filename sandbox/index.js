class Person{
    constructor(){
        this.name='Enrique';
        console.log(this);
    }

    run(){
        console.log('running...');
    }
}

let p = new Person();

console.log(Person);
console.log(p);
console.log(p.prototype);
console.log(Person.prototype);
console.log(p.run);