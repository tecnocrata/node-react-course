//Classes - static inheritance
class B {
    static f() {
        console.log('Hi there');
    }
}

class D extends B {}

D.f(); // ok