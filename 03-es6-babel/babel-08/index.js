//Classes - static members

class Rectangle {
    constructor() {
        this.width = 4;
    }
}

Rectangle.myStaticValue = 100;

let r1 = new Rectangle();
console.log(Rectangle.myStaticValue);
let r2 = new Rectangle();
console.log(Rectangle.myStaticValue);

class Triple {
    static triple(n) {
        if (n === undefined) {
            n = 1;
        }
        return n * 3;
    }
}

class BiggerTriple extends Triple {
    static triple(n) {
        return super.triple(n) * super.triple(n);
    }
}

console.log(Triple.triple()); // 3
console.log(Triple.triple(6)); // 18

var tp = new Triple();

console.log(BiggerTriple.triple(3));
// 81 (not affected by parent's instantiation)

console.log(tp.triple());
// 'tp.triple is not a function'.
