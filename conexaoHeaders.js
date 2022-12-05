
var express = require('express');

var app = express();

app.listen(8081);

app.get('/',(request,response)=>{
    return response.send('Olá Mundo!');
});

app.get('/user',(request,response)=>{
    return response.send('Hello World!');
});

app.get('/falha',(request,response)=>{
    return response.status(404).send('Falha ao encontrar a pagina!');
});

app.get('/login',(request,response)=>{
    return response.redirect('/user');
});

