//Sample of Factory of functions pattern
let flight = require('./flight')();
//console.log(flight);
flight.setNumber(7772);
flight.setOrigin('Cochabamba');
flight.setDestination('Utah');

console.log(flight.getInfo());

let anotherFlight = require('./flight')();

console.log(anotherFlight.getInfo());