const { Router } = require("express");
const { create, remove } = require("./controller");

const routeComment = Router({ mergeParams: true });

routeComment.post("/:postId", create);
routeComment.delete("/:id", remove);

module.exports = routeComment;
