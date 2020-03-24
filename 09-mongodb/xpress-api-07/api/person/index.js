//import express from 'express';
let express = require("express");
let personController = require("./person.controller");
let userController = require("../user/user.controller");

let router = express.Router();
// more routes /persons for our API will happen here
// ----------------------------------------------------
router.post("/", userController.loginRequired, personController.createPerson);
router.get("/", userController.loginRequired, personController.getPersons);

module.exports = router;
