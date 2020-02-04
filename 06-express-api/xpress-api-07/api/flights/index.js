//import express from 'express';
let express = require('express');
let flightController = require('./flight.controller');

let router = express.Router();
// more routes /persons for our API will happen here
// ----------------------------------------------------
router.get('/', flightController.getFlights);
router.post('/', flightController.createFlight);
router.delete('/', flightController.deleteFlight);
router.put('/', flightController.updateFlight);

module.exports = router;