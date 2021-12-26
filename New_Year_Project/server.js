const express = require("express")
const hbs = require("hbs");
const app = express();

app.set("view engine", 'hbs') // Поставить движок шаблонизации
app.set("views", "./templates") // размещение шаблонов
app.use(express.static('templates'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/", function(request, response) {
    response.render(__dirname + "/templates/index.hbs")


});


app.get("/login", function(request, response) {
    response.render(__dirname + "/templates/registr.hbs",)
    res.render(__dirname + "/templates/registr.hbs", { name: req.body.name });

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
   
    response.render(__dirname + "/templates/infogame.hbs",)

    response.render('id: ' + req.query.id,);
});




app.listen(3000, function() {
    console.log("server is on")
});