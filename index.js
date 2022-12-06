const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORTA = 8888;

let mensagem = [];

app.use(cors());

app.use(bodyParser.urlencoded({extend:false}));
app.use(bodyParser.json());

app.listen(PORTA,() =>{
  console.log(`Servidor Iniciado na porta ${PORTA}`);
});


  app.get('/listar/10/ver_mensagem', function (req, res) {
    res.send(mensagem);
  });

  app.post('/listar/10', function (req, res) {
    const texto = req.body;

    console.log(texto);
    mensagem.push(texto);

    res.send(`Mensagem inserida com sucesso`);

  });

  app.post('/listar/10/add', function (req, res) {
    const texto = req.body;

    console.log(texto);
    mensagem.push(texto);

    res.status(201).send(texto);

  });

  app.get('/listar/10/ver/:id', (req, res)=>{
    let id = req.params.id;

    if (id > 0 && id <= mensagem.length){
        res.status(200).send(mensagem[id-1]);
    } 
    else {
        res.status(404).send("Mensagem não encontrada");
    }
  });

  app.get('/listar/10', (req, res) =>{
    res.status(200).send(mensagem);
  })

  app.put('/listar/10/editar/:id', (req, res)=>{
    let id = req.params.id;

    if (id > 0 && id <= mensagem.length){
        let texto = req.body;
        mensagem[id-1] = texto;
        res.status(200).send(texto);
    } 
    else {
        res.status(404).send("Mensagem não encontrada");
    }
  });

  app.delete('/listar/10/remover/:id', (req, res)=>{
    let id = req.params.id;

    if (id > 0 && id <= mensagem.length){
      mensagem.splice(id-1,1);
        res.status(200).send('Mensagem Removido');
    } 
    else {
        res.status(404).send("Mensagem não encontrada");
    }
  });

  app.get('/listar/50', (req, res) =>{
    res.status(404).send("Página não encontrada");
  })

  app.all('*', (req, res)=>{
    res.status(404).send("Página não encontrada");
  });