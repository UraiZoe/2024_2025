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

app.listen(3001, () => {
  console.log(`Example app listening on port 3001`)
})