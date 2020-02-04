let express = require('express');
let router = express.Router();

let flights = require('../data');

/* let flight = require('../flight');

for (let number in flights) {
  flights[number] = flight(flights[number]);
} */
/*
 * GET home page.
 */

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Flights', flights });
});

module.exports = router;


/*exports.flight = function(req, res){
	let number = req.param('number');

	if (typeof flights[number] === 'undefined') {
		res.status(404).json({status: 'error'});
	} else {
		res.json(flights[number].getInformation());
	}
};*/