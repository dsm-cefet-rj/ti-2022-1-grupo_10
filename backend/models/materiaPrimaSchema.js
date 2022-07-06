const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = require('normalize-mongoose');

const materiaPrimaSchema = new Schema({
    tipo: {
        type: String,
        required: true,
    },
    qtd: {
        type: String,
        required: true,
    },
    fornecedor: {
        type: mongoose.Schema.Types.String, 
        ref: 'Fornecedores' 
    },
    custo: {
        type: String,
        required: true,
    },
    usos: {
        type: Number,
        required: false,
    },
})

materiaPrimaSchema.plugin(normalize);

var MateriaPrima = mongoose.model('MateriaPrima', materiaPrimaSchema);

module.exports = MateriaPrima;
