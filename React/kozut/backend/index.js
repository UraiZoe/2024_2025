const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());
 
const db = mysql.createConnection({
    user: "root",
    host: "127.0.0.1",
    port: 3306,
    password: "",
    database: "kozutak"
});

app.get("/", (req, res) => {
    res.send("panda");
});
 
app.get("/regiok", (req, res) => {
    const sql = "SELECT * FROM regiok";
    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    });
});
 
app.get("/regiokwhere", (req, res) => {
    const sql = "SELECT * FROM regiok WHERE regiok.Rid = 8;";
    db.query(sql, (err, result) => {
        if (err) {
            return res.json(err);
        }
        return res.json(result);
    });
});

app.post("/ujregio", (req, res) => {
    const sql = "INSERT INTO `regiok` (`Rid`, `regionev`, `regio_tipusa`) VALUES (?, ?, ?), (?, ?, ?)";
    const values = ["10", "Budapest", "főváros", "11", "Pest", "régió"];
   
    db.query(sql, values, (err, result) => {
        if (err) {
            //return res.json(err);
            console.error("Hiba történt: ", err);
            return res.status(500).json({error: "Adatbázis hiba történt!"});
        }
        //return res.json(result);
        return res.status(200).json({message: "Sikeres beszúrás!", result});
    });
});

app.delete("/regiotorlese/:id", (req, res) => {
    const sql = "DELETE FROM `regiok` WHERE `Rid` = ?";
    db.query(sql, (err, result) => {
        if (err) {return res.json(err);}
        return res.json(result);
    });
});


app.listen(3001, () => {
    console.log("A szerver elindult a 3001-es porton.");
});
 