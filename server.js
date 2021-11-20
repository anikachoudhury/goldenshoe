const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "loginSystem"
});

app.post('/register', (req, res) => {

    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    db.query(
        "INSERT INTO userDetails (name, email, password) VALUES (?,?,?)",
    [name, email, password],
    (err, results) => {
        console.log(results);
    });
})

app.post('/login', (req, res) => {
    const email = req.body.email
    const password = req.body.password

    db.query(
        "SELECT * FROM userDetails WHERE email = ? AND password = ?",
    [email, password],
    (err, results) => {
        if (err) {
            res.send({err: err});
        } 

        if (results.length > 0) {
            res.send(results);
        } else {
            res.send({ message: "Wrong email/ password combination" });
        }
    });
})

app.listen(3001, () => {
    console.log("running server")
});