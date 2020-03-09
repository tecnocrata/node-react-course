//Classes getters and setters

class Rectangle {
    set width(w) {
        this._width = w;
    }

    get width() {
        return this._width;
    }

    set height(h) {
        this._height = h;
    }

    get height() {
        return this._height;
    }
}

let r = new Rectangle();
r.width = 100;
r.height = 50;

console.log(r.height);