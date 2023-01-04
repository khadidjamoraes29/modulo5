const express = require('express')
const bodyParser = require("body-parser");
const app = express ();
const port = 8080
const routes = require("./index.js")

app.use (bodyParser.json());

// Utilizando o routes
routes(app)

app.listen(port, () => {
    console.log (`Aplicativo executado na porta ${port}`)
})