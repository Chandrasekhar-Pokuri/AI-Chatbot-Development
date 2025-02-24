const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'enter host name',
  port: 'enter your port number',
  user: 'enter your user name',
  password: 'enter you host password',
  database: 'enter database name'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database');
});

module.exports = connection;
