const express = require('express');
const fs = require('fs');
const router = express.Router();
const createClient = require('./db.js');

// router.post('/login', fcc (req, res, next) {
//   let users = JSON.parse(fs.readFileSync('./data/users.json', 'utf8'));
//   let user = users.find(user => user.email === req.body.email && user.password === req.body.password);
//   if (user) {
//     res.status(200).json(user);
//   } else {
//     res.status(404).send({ message: "Password and email not valid" });
//   }
// });
router.post('/login', function (req, res) {

  // Query the database for the user with the provided credentials
  const client = createClient();
  client.connect((err) => {
    if (err) {
      console.error('Error during connection:', err);
      return;
    }
    console.log("Connected to database");
    const insertQuery='SELECT * FROM customers WHERE email = $1 AND pasword = $2';
    client.query(insertQuery, [req.body.email, req.body.password], (err, result) => {
      if (err) {
        console.error('Error', err);
        return;
      }
      console.log('Record inserted successfully');
      client.end(); // Close the database connection
      res.send({ message: "login Successfully" });
    });
  });
  console.log("after");
});


router.post('/register', function (req, res, next) {
  let users = JSON.parse(fs.readFileSync('./data/users.json', 'utf8'));
  if (req.body.name && req.body.username && req.body.email && req.body.password) {
    let user = {
      "id": users[users.length - 1].id + 1,
      "name": req.body.name,
      "username": req.body.username,
      "email": req.body.email,
      "password": req.body.password,
    };
    console.log("Before");
    const client = createClient();
    client.connect((err) => {
      if (err) {
        console.error('Error during connection:', err);
        return;
      }
      console.log("Connected to database");

      const insertQuery = 'INSERT INTO customers (firstname, username, email, pasword) VALUES ($1, $2, $3, $4)';
      client.query(insertQuery, [user.name, user.username, user.email, user.password], (err, result) => {
        if (err) {
          console.error('Error', err);
          return;
        }
        console.log('Record inserted successfully');
        client.end(); // Close the database connection
        res.send({ message: "Successfully registered" });
      });
    });
    console.log("after");
  } else {
    res.status(400).send({ message: "Please complete all fields" });
  }
});

function validateUser(user) {
  const regexLetters = /(^[A-Za-z]{2,30})([ ]{0,1})([A-Za-z]{2,30})/;
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const regexUsername = /^[a-z0-9_-]{3,16}$/igm;

  return user.name.match(regexLetters) &&
    user.username.match(regexUsername) &&
    user.email.match(regexEmail) &&
    user.password.match(regexPassword);
}


module.exports = router;