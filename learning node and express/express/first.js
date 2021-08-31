const express = require("express");
const app = express();

// const app = require("express")();

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

app.get("/", (req, res) => {
  console.log("first express server");
  res.send("hello world");
});
app.all("*", (req, res) => {
  res.status(404).send("<h1>the webpage is not available</h1>");
});
app.listen(5000, () => {
  console.log("listening on port 5000");
});
