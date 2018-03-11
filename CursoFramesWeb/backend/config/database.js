// Carrega o 'mongoose'
const mongoose = require('mongoose')

// Conecta com o banco de dados (MongoDB) e retorna para o 'module.exports'
module.exports = mongoose.connect('mongodb://localhost/db_finance')

// Define as mensagens de validação personalizadas
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínino de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "O '{VALUE}' não é válido para o atributo '{PATH}'."