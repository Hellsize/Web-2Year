const express = require("express"),
    app = express(),
    session = require('express-session')
const hbs = require("hbs");
<<<<<<< HEAD
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
    session({
        secret: 'you secret key',
        saveUninitialized: true,
    })
)

app.set("view engine", 'hbs') // Поставить движок шаблонизации
app.set("views", "./templates") // размещение шаблонов
app.use(express.static('templates'));

=======
const app = express();
session = require('express-session'),
  redisStorage = require('connect-redis')(session),
  redis = require('redis'),
  client = redis.createClient()
app.set("view engine", 'hbs') // Поставить движок шаблонизации
app.set("views", "./templates") // размещение шаблонов
app.use(express.static('templates'));
app.use(bodyParser.json())
app.use(
    session({
      store: new redisStorage({
        host: host,
        port: 3000,
        client: client,
      }),
      secret: 'you secret key',
      saveUninitialized: true,
    })
  )

const urlencodedParser = express.urlencoded({ extended: true });
>>>>>>> 5655adf32f80401ccc6f0e1066a0d938e82e3bba

app.post("/server", urlencodedParser, function(req, res) {
    data = req.body
    res.send(`${req.body.label_game} ${req.body.date}`);
    console.log(data)
});

app.get("/", function(request, response) {
    response.render(__dirname + "/templates/index.hbs")
    console.log(req.session.showAd)
    res.sendStatus(200)
});


app.get("/login", function(request, response) {
<<<<<<< HEAD
    response.render(__dirname + "/templates/registr.hbs", )
    req.session.showAd = req.body.showAd
    res.sendStatus(200)
=======
    response.render(__dirname + "/templates/registr.hbs",)
   
>>>>>>> 5655adf32f80401ccc6f0e1066a0d938e82e3bba

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

    
});

app.listen(3000, function() {
    console.log(`Server listens `), 3000
})