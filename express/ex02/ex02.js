const express = require('express')
const server = express()


server.get('/', function (req, res, next) {
    
    next()
})
server.listen(3000, () => console.log('Executando...'))