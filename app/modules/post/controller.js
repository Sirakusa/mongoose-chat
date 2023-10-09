const Post = require("./repository");

async function create(req, res) {
  try {
    const document = await Post.save(req.body);

    res.send(document);
  } catch (err) {
    res.sendStatus(404);
  }
}

async function deletePost(req, res) {
  const { id } = req.params;
  try {
    const remove = await Post.findByIdAndDelete(id);
    res.send(remove);
  } catch (err) {
    res.sendStatus(404);
  }
}

async function removeComment(req, res) {}

async function newDescription(req, res) {
  const { id } = { _id: req.params };
  const description = req.body.description;
  try {
    const update = await Post.findByIdAndUpdate(id, description);
    res.send(update);
  } catch (err) {
    res.sendStatus(404);
  }
}

module.exports = { create, deletePost, removeComment, newDescription };
