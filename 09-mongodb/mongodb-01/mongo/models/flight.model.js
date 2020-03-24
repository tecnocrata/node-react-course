let mongoose     = require('mongoose');
let Schema       = mongoose.Schema;

var FlightSchema   = new Schema({
    number: Number,
    origin: String,
    destination: String,
    departs: String,
    arrives: String
});

module.exports = mongoose.model('Flight', FlightSchema);