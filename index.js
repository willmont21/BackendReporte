
const mysql = require('mysql');
var app = require('./app');
const PORT = process.env.PORT || 3000;

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Admin1243',
  database : 'reporte'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected to de base');
  
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));