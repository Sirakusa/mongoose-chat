const bodyParser = require("body-parser");
const express = require("express");
const { PORT } = require("./config");
const router = require();

const app = express();

app.use(bodyParser.json());

router(app);

app.listen(PORT);
