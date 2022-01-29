const express = require('express')
const server = express()


server.get('/', function (req, res, next) {
    console.log('Start...');
    next()
    console.log('End...');
})

server.get('/', function (req, res) {
    console.log('Resposta...');
    res.send('<h1>Olá Express</h1>');
})
server.listen(3000, () => console.log('Executando...'))