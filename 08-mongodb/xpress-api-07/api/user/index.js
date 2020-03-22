//import express from 'express';
let express = require("express");
let userController = require("./user.controller");

let router = express.Router();
// more routes /persons for our API will happen here
// ----------------------------------------------------
router.post("/", userController.createPerson);
router.get("/", userController.getPersons);

module.exports = router;
