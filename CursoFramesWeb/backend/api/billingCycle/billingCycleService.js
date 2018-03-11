// Importa o 'BillingCycle'
const BillingCycle = require('./billingCycle')

// Métodos que irão ser criados na API 
BillingCycle.methods(['get', 'post', 'put', 'delete'])

// Exporta o módulo
module.exports = BillingCycle