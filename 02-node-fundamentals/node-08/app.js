//Sample of taking advantage of nodejs caching feature
let flight = require('./flight');
flight.setNumber(7772);
flight.setOrigin('Cochabamba');
flight.setDestination('Utah');

console.log(flight.getInfo());

let anotherFlight = require('./flight');

console.log(anotherFlight.getInfo());