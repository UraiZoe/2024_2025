const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());

app.listen(6666, ()=>{
        console.log("Szerver a 6666 porton fut!🏃‍♀️‍➡️");
    }   
);