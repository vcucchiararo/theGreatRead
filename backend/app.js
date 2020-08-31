const express = require("express");
const debug = require("debug")("app");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("My server works...");
});

app.listen(port, () => debug(`Running on port ${port} `));
