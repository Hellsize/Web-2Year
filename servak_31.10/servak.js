const { response } = require("express");
const express = require("express")
const hbs = require("hbs");
const app = express();

app.set("view engine", 'hbs'); // Поставить движок шаблонизации
app.set("views", "./templates"); // размещение шаблонов
app.use(express.static(__dirname + "/templates/static"))
hbs.registerPartials(__dirname + "/templates/partials")
users = {
    "1": {
        "name": "Mr.Beb",
        "lvl": "39 lvl",
        "inventory": "30 items",
        "money": "1000 $",
        "avatar": "bean.jpg",
    },
    "2": {
        "name": "gtx1070",
        "lvl": "25 lvl",
        "inventory": "10 items",
        "money": "300 $",
        "avatar": "gtx1070_avatar.jpg"
    },
    "3": {
        "name": "admin",
        "lvl": "99 lvl",
        "inventory": "9 items",
        "money": "999 $",
        "avatar": "admin.jpg",
    },
    "4": {
        "name": "user534221",
        "lvl": "1 lvl",
        "inventory": "1 items",
        "money": "1 $",
        "avatar": "user.png"
    },
    "5": {
        "name": "ainiboy",
        "lvl": "53 lvl",
        "inventory": "15 items",
        "money": "500 $",
        "avatar": "Nikita.png"
    },




};
items = {
    "1": {
        "name": "bean",
        "cost": "125$",
        "description": "Bean its very Bean",
        "image": "bean_item.jpg",

    },
    "2": {
        "name": "gtx1070",
        "cost": "700$",
        "description": "its you videocard",
        "image": "gtx1070.jpg",
    },
    "3": {
        "name": "SERVER",
        "cost": "999$",
        "description": "You server",
        "image": "server.jpg",
    },
    "4": {
        "name": "Penny",
        "cost": "1$",
        "description": "one bucks",
        "image": "penny.jpg",
    },
    "5": {
        "name": "pivo",
        "cost": "300$",
        "description": "Pivo",
        "image": "baltika.jpg",
    },

}




app.get("/", function(req, res) {


    res.render("index.hbs", users);


})

app.get("/user/:id", function(req, res) {

    let id = req.params.id;
    //    res.send(users[id].name);
    res.render("index.hbs", users[id]);

});

app.get("/user/:id/inventory", function(req, res) {

    let id = req.params.id;
    //    res.send(users[id].name);
    res.render("inventory.hbs", users[id]);

});

app.get("/item/:id", function(req, res) {

    let id = req.params.id;
    //    res.send(users[id].name);
    res.render("item.hbs", items[id]);

});


app.get("/users", function(req, res) {
    switch ("name") {
        case "Mr.Beb":
          response.send("Mr.Beb");
          break;
        case "gtx1070":
            response.send("gtx1070");
          break;
        case "admin":
            response.send("admin");
          break;
        case "user534221":
            response.send("user534221");
          break;
        case "ainiboy":
            response.send("ainiboy");
          break;
      }
    //    res.send(users[id].name);
    res.render("users.hbs", users);

});

app.get("/items", function(req, res) {
    switch ("name") {
        case "bean":
          response.send("bean");
          break;
        case "gtx1070":
            response.send("gtx1070");
          break;
        case "SERVER":
            response.send("SERVER");
          break;
        case "Penny":
            response.send("Penny");
          break;
        case "pivo":
            response.send("pivo");
          break;
      }
    //    res.send(users[id].name);
    res.render("items.hbs", items);

});

app.listen(3000, function() {
    console.log("server is on")
})