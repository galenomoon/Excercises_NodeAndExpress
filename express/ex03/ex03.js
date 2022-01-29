const express = require('express')
const server = express()

//qualquer caminho ao usar /api execute esse middleware
server.use('/api', function (req, res, next) {
    console.log('Start...');
    next()
    console.log('End...');
})

server.use('/api', function (req, res) {
    console.log('Resposta...');
    res.send('<h1>API</h1>');
})
server.listen(3000, () => console.log('Executando...'))