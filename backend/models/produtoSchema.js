const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = require('normalize-mongoose');

const produtoSchema = new Schema({
    nomeProduto: {
        type: String,
        required: true,
    },
    qtdProduto: {
        type: String,
        required: true,
    },
    custoProduto: {
        type: String,
        required: true,
    },
    valorProduto: {
        type: String,
        required: true,
    },
    Vendidos: {
        type: Number,
        required: false,
    },
    Produzidos: {
        type: Number,
        required: false,
    }
})

produtoSchema.plugin(normalize);

var Produtos = mongoose.model('Produto', produtoSchema);

module.exports = Produtos;