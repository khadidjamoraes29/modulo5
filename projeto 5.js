
var express = require('express');

var app = express();

app.listen(8888);

app.get('/nomeAluno',(request,response)=>{
    return response.send('O nome da Aluna é Khadidja');
});

app.get('/idadeAluno',(request,response)=>{
    return response.send('A idade da aluna Khadidja é 19');
});

app.post('/nomeAluno', function (req, res) {
    return res.send('adicionando o nome da aluno');
});

app.put('/nomeAluno', function (req, res) {
    res.send('atualizando o nome do aluno');
});

app.delete('/nomeAluno', function (req, res) {
    res.send('deletando o nome do aluno');
});