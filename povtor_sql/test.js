const  express = require("express");
const app = express();
const nunjucks = require("nunjucks");
nunjucks.configure('templates',{
    autoescape:true,
    express:app
})
const sqlite3 = require('sqlite3').verbose();
async function getdata(typeq,dataq) {
    let typequeryes = {
        "all":"SELECT * FROM users",
        "search":"SELECT * FROM users WHERE id=?"
    }
    let sqlq = typequeryes[typeq];

let db = new sqlite3.Database("alabama.db")
let promise = new Promise((resolve, reject) => {
  //  let sqlq = "SELECT * FROM users";
    db.all(sqlq, dataq, (err, rows) => {
        if (err) {
            reject(err);
           
        } else {
            {
                resolve(rows);
                
            };
        };
    });
});
result = await promise;
db.close()
return result;
}

app.get("/",function (request,response) {
    getdata("all",[]).then((data) =>{
let templateData = {
    data:{ 
    "colums": Object.keys(data[0]),
"rows":data}}
    });
    response.render('index.html',templateData);
});
app.get("/favicon.ico",(req,res)=>{
    res.status("404")
});
app.get("/:typeq",function (req,res) {
    let data = Object.values(req.query);
    let typeq= req.params.typeq
    getdata(typeq,data).then((data) =>{
        let templateData = {
            data:{ 
            "colums": Object.keys(data[0]),
        "rows":data}}
            });
            response.render('index.html',templateData);
        });
    

app.listen(3000);