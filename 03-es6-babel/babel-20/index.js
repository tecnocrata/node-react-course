//Abstract Methods without classes
//NOT the best way, using abstract without prototypes or classes
let abstractClass = {
    abstractMethod: function () { /* i don't know yet what i'm going to do */ },
    concreteMethod: function () {
        this.abstractMethod(); // < made generic with this 
    }
}

let specializedClass = Object.create(abstractClass);
specializedClass.abstractMethod = function () {
    console.log('Now i know what to do');
}

specializedClass.concreteMethod()