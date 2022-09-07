/*Node.js MySQL Where
Select With a Filter
When selecting records from a table, you can filter the selection by using the "WHERE" statement:

Example
Select record(s) with the address "Park Lane 38":

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});
connection.connect(function(err) {
  if (err) throw err;
  //Select all customers with the address "Park Lane 38":
  connection.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});*/

/*Wildcard Characters
You can also select the records that starts, includes, or ends with a given letter or phrase.
Use the '%' wildcard to represent zero, one or multiple characters:*/

//Select records where the address starts with the letter 'S':

/*var mysql = require('mysql2');
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});
connection.connect(function(err) {
  if (err) throw err;
  connection.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

Escaping Query Values
When query values are variables provided by the user, you should escape the values.
This is to prevent SQL injections, which is a common web hacking technique to destroy or misuse your database.
The MySQL module has methods to escape query values:

Escape query values by using the mysql.escape() method:

var mysql = require('mysql2');
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});

connection.connect(function(err) {
  if (err) throw err;
  var adr = 'Mountain 21';
  //Escape the address value:
  var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

You can also use a ? as a placeholder for the values you want to escape.
In this case, the variable is sent as the second parameter in the query() method:
Escape query values by using the placeholder ? method:

var mysql = require('mysql2');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});
connection.connect(function(err) {
  if (err) throw err;
  var adr = 'Mountain 21';
  //Escape the address value:
  var sql = 'SELECT * FROM customers WHERE address = ?';
  //Send an array with value(s) to replace the escaped values:
  connection.query(sql, [adr], function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

If you have multiple placeholders, the array contains multiple values, in that order:*/

var mysql = require('mysql2');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});
connection.connect(function(err) {
  if (err) throw err;
  var name = 'Maplecandy';
  var adr = 'Mountain 21';
  //Escape the name and the address values:
  var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
  //Send an array with value(s) to replace the escaped values:
  connection.query(sql, [name, adr], function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
