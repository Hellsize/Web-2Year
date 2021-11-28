const express = require("express")
const hbs = require("hbs");
const app = express();
let klasses = {
    "klass":{
    "name":"Dmitrii Kolesnikov",
    "name":"Kirill Ignush",
    "name":"Mihail Iris"
},
"klass3":{
    "name":"Valera value",
    "name":"Maksim Val",
    "name":"Dionis ovp"
},
"klass_3": {
    "name":"Asterix OG",
    "name":"Asus Miracle",
    "name":"Msi Oi"
}
}
    

app.use(express.static(__dirname+"/"));

app.get("/",function(request,response){
response.sendFile(__dirname+"/index.html")
   

});
app.get("/test",function(req,res){
    let data=req.query;
    console.log(data);
   let klasses = JSON.stringify(dict);
  res.json("klasses")
})
app.listen(3001, function() {
    console.log("server is on")
})