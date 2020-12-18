const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
require("dotenv").config();

const port = process.env.PORT || 3010;

const app = express();

app.use(bodyParser.json());

require("./routes")(app); // For API

app.set("port", port);
const server = http.createServer(app);
server.listen(port, () =>
  console.log(`Server is running at port no : ${port}`)
);

module.exports = app;
