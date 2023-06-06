const express = require('express')
const app = express()
const port = 3001
const customers_data= require('./Register')
app.use(express.json())
app.use(function (req, res, next) {
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');

res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');

next();
});
app.get('/', (req, res) => {
customers_data.getCustomers()
.then(response => {
res.status(200).send(response);
})
.catch(error => {
res.status(500).send(error);
})
})
app.post('/customers', (req, res) => {
customers_data.createCustomers(req.body)
.then(response => {
res.status(200).send(response);

})
.catch(error => {
res.status(500).send(error);
})
})
app.delete('/customers/:id', (req, res) => {
customers_data.deleteCustomers(req.params.id)
.then(response => {
res.status(200).send(response);
})
.catch(error => {
res.status(500).send(error);
})
})
app.listen(port, () => {
console.log(`App running on port ${port}.`)
})