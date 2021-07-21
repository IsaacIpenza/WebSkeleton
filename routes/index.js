var express = require("express");
var app = express();

app.get("/", (req,res) => {

    // Logica para obtener el nombre del usuario
    var user = "Pedro";

    res.render("pages/home", {title: 'Home', usuario: user});
});

module.exports = app;