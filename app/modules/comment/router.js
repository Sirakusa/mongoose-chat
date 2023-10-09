const { Router } = require("express");

const routeComment = Router({ mergeParams: true });

routeComment.post("/", create);
routeComment.delete("/", remove);

module.exports = routeComment