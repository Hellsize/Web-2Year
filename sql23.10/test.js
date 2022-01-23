const sq = require("sqlite3");
const express = require("express");
const { append } = require("express/lib/response");

async function getdata() {
    let data;
    let db = new sq.Database("alabama.db")

    let sqlq = "SELECT * FROM users";
    let prom = new Promise((resolve, reject) => {
        db.all(sqlq, [], (err, rows) => {
            if (err) {
                reject(err);
                //console.log(err);
            } else {
                {
                    resolve(rows);
                    // console.log(row.name)
                };
            };
        });
    });
    data = await prom;
    // db.all()-  выгрузить все записи из таблицы, db.each() -перебрать все записи
    db.close()
    return data;

}

let app = express();
app.get("/", (request, response) => {
    getdata().then((data) => {
        response.send(JSON.stringify(data));
    })

});

app.listen(3000);