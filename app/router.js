const { routerPost } = require("./modules/connections");
const { routeComment } = require("./modules/connections");

module.exports = (app) => {
  app.use("/post", routerPost);
  app.use("/comment", routeComment);

  app.use((req, res) => {
    res.status(404).send("This route it is not being supported yet!");
  });
};
