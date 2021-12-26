const express = require("express")
const hbs = require("hbs");
const app = express();

app.set("view engine", 'hbs') // Поставить движок шаблонизации
app.set("views", "./templates") // размещение шаблонов
app.use(express.static('templates'));

users = {
    "1": {
        "name": "1231313",
        "password": "23123"
    }

}
games = {
    "1": {
        "game": "aloha",
        "data": "22.12.2022",
        "price": "500",

    },

}

const urlencodedParser = express.urlencoded({ extended: true });

app.post("/server", urlencodedParser, function(req, res) {
    data = req.body
    res.send(`${req.body.label_game} ${req.body.date}`);
    console.log(data)
});

app.get("/", function(request, response) {
    response.render(__dirname + "/templates/index.hbs")


});


app.get("/login", function(request, response) {
    response.render(__dirname + "/templates/registr.hbs", users)
    let json = JSON.stringify(users);
    console.log(users)

});

app.get("/profile", function(request, response) {
    response.render(__dirname + "/templates/anketa.hbs")


});

app.get("/create_game", function(request, response) {
    response.render(__dirname + "/templates/game.hbs")


});

app.get("/game/invite", function(request, response) {
    response.render(__dirname + "/templates/invite.hbs")


});

app.get("/game", function(request, response) {

    response.render(__dirname + "/templates/infogame.hbs")

    console.log
});




app.listen(3000, function() {
    console.log("server is on")
});