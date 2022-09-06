/*Query a Database
Use SQL statements to read from (or write to) a MySQL database. This is also called "to query" the database.
The connection object created in the example above, has a method for querying the database:

Use SQL statements to read from (or write to) a MySQL database. This is also called "to query" the database.
The connection object created in the connect.js file, has a method for querying the database:*/

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });
});