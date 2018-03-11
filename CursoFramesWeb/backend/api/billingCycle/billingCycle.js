// Define as dependências
const restful = require('node-restful')
const mongoose = restful.mongoose

// Define as informações de como serão armazenados os créditos
const creditSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    value: { 
        type: Number, 
        min: 0, 
        required: true 
    }
})

// Define as informações de como serão armazenados os débitos
const debtSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    value: { 
        type: Number, 
        min: 0, 
        required: true 
    },
    status: { 
        type: String, 
        required: false, 
        uppercase: true,
        enum: ['PAGO', 'PENDENTE', 'AGENDADO'] 
    }
})

// Define as informações de como serão armazenados os ciclos de pagamentos
const billingCycleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    month: {
        type: Number,
        min: 1,
        max: 12,
        required: true
    },
    year: {
        type: Number,
        min: 1970,
        max: 2100,
        required: true
    },
    credits: [creditSchema],
    debts: [debtSchema]
})

// Exporta o módulo
module.exports = restful.model('BillingCycle', billingCycleSchema)