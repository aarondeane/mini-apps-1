const mysql = require('mysql')

var connection = mysql.createConnection({
    host     : 'localhost/3001',
    user     : 'root',
    password : 'pw',
    database : 'Order_List'
});

connection.connect()

export default connection;