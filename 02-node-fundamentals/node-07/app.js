//Sample of creating a custom module
let flight = require('./flight');
flight.setNumber(7772);
flight.setOrigin('Cochabamba');
flight.setDestination('Utah');

let info = flight.getInfo();

console.log(info);