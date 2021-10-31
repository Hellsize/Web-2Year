const express = require("express")
const hbs = require("hbs");
const app = express();

app.set("view engine",'hbs') ;// Поставить движок шаблонизации
app.set("views","./templates"); // размещение шаблонов
app.use(express.static('static'));
hbs.registerPartials(__dirname + "/templates/partials")
 users = {
    "1":{
    "name":"Mr.Beb",
    "lvl":"39 lvl",
    "inventory":"30 items",
    "money":"1000 $",
    "avatar":"pasta.jpg",
    },
    "2":{
        "name":"gtx1070",
        "lvl":"25 lvl",
        "inventory":"10 items",
        "money":"300 $",
        "avatar":"gtx.jpg"
    },
    "3":{
        "name":"admin",
        "lvl":"99 lvl",
        "inventory":"9 items",
        "money":"999 $",
        "avatar":"none.jpg",
        },
        "4":{
            "name":"user534221",
            "lvl":"1 lvl",
            "inventory":"1 items",
            "money":"1 $",
            "avatar":"face.jpg"
        },
        "5":{
            "name":"ainiboy",
            "lvl":"53 lvl",
            "inventory":"15 items",
            "money":"500 $",
            "avatar":"baltika.jpg"
        },
       
       

   
   };
   users_inventory = {
    "1":{
        "enam":"bean",
    "cost":"125$",
    "description":"Bean its very Bean",
    "image":"item.png",
    
    },
    "2":{
        "enam":"gtx1070",
        "cost":"700$",
    "description":"its you videocard",
    "image":"item.png",
    },
    "3":{
        "enam":"SERVER",
        "cost":"999$",
        "description":"You server",
        "image":"item.png",
        },
        "4":{
            "enam":"Penny",
            "cost":"1$",
    "description":"one bucks",
    "image":"item.png",
        },
        "5":{
            "enam":"pivo",
            "cost":"300$",
    "description":"Pivo",
    "image":"item.png",
        },
       
       

   
   }
   users_list = {
    "1":{
    "name":"Mr.Beb",
    "lvl":"39 lvl",
    
    },
    "2":{
        "name":"gtx1070",
        "lvl":"25 lvl",
     
    },
    "3":{
        "name":"admin",
        "lvl":"99 lvl",
      
        },
        "4":{
            "name":"user534221",
            "lvl":"1 lvl",
          
        },
        "5":{
            "name":"ainiboy",
            "lvl":"53 lvl",
           
        },
       
       

   
   };


app.get("/",function(req,res){
    

res.render("index.hbs",users);


})

app.get("/user/:id",function(req,res){

    let id = req.params.id;
//    res.send(users[id].name);
   res.render("index.hbs",users[id]);

});

app.get("/user/:id/inventory",function(req,res){

    let id = req.params.id;
//    res.send(users[id].name);
   res.render("inventory.hbs",users_inventory[id]);

});


app.get("/users",function(req,res){

    
//    res.send(users[id].name);
   res.render("users.hbs",users_list);

});


app.listen(3000,function(){
    console.log("server is on")
})