// Carrega o 'Express'
const express = require('express')

// Exporta o módulo
module.exports = function(server) {
    
    // API Routes
    const router = express.Router()

    // Passa o 'router' para o server
    server.use('/api', router)

    // Importa o service 'billingCycleService'
    const billingCycleService = require('../api/billingCycle/billingCycleService')

    // Registra a rota so serviço 'billingCycleService'
    billingCycleService.register(router, '/billingCycles')

}
