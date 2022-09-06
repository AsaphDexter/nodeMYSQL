//InsertInto.js

/*Node.js MySQL Insert Into
Insert Into Table
To fill a table in MySQL, use the "INSERT INTO" statement.*/

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
  //Insert a record in the "customers" table:
  var sql = "INSERT INTO customers (name, address) VALUES ('Strawberry Inc', 'Roadblock 88')";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});*/


/*Insert Multiple Records
To insert more than one record, make an array containing the values, and insert a question mark in the sql, which will be replaced by the value array:
INSERT INTO customers (name, address) VALUES ?*/

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
  //Make SQL statement:
  var sql = "INSERT INTO customers (name, address) VALUES ?";
  //Make an array of values:
  var values = [
    ['Strawberry', 'Highway 71'],
    ['Coco', 'Lowstreet 4'],
    ['Vanilla', 'Apple st 652'],
    ['Ice', 'Mountain 21'],
    ['Maplecandy', 'Valley 345'],
    ['Cheesecake', 'Ocean blvd 2'],
    ['Honeydrips', 'Green Grass 1'],
    ['Cherrypie', 'Sky st 331'],
    ['Pancake', 'One way 98'],
    ['Vicky', 'Yellow Garden 2'],
    ['Ben', 'Park Lane 38'],
    ['William', 'Central st 954'],
    ['Chuck', 'Main Road 989'],
    ['Viola', 'Sideway 1633']
  ];
  //Execute the SQL statement, with the value array:
  connection.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
    console.log(result)
  });
});*/

/*The Result Object
When executing a query, a result object is returned.
The result object contains information about how the query affected the table.
The result object returned from the example above looks like this:

{
    fieldCount: 0,
    affectedRows: 14,
    insertId: 0,
    serverStatus: 2,
    warningCount: 0,
    message: '\'Records:14  Duplicated: 0  Warnings: 0',
    protocol41: true,
    changedRows: 0
  }

  The values of the properties can be displayed like this:

Example
Return the number of affected rows:

console.log(result.affectedRows)
Which will produce this result:

14
Get Inserted ID
For tables with an auto increment id field, you can get the id of the row you just inserted by asking the result object.
Note: To be able to get the inserted id, only one row can be inserted.
*/

var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});
con.connect(function(err) {
  if (err) throw err;
  var sql = "INSERT INTO customers (name, address) VALUES ('ChillPepper', 'Blue Village 1')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    /*Use the result object to get the id:*/
    console.log("1 record inserted, ID: " + result.insertId);
  });
});