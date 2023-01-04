
const express = require('express')
const router = express.Router();

router
    .get("/jogos", (req, res) => {
        console.log("busca")
    })

    .get("/jogos/2", (req, res) => {
        console.log("busca específica")
    })

    .post("/jogos", (req, res) => {
        console.log("Cadastro de jogos")
    })

    .put("/jogos/2", (req, res) => {
        console.log("atualização")
    })

    .delete("/jogos/2", (req, res) => {
        console.log("jogo deletado")
    })

module.exports = router;