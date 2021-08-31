const express = require("express");
const app = express();
persons = [
  { id: 1, name: "john" },
  { id: 2, name: "lkgr8" },
  { id: 3, name: "harsh" },
];

app.get("/", (req, res) => {
  res.send('<h1>home page</h1><a href="/getData">get json data</a>');
});
app.get("/getData", (req, res) => {
  res.json(persons);
});
app.get("/getData/:id", (req, res) => {
  console.log(req.params);
  let id = parseInt(req.params.id);
  let singlePerson = persons.find((person) => person.id === id);
  if (!singlePerson) {
    res.send("<h1>person does not exist</h1>");
  }
  return res.json(singlePerson);
});
// any routing is ok
app.get("/api/query", (req, res) => {
  console.log(req.query);
});

app.listen(5000);
