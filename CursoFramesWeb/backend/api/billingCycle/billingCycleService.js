// Importa o 'BillingCycle'
const BillingCycle = require('./billingCycle')

// Métodos que irão ser criados na API 
BillingCycle.methods(['get', 'post', 'put', 'delete'])

// Configurações adicionais
BillingCycle.updateOptions({ 
    new: true,              // Ao alterar um registro é retornado o registro novo ao invés do antigo
    runValidators: true    // Habilita as validações pro 'update'
})

// Define uma nova rota que retorna a quantidade de registros
BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        // Realiza um tratamento de erros para que os mesmos sejam retornados de forma mais padronizada
        if (error) {
            res.status(500).json({ errors: [error] })
        } 
        // Retorna o valor de 'count'
        else {
            res.json({ value })
        }  
    })
})

// Exporta o módulo
module.exports = BillingCycle