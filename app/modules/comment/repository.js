const { Schema, model } = require("mongoose");

const commentsSchema = new Schema({
  author: {
    type: String,
    require: true,
  },
  comments: {
    type: String,
    default: "",
    maxLength: 250,
  },
  timestamps: true,
});

module.exports = model("Comment", commentsSchema);
