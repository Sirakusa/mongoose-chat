const mongoose = require("mongoose");
const { URI } = require("../config/index");

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("data base is on");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});
