//import express from 'express';
let express = require('express');
let personController = require('./person.controller');

let router = express.Router();
// more routes /persons for our API will happen here
// ----------------------------------------------------
router.post('/', personController.createPerson);
router.get('/', personController.getPersons);

module.exports = router;