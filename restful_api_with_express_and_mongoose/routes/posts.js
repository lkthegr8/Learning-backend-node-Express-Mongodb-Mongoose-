const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// importing models via mongoose
require("../Models/Posts");
const Post = mongoose.model("posts_document");

router.get("/posts", async (req, res) => {
  try {
    const response = await Post.find({});
    res.json(response);
  } catch (error) {
    res.end("sorry there seems to be error");
  }
});

router.post("/posts", async (req, res) => {
  console.log(req.body);
  const record = {
    title: req.body.title,
    description: req.body.description,
  };
  try {
    const response = await Post.create(record);
    console.log(response);
    res.end("data has been successfully inserted");
  } catch (error) {
    res.end("sorry there seems to be error");
  }
});

module.exports = router;
