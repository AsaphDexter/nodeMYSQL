/*Node.js MySQL Order By

Sort the Result
Use the ORDER BY statement to sort the result in ascending or descending order.

The ORDER BY keyword sorts the result ascending by default. To sort the result in descending order, use the DESC keyword.

Example
Sort the result alphabetically by name:*/

/*var mysql = require('mysql2');
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});
connection.connect(function(err) {
  if (err) throw err;
  //Sort the result by name
  connection.query("SELECT * FROM customers ORDER BY name", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});*/

/*ORDER BY DESC
Use the DESC keyword to sort the result in a descending order.
Example
Sort the result reverse alphabetically by name:*/

var mysql = require('mysql2');
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});
connection.connect(function(err) {
  if (err) throw err;
  connection.query("SELECT * FROM customers ORDER BY name DESC", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

//node OrderBy.js