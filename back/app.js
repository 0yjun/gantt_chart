var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
const route = require("./routes/route");
var router = express.Router();
var port = 4000;
var app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(route);

app.listen(port, function () {
  console.log("Server is running on port " + port + "...");
});
