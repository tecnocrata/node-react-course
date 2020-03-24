let Flight = function () {
	this.data = {
		number: null,
		origin: null,
		destination: null,
		departs: null,
		arrives: null,
		actualDepart: null,
		actualArrive: null
	};

	this.fill = function (info) {
		for(let prop in this.data) {
			if(this.data[prop] !== 'undefined') {
				this.data[prop] = info[prop];
			}
		}
	};

	this.triggerDepart = function () {
		this.data.actualDepart = Date.now();
	};

	this.triggerArrive = function () {
		this.data.actualArrive = Date.now();
	};

	this.getInformation = function () {
		return this.data;
	};
};

module.exports = function (info) {
	let instance = new Flight();

	instance.fill(info);

	return instance;
};
/*
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

module.exports = function(info){
    let instance = new Flight();
    instance.fill(info);
    return instance;
}
*/