const bodyParser = require("body-parser");
const express = require("express");
const { PORT } = require("./config/index");
const router = require("./router");

const app = express();

app.use(bodyParser.json());

router(app);

app.listen(PORT);
