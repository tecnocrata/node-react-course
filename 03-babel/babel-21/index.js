//Abstract Methods with classes
class Animal {

    constructor() {

    }

    walk() {
        console.log('Walk like animal');
    }

    //This is real polymorphism
    goHome() {
        for (let i = 0; i < 4; i++) {
            this.walk();
        }
    }

    setSkipPreview(x) {
        console.log(x);
        console.log(this.skipPreview);
    }
}

class Dog extends Animal {
    constructor() {
        super(); //HUMM weird... I need call the super constructor before, ALWAYS!
        this.skipPreview = 100;
    }

    //Not real abstract but it is an override
    walk() {
        console.log('Walk like dog');
    }
}

let dog = new Dog();

dog.walk();
console.log('Go HOME');
dog.goHome();

dog.setSkipPreview(1000000);