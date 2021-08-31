const express = require("express");
const app = express();
const mongoose = require("mongoose");
// importing routes
const postsRoutes = require("./routes/posts");

// middleware
app.use(express.json());

// router
app.use("/" /*this is the base route forwarded */, postsRoutes);

app.get("/", (req, res) => {
  res.send("home page");
});
// mongoose db
// connecting to the data base
mongoose.connect(
  "mongodb://localhost/restAPI",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => {
    console.log("connection successfull");
  }
);

app.listen(5000, () => {
  console.log("listening at port 5000");
});
