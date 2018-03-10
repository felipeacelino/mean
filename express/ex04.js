const express = require('express')
const server = express()

server.route('/clientes')
    .get((req, res) => res.send('<h1>Lista de clientes</h1>'))
    .post((req, res) => res.send('<h1>Novo cliente</h1>'))
    .put((req, res) => res.send('<h1>Editar cliente</h1>'))
    .delete((req, res) => res.send('<h1>Remover cliente</h1>'))

server.listen(3000, () => console.log('Executando...'))