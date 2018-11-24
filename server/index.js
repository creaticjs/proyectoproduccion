const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('./db/dbconnection');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((req,res,next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


const routePets = require('./routes/pets')(app);


mongo.conectar(app);
