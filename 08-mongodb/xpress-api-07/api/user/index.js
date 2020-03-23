//import express from 'express';
let express = require("express");
let userController = require("./user.controller");

let router = express.Router();
// more routes /persons for our API will happen here
// ----------------------------------------------------
router.post("/register", userController.register); //We don't need secure this encpoint
router.post("/login", userController.login); //We don't need secure this encpoint

module.exports = router;
