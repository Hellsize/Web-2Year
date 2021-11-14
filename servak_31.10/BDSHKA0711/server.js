const express = require("express")
const hbs = require("hbs");
const app = express();

app.use(express.static(__dirname+"/static"));

app.get("/",function(request,response){
response.sendFile(__dirname+"/templates/index.html")
   

});
app.listen(3000, function() {
    console.log("server is on")
})