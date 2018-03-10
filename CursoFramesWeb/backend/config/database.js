// Carrega o 'mongoose'
const mongoose = require('mongoose')

// Conecta com o banco de dados (MongoDB) e retorna para o 'module.exports'
module.exports = mongoose.connect('mongodb://localhost/db_finance')