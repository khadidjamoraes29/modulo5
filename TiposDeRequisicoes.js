
var express = require('express');

var app = express();

app.listen(8888);

app.get('/',(request,response)=>{
    return response.send('Olá Mundo!');
});

app.get('/user',(request,response)=>{
    return response.send('Hello World!');
});

app.post('/', function (req, res) {
    return res.send('realizando um POST');
});

app.put('/user', function (req, res) {
    res.send('atualizando a rota: /user');
});

app.delete('/user', function (req, res) {
    res.send('deletando a rota: /user');
});