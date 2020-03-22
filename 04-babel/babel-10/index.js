//Classes - static inheritance
class B {
  static f() {
    console.log("Hi there");
  }
}

B.f();

class D extends B {}

D.f(); // ok
