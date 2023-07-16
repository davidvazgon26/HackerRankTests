var express = require("express");
var path = require("path");
var app = express();

app.use(express.static(path.join(__dirname, "./view")));

app.get("/demo", (req, res) => {
  res.send("Hola desde app");
});

app.listen(process.env.PORT || 8001, "0.0.0.0", function () {
  console.log("Se levanto el servicio en el puerto: 8001");
});
module.exports = app;
