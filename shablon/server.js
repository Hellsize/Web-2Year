const express = require("express")
const hbs = require("hbs");
const app = express();

app.set("view engine",'hbs') // Поставить движок шаблонизации
app.set("views","./templates") // размещение шаблонов
app.use(express.static('templates'));

app.get("/",function(request,response){

    let data = {
        "buddy":"Okey",
"surname":"Oke" ,
"age":"21",
"height":"150ft",
"list":["Булочка с пицей","1060","3070","deneg 0","shrixel 6"],
"keys":{
    "Нащвание":"fable",
    "жанр": "fantazy",
    "платформа":"pc"
}
    }
    response.render("index.hbs",data);
});
    

app.get("/img",function(request,response){

    response.render("index.hbs",data);
});






// на странице были элементы шаблона ,которые вписывают фамилию, возраст  и рост человека . Эти данные нужно передавать  с сервера в шаблон


app.listen(3000,function(){
    console.log("server is on")
})