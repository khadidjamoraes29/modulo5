
const express = require('express')
const bodyParser = require("body-parser");
const app = express ();
const port = 8888
const routes = require("./rotas/rotas.js")

app.use (bodyParser.json());
app.use (bodyParser.urlencoded({extended: true}));

// Utilizando o routes
routes(app)

const server = app.listen(8888, function(){
    console.log("App rodando na porta.", server.address().port);
});
