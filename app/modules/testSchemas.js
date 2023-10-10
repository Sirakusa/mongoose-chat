const Comment = require("../modules/comment/repository");
const Post = require("../modules/post/repository");
require("./connections");

async function printDocument() {
  const comment = new Comment({
    author: "Jose Luis",
    comment: "feliz cumple chaval",
  });

  await comment.save();

  const post = new Post({
    user: "Margarita",
    description: "es mi cumple",
    comment: [],
    Likes: 2,
  });

  await post.save();

  await Post.findByIdAndUpdate(post._id, { comment: comment._id });
  const document = await Post.findOne(post._id).populate("comment");

  console.log(document);
}

printDocument();
