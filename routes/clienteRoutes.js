'use strict'

var express = require('express');
var ClienteController = require('../controllers/clienteController');

var api = express.Router();
api.get('/prueba', (req, res)=>{
    res.send('login page');
});

module.exports = {
    api
};