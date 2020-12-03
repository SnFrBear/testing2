const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "static")));

app.get("/", (request, response) => {
    response.send("<h2>Проверка Express!</h2>");
});
app.use(function (req, res, next) {
    console.log(`Time: ${Date.now()}\nRequest ${req}\nResponse${res}\n`);
    next();
  });

  app.post("/dud", (request, response) => {
    console.log(request.body);
    response.send(request.body);
});

app.listen(port, (err) => {
    if (err) {
         return console.log("Error", err);
    }
    console.log(`HTTP-server:${port}`);
});