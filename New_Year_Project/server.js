const express = require("express")
const hbs = require("hbs");
const app = express();

app.set("view engine",'hbs') // Поставить движок шаблонизации
app.set("views","./templates") // размещение шаблонов
app.use(express.static('templates'));


app.get("/",function(request,response){
    response.sendFile(__dirname+"/index.html")
       
    
    });


app.listen(3000,function(){
    console.log("server is on")
})