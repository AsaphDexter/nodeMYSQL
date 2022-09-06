//Connecting to MySQL database server from node.js
//First, import the mysql module by using the following statement:

let mysql = require('mysql2');

//Code language: JavaScript (javascript)
//Second, create a connection to the MySQL database by calling the createConnection() method and providing the detailed information on MySQL server such as host, user, password and database as follows:

let connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'todoapp'
});

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
  });


