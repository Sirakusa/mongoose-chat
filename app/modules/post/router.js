const { Router } = require("express");

const routerPost = Router({ mergeParams: true });

routerPost.post("/", create);
routerPost.delete("/:id", deletePost);
routerPost.delete("/comment/:id", removeComment);
routerPost.patch("/:id", newDescription);

module.exports = routerPost;
