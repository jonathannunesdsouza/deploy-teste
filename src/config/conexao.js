const knex = require('knex')({
    client: 'pg',
    connection: {
      host : "isabelle.db.elephantsql.com",
      port : 5432,
      user : "tredsnqx",
      password : "A7AYbsZi4eUuH4B1s7nNTc2k4Z8M3ZvS",
      database : "tredsnqx",
      ssl: { rejectUnauthorized: false}
    }
  });


  module.exports = knex