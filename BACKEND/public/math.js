const exp = require("constants");
const express = require("express");

const app = express();

app.get("/", function(request, response) {

    response.sendFile(__dirname + "public/math.html");
    response.send("Ok");

});

app.get("/sum",function(req,res){
    let data = isNaN(req.query);
   let one = isNaN(data.one);
   let two = isNaN(data.two);
  


response.send(one+two);
})

app.get("/countries",function(req,res){
    let data = req.query;
   let ct = {
   countrie:data.countrie,
   capital:data.capital
   }
  



})

// app.get("/country/:country", function(req,res){
//    let file = req.params.page + ".html"
// res.redirect("/country/:"+country)
// country/Ukraine


  //  res.sendFile(__dirname+file)
//
//})



app.listen(port = 3005, function() {
    console.log("Сервер забущен")
    console.log(__filename,__dirname);
})