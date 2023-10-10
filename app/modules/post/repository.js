const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    user: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
      maxLength: 250,
    },
    comment: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    Likes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Post", postSchema);
