/*Node.js MySQL Select From
Selecting From a Table
To select data from a table in MySQL, use the "SELECT" statement.*/

//Select all records from the "customers" table, and display the result object:

/*var mysql = require('mysql2');
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});

connection.connect(function(err) {
  if (err) throw err;
  connection.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

SELECT * will return all columns

Selecting Columns
To select only some of the columns in a table, use the "SELECT" statement followed by the column name.
Example
Select name and address from the "customers" table, and display the return object:

var mysql = require('mysql2');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});

connection.connect(function(err) {
  if (err) throw err;
  //Select only "name" and "address" from "customers":
  connection.query("SELECT name, address FROM customers", function (err, result, fields) {
    if (err) throw err;
    //console.log(result);
    console.log(result[2].address);
  });
});*/

/*The Result Object
As you can see from the result of the example above, the result object is an array containing each row as an object.
To return e.g. the address of the third record, just refer to the third array object's address property:

Example
Return the address of the third record:

//console.log(result[2].address);

The Fields Object
The third parameter of the callback function is an array containing information about each field in the result.

Example
Select all records from the "customers" table, and display the fields object:*/

var mysql = require('mysql2');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});

connection.connect(function(err) {
  if (err) throw err;
  connection.query("SELECT name, address FROM customers", function (err, result, fields) {
    if (err) throw err;
    //console.log(fields);
    console.log(fields[1].name);
  });
});

/*As you can see from the result of the example above, the fields object is 
an array containing information about each field as an object.
To return e.g. the name of the second field, just refer to the second array item's name property:
Example
Return the name of the second field:*/

//console.log(fields[1].name);