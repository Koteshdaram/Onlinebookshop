const { Client } = require('pg');

function createClient() {
  return new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'matrical',
    password: 'Test',
    port: 5432,
  });
}

module.exports = createClient;
