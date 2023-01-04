
const express = require('express')
const jogos = require("./jogosRoutes.js")

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({título: "Curso de Node"})
    })


    app.use (
        express.json(),
        jogos
    )
}

module.exports = routes; 