'use strict'


const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.use(cors());    

// middlewares de body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

//Rutas
var cliente_routers = require('./controllers/clienteController');




app.get('/', (req, res) => {
    res.send('Welcome to my API!');
  });
//app.use('/api', cliente_routers);



  
module.exports = app;