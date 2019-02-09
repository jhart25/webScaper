var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

var db = require("./models");

var PORT = 3000;

var app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://localhost/dbArticles", { useNewUrlParser: true });

const routes = require("./routes");

app.use(routes);

app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
