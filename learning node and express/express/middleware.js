const express = require("express");
const app = express();
const path = require("path");
// req=>middleware=>res

// this is a middleware
const logger = (req, res, next) => {
  let method = req.method;
  let url = req.url;
  console.log(method, url);
  // the next function is a must as the response must be ended through this or next function
  next();
};
app.get("/", logger, (req, res) => {
  res.send("<h1>home page</h1>");
});
app.get("/about", logger, (req, res) => {
  res.send("<h1>about page</h1>");
});

app.listen(5000);
