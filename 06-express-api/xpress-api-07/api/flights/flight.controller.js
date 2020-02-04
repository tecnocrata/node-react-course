let flights = require('../../data');

function getFlights(req, res) {
    console.log('Getting Flights...');
    res.status(200).json(flights); //httpStatus.OK
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