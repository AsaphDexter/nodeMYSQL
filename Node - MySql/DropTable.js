/*Node.js MySQL Drop Table
Delete a Table
You can delete an existing table by using the "DROP TABLE" statement:*/

/*var mysql = require('mysql2');
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});
connection.connect(function(err) {
  if (err) throw err;
  var sql = "DROP TABLE customers";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table deleted");
  });
});

Drop Only if Exist
If the the table you want to delete is already deleted, or for any other reason does not exist, 
you can use the IF EXISTS keyword to avoid getting an error.*/


var mysql = require('mysql2');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});
connection.connect(function(err) {
  if (err) throw err;
  /*Delete the "customers" table, but only if it already exist (to avoid errors):*/
  var sql = "DROP TABLE IF EXISTS customers";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

/*As you can see the only differnce is that the warningCount property is set to 1 if the table does not exist.*/



//node DropTable.js