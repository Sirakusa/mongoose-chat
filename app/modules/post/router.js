const { Router } = require("express");
const { create, remove, update, read } = require("./controller");

const routerPost = Router({ mergeParams: true });

routerPost.post("/", create);
routerPost.delete("/:id", remove);
routerPost.patch("/:id", update);
routerPost.get("/:id", read);

module.exports = routerPost;
