const express = require("express");
const mongoose = require("mongoose");
const Post = require("../models/Post");
const app = express();
require("dotenv/config");

mongoose.connect(process.env.MONGODB_URI, { dbName: "vercel-crud" }, () =>
  console.log("Connected to mongodb database")
);

app.get("/", async (req, res) => {
  try {
    const existingPosts = await Post.find();

    res.send(existingPosts);
  } catch (error) {
    if (!res.headersSent) res.sendStatus(500);
  }
});

app.get("/create", async (req, res) => {
  try {
    if (!req.query.content) return res.sendStatus(400);

    const created = await Post.create({
      content: req.query.content,
    });

    res.send(created);
  } catch (error) {
    if (!res.headersSent) res.sendStatus(500);
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
