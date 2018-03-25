// Define as dependências
const restful = require('node-restful')
const mongoose = require('mongoose')

// Define as informações de como serão armazenados os usuários
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, min: 6, max: 12, required: true }
})

// Exporta o módulo
module.exports = restful.model('User', userSchema)