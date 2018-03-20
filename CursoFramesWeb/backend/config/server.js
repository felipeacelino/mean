// Define a porta do servidor
const port = 3003

// Define as dependências
const bodyParser = require('body-parser')
const express = require('express')
// Cria o servidor
const server = express()
// Define as configurações de CORS
const allowCors = require('./cors')

// Adiona o 'bodyParser.urlencoded' para todas requisições vindas de formulários
server.use(bodyParser.urlencoded({ extended: true }))
// Adiona o 'bodyParser.json' para todas requisições vindas como JSON
server.use(bodyParser.json())
// Adiona o 'CORS' para todas requisições
server.use(allowCors)

// Inicializa o servidor
server.listen(port, () => console.log(`BACKEND is running on port ${port}.`))

// Exporta o módulo
module.exports = server