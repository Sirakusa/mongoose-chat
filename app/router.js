const routerPost = require("./modules/post/router");
const routeComment = require("./modules/comment/router");

module.exports = (app) => {
  app.use("/post", routerPost);
  app.use("/comment", routeComment);

  app.use((req, res) => {
    res.status(404).send("This route it is not being supported yet!");
  });
};
