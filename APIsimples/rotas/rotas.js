
const faker = require ("faker")

let appRouter = function(app){

    app.get("/", function(req, res) {
        res.status(200).send("Bem vindo ao nosso web service!");    
    });    

    app.get("/usuario/:num", function(req, res) {
        let usuarios = []
        let num = req.params.num;

        if (isFinite(num) && num > 0) {
            for (i = 0; i <= num-1; i++) {
                usuarios.push ({
                    primeiroNome: faker.name.firstName(),
                    ultimoNome: faker.name.lastName(),
                    username: faker.internet.userName(),
                    email: faker.internet.email(),
                });
            }

        res.status(200).send(dadosUsuarios);
    
    } else {
        res.status(400).send({message: "numero de usuarios invalido"});        
    }
    });

    app.post("/usuarios", function (req, res){
        const usuario = req.body.usuarios;

        if (usuario.primeiroNome != undefined && usuario.ultimoNome != undefined && usuario.userName != undefined && usuario.email != undefined){
            res.status(201).send({message: "usuario salvo com sucesso"});
        } else {
            res.status(400).send({message: "faltam alguns campos do usuario"});
        }         
    })
}

module.exports = appRouter