const mongoose = require("mongoose");
const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
// const bool = 0;
const app = express();

const db =
  "mongodb+srv://mayurdhwaj1315:iGJYGQZDM9RYx261@cluster0.qjvsvxc.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(db)
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => [console.log(err)]);
app.use(express.static("client"));

app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/client/index.html");
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("server started");
});
