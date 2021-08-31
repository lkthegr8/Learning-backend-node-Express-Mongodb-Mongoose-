const express = require("express");
// const express = require("./express/methods-public");
const app = express();
persons = [
  { id: 1, name: "john" },
  { id: 2, name: "lkgr8" },
  { id: 3, name: "harsh" },
];

app.use(express.static("./express/methods-public"));

// parse form html
app.use(express.urlencoded({ extended: false }));
// parse parse request from javascript
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({ success: true, data: persons });
});
app.post("/login", (req, res) => {
  let { name } = req.body;
  res.status(200).send(`post:${name}`);
});
app.post("/api/people", (req, res) => {
  let { name } = req.body;
  console.log(req.body);
  res.status(201).json({ success: true, person: name });
});

// put is for update
app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  console.log(id, name);
  res.send("hello wold");
});
// delete is for delete
app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;
  res.send("hello wold");
});
app.listen(5000);
