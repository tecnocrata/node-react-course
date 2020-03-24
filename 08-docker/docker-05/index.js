// index.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var cors = require('cors');                 // Enable Cors
var bodyParser = require('body-parser');
var pg = require ('./db');
app.use(cors());
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Validate postgres connection
pg.db.proc('version')
  .then(() => {
    console.log('Postgres Connected.... ');
  })
  .catch(err => {
    console.log('Postgres connection error:');
    console.error(err);
    process.exit(-1);
  });

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.(middleware)');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
//router.get('/', function(req, res) {
//    res.json({ message: 'hooray! welcome to our api!' });   
//});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
require('./routes')(app);
//app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
