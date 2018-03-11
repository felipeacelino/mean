// Carrega o 'mongoose'
const mongoose = require('mongoose')

// Conecta com o banco de dados (MongoDB) e retorna para o 'module.exports'
module.exports = mongoose.connect('mongodb://localhost/db_finance')

// Define uma mensagem de validação personalizada para os atributos 'required'
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."