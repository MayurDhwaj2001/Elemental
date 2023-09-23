const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
// const bool = 0;
const app = express();
// app.use(express.static("client/css"));
// app.use(express.static("client/img"));
app.use(express.static("client"));
// app.use(express.static("client/html"));

app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/client/index.html");
});

// app.post("/", function (req, res) {
// });
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("server started");
});
