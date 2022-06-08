const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("posts", PostSchema);
