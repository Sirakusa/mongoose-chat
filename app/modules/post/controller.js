const Post = require("./repository");
require("../connections");

async function create(req, res) {
  try {
    const newDocument = new Post(req.body);

    await newDocument.save();

    res.send(newDocument);
  } catch (err) {
    res.sendStatus(404);
  }
}

async function remove(req, res) {
  try {
    const { id } = req.params;
    const remove = await Post.findByIdAndDelete(id).populate("comment");
    res.send(remove);
  } catch (err) {
    res.sendStatus(404);
  }
}

async function update(req, res) {
  try {
    const { id } = req.params;
    const description = req.body;

    console.log(id);

    const updatedDoc = await Post.findByIdAndUpdate({ _id: id }, description);

    res.send(updatedDoc);
  } catch (err) {
    res.sendStatus(404);
  }
}

async function read(req, res) {
  try {
    const { id } = req.params;

    const docRead = await Post.findOne({ _id: id }).populate("comment");
    res.send(docRead);
  } catch (err) {
    res.sendStatus(404);
  }
}

module.exports = { read, create, remove, update };
