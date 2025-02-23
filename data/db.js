const mysql = require('mysql2');
const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: '33Wxiao56&(?)L',
database: 'db_post'
});
connection.connect((err) => {
if (err) throw err;
console.log('Connected to MySQL!');
});
module.exports = connection;