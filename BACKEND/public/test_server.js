const exp = require("constants");
const express = require("express");

const app = express();
// https://localhost:3000/about
// http - протокол 
// localhost :3000  - адрес/домен
// /about -> параметр запроса

let users = {
"admin":"qwerty12345",
"maks":"табуретка"

}


app.use(function(req,res, next){
next();
})



const router = express.Router();
app.get("/", function(request, response) {

    response.sendFile(__dirname + "public/index1.html");
    respons.send("Ok");

});

app.get("/test",function(req,res){
    let data = req.query;
    let login = data.login;
    let password = data.password;
    if(login in users){
        if(user[login]== pass){
        res.send("Welcome")
        }
    } else{
        res.sendStatus(418);
        res.send("I dont know you")
    }
    console.log(data)
    res.send("ok")

});

app.get("/pages/:page", function(req,res){
    let file = req.params.page + ".html"

    res.sendFile(__dirname+file)

})

app.listen(port = 3000, function() {
    console.log("Сервер забущен")
    console.log(__filename,__dirname);
})