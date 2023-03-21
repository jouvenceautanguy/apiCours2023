const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const db = require('./db');

const hostname = "0.0.0.0";
const port = 3000;
const server = express();

db.connect((err) => {
  if(err) {
      throw err;
  }
  console.log('connected to database');
});

db.query('SELECT * FROM users', (err, rows) => {
    if (err) {
      throw err;
    }
    console.log('Data received from MySQL:\n');
    console.log(rows);
  });

//server.set("db", db);
server.use(express.urlencoded({ extended: true }));// url encodé pour save les données encodé dans des fichiers json
server.use(express.json());

const paymentRoute = require("./api/routes/paymentRoute");
paymentRoute(server);

const tipsRoute = require("./api/routes/tipsRoute");
tipsRoute(server);

const userRoute = require("./api/routes/userRoute");
userRoute(server);

const serviceRoute = require("./api/routes/servicesRoute");
serviceRoute(server);

server.listen(port, hostname);

