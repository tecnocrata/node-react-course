//let Person = require('../../models/person');

function getFlights(req, res) {
    console.log('Getting Flights...');
}

function createFlight (req, res) {
    console.log('Flight created');
}

function deleteFlight (req, res) {
    console.log('Flight deleted');
}

function updateFlight (req, res) {
    console.log('Flight updated');
}

module.exports = {
    getFlights,
    createFlight,
    deleteFlight,
    updateFlight
};