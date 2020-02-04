//Sample of one possible solution if we don't want to use nodejs caching
let flight = require('./flight')();
flight.setNumber(7772);
flight.setOrigin('Cochabamba');
flight.setDestination('Utah');

console.log(flight.getInfo());

let anotherFlight = require('./flight')();

console.log(anotherFlight.getInfo());