

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// middlewares de body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//Rutas
app.get('/', (req, res) => {
    res.send('Welcome to my API!');
  });

  
module.exports = app;