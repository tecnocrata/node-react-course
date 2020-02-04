'use strict';

function routes(app) {
    console.log('Starting routes...');
    app.use('/api/flights', require('./api/flights'));
}

module.exports = routes;