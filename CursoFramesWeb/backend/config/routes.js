// Carrega o 'Express'
const express = require('express')
const auth = require('./auth')

// Exporta o módulo
module.exports = function(server) {

    // ROTAS ABERTAS (NÃO PRECISAM DE AUTENTICAÇÃO)
    const openApi = express.Router()
    server.use('/oapi', openApi)

    const AuthService = require('../api/user/authService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)

    // ROTAS PROTEGIDAS POR TOKEN
    const protectedApi = express.Router()
    server.use('/api', protectedApi)

    protectedApi.use(auth)

    // Importa o service 'billingCycleService'
    const billingCycleService = require('../api/billingCycle/billingCycleService')
    // Registra a rota so serviço 'billingCycleService'
    billingCycleService.register(protectedApi, '/billingCycles')

    // Importa o service 'billingSummaryService'
    const billingSummaryService = require('../api/billingSummary/billingSummaryService')
    // Realiza o mapeamento da rota 
    protectedApi.route('/billingSummary').get(billingSummaryService.getSummary)

}
