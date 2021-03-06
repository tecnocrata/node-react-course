let express = require('express');
let router = express.Router();

let flights = require('../data');

//let flight = require('../flight');

/* for (let number in flights) {
	flights[number] = flight(flights[number]);
} */
/*
 * GET home page.
 */

router
	.get('/', function (req, res, next) {
		//console.log(flights);
		res.render('index', { title: 'Flights', flights });
	})
	.post('/', function (req, res, next) {
		// Get values from POST request. These can be done through forms or REST calls. These rely on the "name" attributes for forms
		var number = req.body.number;
		var origin = req.body.origin;
		var destination = req.body.destination;
		var departs = req.body.departs;
		var arrives = req.body.arrives;
		//call the create function for our database
		let item = {
			number,
			origin,
			destination,
			departs,
			arrives
		};
		//flights.push(item);
		flights[number] = item;
		console.log(flights);
		//res.redirect("/");
		res.format({
			//HTML response will set the location and redirect back to the home page. You could also create a 'success' page if that's your thing
			html: function () {
				// If it worked, set the header so the address bar doesn't still say /adduser
				res.location("");
				// And forward to success page
				res.redirect("/");
			},
			//JSON response will show the newly created blob
			json: function () {
				res.json(flights);
			}
		});
	})
	.post('/:id/delete', function (req, res) {
		//find flight by ID
		delete flights[req.params.id];

		res.format({
			//HTML returns us back to the main page, or you can create a success page
			html: function () {
				res.redirect("/");
			},
			//JSON returns the item with the message that is has been deleted
			json: function () {
				res.json(flights);
			}
		});
	})
	.post('/:id/update', function (req, res) {
		var number = req.body.number;
		var origin = req.body.origin;
		var destination = req.body.destination;
		var departs = req.body.departs;
		var arrives = req.body.arrives;
		//call the create function for our database
		let item = {
			number,
			origin,
			destination,
			departs,
			arrives
		};
		//flights.push(item);
		flights[req.params.id] = item;
		console.log(flights);
		//res.redirect("/");
		res.format({
			//HTML response will set the location and redirect back to the home page. You could also create a 'success' page if that's your thing
			html: function () {
				// If it worked, set the header so the address bar doesn't still say /adduser
				res.location("");
				// And forward to success page
				res.redirect("/");
			},
			//JSON response will show the newly created blob
			json: function () {
				res.json(flights);
			}
		});
	});

router
	.get('/new', function (req, res) {
		res.render('new', { title: 'Add New Flight' });
	})
	.get('/:id/edit', function (req, res) {
		//find flight by ID
		let f = flights[req.params.id];
		console.log('Flight-->', f);
		if (f) {
			res.format({
				//HTML response will render the 'edit.jade' template
				html: function () {
					res.render('edit', { flight: f });
				},
				//JSON response will return the JSON output
				json: function () {
					res.json(f);
				}
			});
		}

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