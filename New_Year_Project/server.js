const express = require("express")
const hbs = require("hbs");
const app = express();

app.set("view engine",'hbs') // Поставить движок шаблонизации
app.set("views","./templates") // размещение шаблонов
app.use(express.static('templates'));
games ={
"1":{
"game": "aloha",
"data": "22.04.2005",
"price":"500",

},
"2":{                    // testovo
    "game": "hola",
    "data": "22.12.2020",
    "price":"1000",
},

}





app.get("/",function(request,response){
    response.render(__dirname+"/templates/index.hbs")
       
    
    });
    
    
app.get("/profile",function(request,response){
    response.render(__dirname+"/templates/anketa.hbs")
       
    
    });
    
app.get("/create_game",function(request,response){
    response.render(__dirname+"/templates/game.hbs")
       
    
    });
    
    app.get("/game/invite",function(request,response){
        response.render(__dirname+"/templates/invite.hbs")
           
        
        });

        app.get("/game/anketa",function(request,response){
            response.render(__dirname+"/templates/game_anketa.hbs")
               
            
            });

            app.get("/game",function(request,response){
                
                response.render(__dirname+"/templates/infogame.hbs")
                
                });

                app.get("/reg",function(request,response){
                    response.render(__dirname+"/templates/registr.hbs")
                       
                    
                    });

app.listen(3000,function(){
    console.log("server is on")
})