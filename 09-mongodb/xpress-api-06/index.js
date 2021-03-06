// index.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require("express"); // call express
var app = express(); // define our app using express
var bodyParser = require("body-parser");

var mongoose = require("mongoose");
//Pease create your account at https://mlab.com
//mongoose.connect('mongodb://instructor:abc123A@ds235239.mlab.com:35239/tkn-demo');
mongoose.connect("mongodb://localhost/tkn-demo");

//var Person = require('./models/person');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); // get an instance of the express Router

// middleware to use for all requests
router.use(function (req, res, next) {
  // do logging
  console.log("Something is happening.(middleware)");
  next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
//router.get('/', function(req, res) {
//    res.json({ message: 'hooray! welcome to our api!' });
//});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
require("./routes")(app);
//app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log("Magic happens on port " + port);
