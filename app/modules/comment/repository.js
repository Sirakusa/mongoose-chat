const { Schema, model } = require("mongoose");

const commentsSchema = new Schema(
  {
    author: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Comment", commentsSchema);
