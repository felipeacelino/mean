// Importa as dependências
const _ = require('lodash')
const BillingCycle = required('../billingCycle/billingCycle')

// Define um serviço que retorna o sumário dos ciclos, ou seja, a soma de todos os créditos e débitos
function getSummary(req, res) {
    BillingCycle.aggregate({
        $project: { credit: { $sum: "$credits.value" }, debt: { $sum: "$debts.value" }}
    },{
        $group: { _id: null, credit: { $sum: "$credit" }, debt: { $sum: "$debt" }}
    },{
        $project: { _id: 0, credit: 1, debt: 1 }
    }, function(error, result) {
        // Realiza um tratamento de erros para que os mesmos sejam retornados de forma mais padronizada
        if (error) {
            res.status(500).json({ errors: [error] })
        } 
        // Retorna o sumário
        else {
            res.json(_.defaults(result[0], { credit: 0, debt: 0 }))
        }
    })
}

// Exporta o módulo
module.exports = { getSummary }