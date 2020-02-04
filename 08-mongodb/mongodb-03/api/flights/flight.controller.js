//let flights = require('../../data');
let mongoContext = require('../../mongo');
let Flight =  mongoContext.Flight;

function getFlights(req, res, next) {
    console.log('Getting Flights...');
    return Flight.find()
    .then(flights=>{
        res.status(200).json(flights); //httpStatus.OK
    })
    .catch (next);
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
    let f = new Flight(item);
    return f.save()
    .then (flightCreated=>{
        //flights[number] = item;
        console.log(item);
        res.status(201).json(flightCreated);
        console.log('Flight created');
    })
    .catch(err => {
        next(err);
    });
}

function deleteFlight(req, res, next) {
    let number = req.params.id;
    return Flight.deleteOne({number})
    .then (flightDeleted=>{
        //let item = flights[number];
        //delete flights[number];
        res.status(200).json(flightDeleted);
        console.log('Flight deleted');
    })
    .catch(next)
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

function updateFlight(req, res, next) {
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
    return Flight.findOne({number})
    .then(flightFound=>{
        flightFound.origin = item.origin;
        flightFound.destination = item.destination;
        flightFound.departs = item.departs;
        flightFound.arrives = item.arrives;

        return flightFound.save();
    })
    .then(f=>{
        //flights[number] = item;
        res.status(200).json(f);
        console.log('Flight updated');
    })
    .catch(next);
}

module.exports = {
    getFlights,
    createFlight,
    deleteFlight,
    updateFlight
};