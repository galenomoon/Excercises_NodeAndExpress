const express = require('express')
const server = express()


server.route('/clientes')
.get((req, res) => res.send('Lista de Clientes')) //consulta
.post((res, res) => res.send('Novo Cliente')) //adiciona
.put((res, res) => res.send('Alterar Cliente')) //altera
.delete((res, res) => res.send('Excluir Cliente')) //deleta

server.listen(3000, () => console.log('Executando...'))