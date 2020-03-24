// index.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require("express"); // call express
var app = express(); // define our app using express
var bodyParser = require("body-parser");
let jwt = require("jsonwebtoken");

var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/tkn-demo", {
  //   user: "admin",
  //   pass: "pass"
});

//var Person = require('./models/person');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// JWT Setup!
app.use((req, res, next) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "JWT"
  ) {
    console.log("Authorization ", req.headers.authorization);
    jwt.verify(
      req.headers.authorization.split(" ")[1],
      "Restful API",
      (err, decode) => {
        if (err) req.user = null;
        req.user = decode;
        next();
      }
    );
  } else {
    req.user = null;
    next();
  }
});

var port = process.env.PORT || 3002; // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
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

process.on("unhandledRejection", err => {
  throw err;
});

// START THE SERVER
// =============================================================================
app.listen(port);
console.log("Magic happens on port " + port);
