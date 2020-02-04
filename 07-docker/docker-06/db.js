'use strict';

let pgp = require('pg-promise')();
//let db = pgp(config.postgres);
let db = pgp({
    host: process.env.POSTGRES_HOST || 'localhost',
    port: process.env.POSTGRES_PORT || 5432,
    user: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'mysecretpassword',
    poolSize: 10,
    database: process.env.POSTGRES_DB || 'demo'
  });

module.exports.db = db;