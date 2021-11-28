const express = require("express")
const hbs = require("hbs");
const app = express();
let names = {
    "Dmitro":"Beb"
}

app.use(express.static(__dirname+"/"));

app.get("/",function(request,response){
response.sendFile(__dirname+"/index.html")
   

});
app.get("/test",function(req,res){
    let data=req.query;
    console.log(data);
    if(data.name in names){
res.send("Hello,"+names[data.name])
    }else{
    res.send("Hello,Wolf ")}
    
})
app.listen(3000, function() {
    console.log("server is on")
})