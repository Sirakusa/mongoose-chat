const Comment = require("./repository");
const Post = require("../post/repository");
require("../connections");

async function create(req, res) {
  try {
    const { postId } = req.params;

    const reply = new Comment(req.body);
    await reply.save();

    const post = await Post.findById(postId).populate("comment");

    post.comment.push(reply);

    res.send(post);
  } catch (err) {
    res.sendStatus(404);
  }
}

async function remove(req, res) {
  try {
    const { id } = req.params;
    const docRemove = await Comment.findByIdAndDelete(id);
    res.send(docRemove);
  } catch (err) {
    res.sendStatus(404);
  }
}

module.exports = { create, remove };
