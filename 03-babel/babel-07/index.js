//Read-only property
class Rectangle {
    constructor() {
        this._width = 4;
    }

    get readonly() {
        return this._width;
    }
}

let r = new Rectangle();

console.log(r.readonly);
r.readonly = 100;
console.log(r.readonly);