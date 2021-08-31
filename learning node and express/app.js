const express = require("express");
const app = express();

const people = require("./express/routers/people");

// common/base folder
app.use(express.static("./express/methods-public"));

// parse form html
app.use(express.urlencoded({ extended: false }));
// parse parse request from javascript
app.use(express.json());

// router
app.use("/api/people" /*this is the base route forwarded */, people);
app.get("/", (req, res) => {
  res.status(200).json({ success: true, data: persons });
});
app.post("/login", (req, res) => {
  let { name } = req.body;
  res.status(200).send(`post:${name}`);
});

app.listen(5000);
