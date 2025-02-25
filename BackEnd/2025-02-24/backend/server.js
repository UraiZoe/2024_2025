const express = require('express')
var cors = require('cors')
const app = express()
const mysql = require('mysql')

app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    database: "fogado",
    user: "root",
    password: ""
});

app.get('/', (req, res) => {
  res.send('Hello Bástya!')
})

app.get('/Szobak', (req, res) => {
    const sqlParancsok = "SELECT `sznev`, `agy` FROM `szobak`;"
    db.query(sqlParancsok, (err, result)=> {
        res.json(result);
    })
})
app.get('/SelectSzobak', (req, res) => {
    const sqlParancsok = "SELECT `szazon`, `sznev` FROM `szobak`;"
    db.query(sqlParancsok, (err, result)=> {
        if(err){
            res.json(err);
        }
        res.json(result);  
    })
})
app.get('/SzobakFoglaltsaga', (req, res) => {
    const sqlParancsok = "SELECT szobak.sznev, COUNT(vendeg) AS vendegekszama, SUM(tav - erk) AS szallas FROM szobak INNER JOIN foglalasok ON szobak.szazon = foglalasok.szoba GROUP BY sznev;"
    db.query(sqlParancsok, (err, result)=> {
        if(err){
            res.json(err);
        }
        res.json(result);  
    })
})

app.get('/torpe/:id', (req, res) => {
    const sqlParancsok = "SELECT `vnev`, `erk`, `tav` FROM szobak INNER JOIN foglalasok ON szobak.szazon = foglalasok.szoba INNER JOIN vendegek ON vendegek.vsorsz = foglalasok.vendeg WHERE szobak.szazon =?;"
    db.query(sqlParancsok, req.params.id, (err, result)=> {
        if(err){
            res.json(err);
        }
        res.json(result);
    })
})

app.listen(3001, () => {
  console.log(`Example app listening on port 3001`)
})