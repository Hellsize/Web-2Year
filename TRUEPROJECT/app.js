const express = require('express'),
    app = express(),
    session = require('express-session')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set("view engine", 'hbs') // Поставить движок шаблонизации
app.set("views", "./templates") // размещение шаблонов
app.use(express.static('templates'));
app.use(
    session({
        secret: 'you secret key',
        saveUninitialized: true,
    })
)
app.post('/ad', (req, res) => {
    req.session.showAd = req.body.showAd
    res.sendStatus(200)
  })

app.get('/', (req, res) => {
    response.render(__dirname + "/templates/index.hbs")
    console.log(req.session.showAd)

})


app.get("/login", function(request, response) {
    response.render(__dirname + "/templates/registr.hbs", )


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
    console.log(`Server listens http://${host}:${port}`)
})