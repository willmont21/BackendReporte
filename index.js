
const mysql = require('mysql');
var app = require('./app');
const PORT = process.env.PORT || 3000;


var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : 'Admin1243',
  database        : 'reporte'
});

/*connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected to de base');
  
});

pool.getConnection(function(err, connection) {
  if (err) throw err; // not connected!
  // Use the connection
  connection.query('SELECT * FROM cliente', function (error, results, fields) {
    // When done with the connection, release it.
    console.log('DB is Connected');
    connection.release();

    // Handle error after the release.
    if (error) throw error;

    // Don't use the connection here, it has been returned to the pool.
  });
}); */

pool.getConnection(function(err, connection) {
  if (err) throw err;
  pool.releaseConnection(connection);
  console.log('DB is Connected');
  
});




app.listen(PORT, () => console.log(`Server running on port ${PORT}`));