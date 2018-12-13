const mysql = require('mysql')

var connection = mysql.createConnection({
    host     : 'localhost/3001',
    user     : 'root',
    password : 'pw',
    database : 'Orders'
});

connection.connect()

export default connection;