/*Limit the Result
You can limit the number of records returned from the query, by using the "LIMIT" statement:

Example
Select the 5 first records in the "customers" table:*/

/*var mysql = require('mysql2');
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});

connection.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT * FROM customers LIMIT 5";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});*/

/*Start From Another Position
If you want to return five records, starting from the third record, you can use the "OFFSET" keyword:

Example
Start from position 3, and return the next 5 records:*/

/*var mysql = require('mysql2');
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});
connection.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});*/
//Note: "OFFSET 2", means starting from the third position, not the second!


/*Shorter Syntax
You can also use write your SQL statement like this "LIMIT 2, 5" which returns the same as the offset example above:

Example
Start from position 3, and return the next 5 records:*/

var mysql = require('mysql2');
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});
connection.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT * FROM customers LIMIT 2, 5";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

//Note: The numbers are reversed: "LIMIT 2, 5" is the same as "LIMIT 5 OFFSET 2"



//node Limit.js