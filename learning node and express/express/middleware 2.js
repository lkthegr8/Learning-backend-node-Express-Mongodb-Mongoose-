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
// app.use will mount and invoke middleware automatically
// app.use must must be at top ,so that it can be applied to all
// to use multiple midleware use a array
app.use([logger]);
// app.use('/api',logger);//the path where the logger will be applied
app.get("/", (req, res) => {
  res.send("<h1>home page</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>about page</h1>");
});

app.listen(5000);
