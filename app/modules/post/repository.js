const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
    maxLength: 250,
  },
  comments: {
    type: String,
    default: "",
  },
  Likes: {
    type: Number,
    default: 0,
  },
  timestamps: true,
});

module.exports = model("Post", postSchema);
