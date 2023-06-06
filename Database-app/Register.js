const Pool = require('pg').Pool
const pool = new Pool({
user: 'postgres',
host: 'localhost',
database: 'BookRegister',
password: 'Test',
port: 5432,
});

const getCustomers = () => {
    return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM customers ', (error, results) => {
    if (error) {
    reject(error)
    }
    resolve(results.rows);
    })
    })
    }
    const createCustomers = (body) => {
    return new Promise(function(resolve, reject) {
    const { name,username, email,pasword } = body
    pool.query('INSERT INTO customers (name, username,email,pasword) VALUES ($1, $2,$3,$4) RETURNING *', [name,username,
    email,pasword], (error, results) => {
    if (error) {
    reject(error)
    }
    resolve(`A new merchant has been added added: ${results.rows[0]}`)
    })
    })
    }
    const deleteCustomers= () => {
    return new Promise(function(resolve, reject) {
    const id = parseInt(request.params.id)
    pool.query('DELETE FROM customers WHERE id = $1', [id], (error, results) => {
    
    if (error) {
    reject(error)
    }
    resolve(`customers deleted with ID: ${id}`)
    })
    })
    }
    module.exports = {
    getCustomers,
    createCustomers,
    deleteCustomers,
    }