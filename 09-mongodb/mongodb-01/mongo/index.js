'use strict';

let mongoose = require ('mongoose');
//import { FlightSchema } from './models/flight.model';
let schema = require('./models/flight.model');

mongoose.Promise = global.Promise;

//This is not used in these samples, but will be used for testing purposes only
function createConnection(config, onError) {
  let dbconnection = mongoose.createConnection(config.uri, config.options);
  dbconnection.on('error', onError);
  return dbconnection;
}

function connect(config, onError) {
  mongoose.connect(config.uri, config.params);
  mongoose.connection.on('error', onError);
}

module.exports.createConnection = createConnection;
module.exports.connect = connect;
module.exports.Flight = mongoose.model('Flight', schema.FlightSchema);
