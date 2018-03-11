// Importa o 'BillingCycle'
const BillingCycle = require('./billingCycle')
// Importa o 'lodash'
const _ = require('lodash')

// Métodos que irão ser criados na API 
BillingCycle.methods(['get', 'post', 'put', 'delete'])

// Configurações adicionais
BillingCycle.updateOptions({ 
    new: true,              // Ao alterar um registro é retornado o registro novo ao invés do antigo
    runValidators: true    // Habilita as validações pro 'update'
})

// Forma de tratar os erros de validação para formatalos
BillingCycle.after('post', sendErrorsOrNext)
            .after('put', sendErrorsOrNext)

// Função para verificar se existem erros de validação
function sendErrorsOrNext(req, res, next) {
    // Obj do 'node-restful' que contém os erros
    const bundle = res.locals.bundle

    if (bundle.errors) {
        var errors = parseErrors(bundle.errors)
        res.status(500).json({ errors })
    } else {
        next()
    }
}

// Função para formatar os errors
function parseErrors(nodeRestfulErrors) {
    const errors = []
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors
}

// Define um serviço que retorna a quantidade de registros
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