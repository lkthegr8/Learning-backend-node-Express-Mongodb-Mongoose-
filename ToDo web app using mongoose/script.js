const express = require("express");
const path = require("path");
const app = express();
// running all the models that has to be created
require("./models/todo");
const mongoose = require("mongoose");
const { response } = require("express");

// connecting to the data base
mongoose.connect("mongodb://localhost/first", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
// dont have to wait for connection as mongoose directly queues the queries until the connection is established

// models is used for data validation which is not provided by the mongodb
// the to do schema which is created can be directly imported from the mongoose
const TodoModel = mongoose.model("TodoModel");

app.use(express.static(path.resolve(__dirname, "assets")));

app.use(express.json());

app.post("/api/create", async (req, res) => {
  record = req.body;
  console.log(record);
  const response = await TodoModel.create(record);
  console.log(response);
});

app.get("/api/get", async (req, res) => {
  const response = await TodoModel.find({});
  res.json(response);
});

app.post("/api/modify", async (req, res) => {
  oldTitle = req.body.old;
  newTitle = req.body.new;
  console.log(req.body);
  const response = await TodoModel.updateOne(
    { record: oldTitle },
    { $set: { record: newTitle } }
    // { record: newTitle }
  );
  console.log(response);
});

// deletion
app.post("/api/delete", async (req, res) => {
  console.log(req.body);
  const response = await TodoModel.deleteOne({ record: req.body.record });
  console.log(response);
});

app.listen(13371, "127.0.0.1", () => {
  console.log("Server up");
});
