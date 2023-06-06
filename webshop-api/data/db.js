const { Client } = require('pg')
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'bookregister',
    password: 'Test',
    port: 5432,
})

module.exports = client;