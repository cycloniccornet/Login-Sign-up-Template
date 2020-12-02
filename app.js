const express = require('express');
const app = express();

const fs = require('fs');

// Making variables for footers and headers.
const header = fs.readFileSync(__dirname + "/public/header/header.html").toString();
const footer = fs.readFileSync(__dirname + "/public/footer/footer.html").toString();

const login = fs.readFileSync(__dirname + "/public/login/login.html").toString();
const signup = fs.readFileSync(__dirname + "/public/signup/signup.html").toString();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    return res.send(header +  + footer);
});

app.get("/login", (req, res) => {
    return res.send(header + login + footer);
});

app.get("/register", (req, res) => {
    return res.send(header + signup + footer);
});


const port = process.env.PORT || 8080;

app.listen(port, (error) =>{
    if (error){
        console.log( "Server could not start.. Error: " + error);
    }
    console.log("Server started on port", Number(port))
});