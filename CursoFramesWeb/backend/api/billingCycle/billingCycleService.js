// Importa o 'BillingCycle'
const BillingCycle = require('./billingCycle')

// Métodos que irão ser criados na API 
BillingCycle.methods(['get', 'post', 'put', 'delete'])

// Configurações adicionais
BillingCycle.updateOptions({ 
    new: true,              // Ao alterar um registro é retornado o registro novo ao invés do antigo
    runValidators: true    // Habilita as validações pro 'update'
})

// Exporta o módulo
module.exports = BillingCycle