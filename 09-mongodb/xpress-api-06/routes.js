'use strict';

function routes(app) {
    console.log('Starting routes...');
    app.use('/api/persons', require('./api/person'));
}

module.exports = routes;