const sqlite= require("sqlite3");
let db = new sqlite.Database("project_quiz.db",(err)=>{
    if(err){
        console.error(err.message);
    } else {
        console.log("Бд подключен");
    }
});

db.serialize(()=>{
    let query ="SELECT * FROM Users";// sql запрос
db.each(query,(err,row)=>{
if(err){
    console.error(err.message);
} else{
    console.log(row);
}
   })
})


db.close();