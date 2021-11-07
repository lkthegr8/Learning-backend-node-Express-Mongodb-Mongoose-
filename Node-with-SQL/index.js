var express = require("express");
var app = express();

app.get("/", function (req, res) {
  const mysql = require("mysql2");

  // create the connection to database
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "world",
    password: "root123",
    port: 3366,
  });

  // simple query
  connection.query("SELECT * FROM `city` ", function (err, results, fields) {
    // res.send(results); // results contains rows returned by server
    // console.log(fields); // fields contains extra meta data about results, if available
  });

  // with placeholder
  connection.query(
    "SELECT * FROM `city` where id=100",
    function (err, results) {
      res.send(results);
    }
  );
});

app.listen(5000, function () {
  console.log("Server is running..");
});
