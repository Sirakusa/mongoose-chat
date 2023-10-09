const Comment = require("./repository");

async function create(req, res) {
  try {
    const comment = new Comment(req.body);

    await comment.save();
    res.send(comment);
  } catch (err) {
    res.sendStatus(404);
  }
}

async function remove(req, res) {
  const { id } = req.params;

  try {
    const document = await Comment.findByIdAndDelete(id);
    res.send(document);
  } catch (err) {
    res.sendStatus(404);
  }
}

module.exports = { create, remove };
