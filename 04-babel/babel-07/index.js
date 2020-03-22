//Read-only property
class Rectangle {
  constructor() {
    this._width = 4;
  }

  get coronavirus() {
    return this._width;
  }
}

let r = new Rectangle();

console.log(r.coronavirus);
r.coronavirus = 100;
console.log(r.coronavirus);
