const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = require('normalize-mongoose');

const fornecedoresSchema = new Schema({
    nomeFornecedor: {
        type: String,
        required: true,
    },
    estadoFornecedor: {
        type: String,
        required: true,
    },
    bairroFornecedor: {
        type: String,
        required: true,
    },
    urlFornecedor: {
        type: String,
        required: true,
    }
})

fornecedoresSchema.plugin(normalize);

var Fornecedores = mongoose.model('Fornecedores', fornecedoresSchema);

module.exports = Fornecedores;
