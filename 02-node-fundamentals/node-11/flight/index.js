let Flight = function () {
    this.values = {
        number: 0,
        origin: null,
        destination: null
    }

    this.fill = function(info) {
        if (info) {
            for (let property in this.values) {
                if (values[property]) {
                    this.values[property] = info[property];
                }
            }
        }
    };

    this.setNumber = function (num) {
        this.values.number = num;
    };
    this.setOrigin = function (o) {
        this.values.origin = o;
    };
    this.setDestination = function (d) {
        this.values.destination = d;
    };
    this.getInfo= function () {
        return this.values;
    }
}

/* module.exports = function(info){
    let instance = new Flight();
    instance.fill(info);
    return instance;
} */

module.exports = Flight;