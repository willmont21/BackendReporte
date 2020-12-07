const mysql = require('mysql');
var schema = mysql.schema;

var ClienteSchema = schema({
    name: String,
    ruc: String,
    razonSocial: String,
    date: Date
})

module.exports = mysql.module('Cliente',  ClienteSchema)