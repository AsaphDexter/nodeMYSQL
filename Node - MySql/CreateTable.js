/*Node.js MySQL Create Table
Creating a Table
To create a table in MySQL, use the "CREATE TABLE" statement.
Make sure you define the name of the database when you create the connection:*/

/*var mysql = require('mysql');
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
 //Create a table named "customers":
  var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});*/

//node CreateTable.js

/*Primary Key
When creating a table, you should also create a column with a unique key for each record.
This can be done by defining a column as "INT AUTO_INCREMENT PRIMARY KEY" which will insert a unique number 
for each record. Starting at 1, and increased by one for each record.
Create primary key when creating the table:*/


/*var mysql = require('mysql2');
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //Create a table where the field "id" is primary key:
  var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created with Coloumn");
  });
});*/

//If the table already exists, use the ALTER TABLE keyword:

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //Add primary key to an existing table:
  var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table altered");
  });
});
