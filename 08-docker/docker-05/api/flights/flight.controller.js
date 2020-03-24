let pg = require ('../../db');
let flights = require('../../data');

function getFlights(req, res, next) {
    console.log('Getting Flights...');
    //res.status(200).json(flights); //httpStatus.OK
    let sql = `SELECT * FROM "flights"`;
    return pg.db.any(sql)
        .then(data => {
            res.status(200).json(data);
        })
        .catch(next);
}

/*
HEADER
Content-Type: application/json
*/
/*
BODY
{
    "number": "999",
    "origin": "CBBA",
    "destination": "SLC",
    "departs": "01:00PM",
    "arrives": "09:00PM"
}
*/
function createFlight(req, res, next) {
    let data = req.body;
    console.log('Creating Flights', data);
    let number = data.number;
    let origin = data.origin;
    let destination = data.destination;
    let departs = data.departs;
    let arrives = data.arrives;
    let item = {
        number,
        origin,
        destination,
        departs,
        arrives
    };
    //flights[number] = item;
    let sql = `INSERT INTO "flights" ("number", "origin", "destination") VALUES ($1, $2, $3);`;
    //let sql = `INSERT INTO "flights" ("number", "origin", "destination") VALUES (${item.number}, '${item.origin}', '${item.destination}');`;
    console.log('SENTENCE--> ',sql);
  try {
    return pg.db.none(sql, [item.number, item.origin, item.destination]).then(()=>{
        res.status(201).json(item);
        console.log('Flight created');
    })
    
  } catch (error) {
    next(error);
  }
}

function deleteFlight(req, res) {
    let number = req.params.id;
    let item = flights[number];
    delete flights[number];
    res.status(200).json(item);
    console.log('Flight deleted');
}

/*
HEADER
Content-Type: application/json
*/
/*
BODY
{
    "origin": "CDMX",
    "destination": "PHX",
    "departs": "9:00 AM",
    "arrives": "9:30 PM"
}
*/

function updateFlight(req, res) {
    let number = req.params.id; 
    console.log('Updating flight:', number)
    let data = req.body;
    let origin = data.origin;
    let destination = data.destination;
    let departs = data.departs;
    let arrives = data.arrives;
    //call the create function for our database
    let item = {
        number,
        origin,
        destination,
        departs,
        arrives
    };
    flights[number] = item;
    res.status(200).json(item);
    console.log('Flight updated');
}

module.exports = {
    getFlights,
    createFlight,
    deleteFlight,
    updateFlight
};