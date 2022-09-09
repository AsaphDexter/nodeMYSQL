/*Join Two or More Tables
You can combine rows from two or more tables, based on a related column between them, by using a JOIN statement.
Consider you have a "users" table and a "products" table:*/

/*users
[
  { id: 1, name: 'John', favorite_product: 154},
  { id: 2, name: 'Peter', favorite_product: 154},
  { id: 3, name: 'Amy', favorite_product: 155},
  { id: 4, name: 'Hannah', favorite_product:},
  { id: 5, name: 'Michael', favorite_product:}
]*/

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
  var sql = "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), favorite_product int)";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});*/

//Fill the "users" table with data:

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
  var sql = "INSERT INTO users (name) VALUES ?";
  var values = [
    //['Strawberry', 154],
    //['Ice', 154],
    //['Coco', 155]
['Vanilla'],
['Cherry']

  ];
    connection.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});*/

/*products
[
  { id: 154, name: 'Chocolate Heaven' },
  { id: 155, name: 'Tasty Lemons' },
  { id: 156, name: 'Vanilla Dreams' }
]*/

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
  var sql = "CREATE TABLE products (id int, name VARCHAR(255))";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});*/

//Fill the "products" table with data:

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
  var sql = "INSERT INTO products (id, name) VALUES ?";
  var values = [
    [154, 'Chocolate Heaven'],
    [155,'Tasty Lemons'],
    [156, 'Vanilla Dreams']
  ];
    connection.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});*/


/*These two tables can be combined by using users' favorite_product field and products' id field.
Example
Select records with a match in both tables:*/

/*var mysql = require('mysql2');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});
connection.connect(function(err) {
  if (err) throw err;
  //Connect two tables by using one field from each table as the connection point:
  var sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});*/

/*Note: You can use INNER JOIN instead of JOIN. They will both give you the same result.
As you can see from the result shown in your console, only the records with a match in both tables are returned.*/

/*Left Join
If you want to return all users, no matter if they have a favorite product or not, use the LEFT JOIN statement:*/

/*var mysql = require('mysql2');
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});
connection.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT users.name AS user, products.name AS favorite FROM users LEFT JOIN products ON users.favorite_product = products.id";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});*/

/*Right Join
If you want to return all products, and the users who have them as their favorite, 
even if no user have them as their favorite, use the RIGHT JOIN statement:*/

var mysql = require('mysql2');
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});
connection.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT users.name AS user, products.name AS favorite FROM users RIGHT JOIN products ON users.favorite_product = products.id";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

//Note: Vanilla and Cherry, who have no favorite product, are not included in the result.

// node join.js