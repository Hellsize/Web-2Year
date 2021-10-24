const exp = require("constants");
const express = require("express");

const app = express();
const router = express.Router();
app.get("/", function(request, response) {

    response.sendFile(__dirname + "/index1.html");
    respons.send();

});

app.get("/about", function(request, response) {
    response.sendFile(__dirname + "/index2.html");

});

app.use("/newuser/:name/:year", function(request, response) {
    let name = request.params.name;
    let year = Number(request.params.name);
    let age = 2021 - year;
    response.send("Привет, ${name}! Ты родился в ${year} году, тебе ${age}")
});

app.listen(port = 3000, function() {
    console.log("Сервер забущен")
})