const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = require('normalize-mongoose');


const vendaSchema = new Schema({
  produto: {
    type: mongoose.Schema.Types.String, 
    ref: 'Produtos' 
},
  qtd: {
    type: Number,
    required: true,
},
  lucro: {
    type: Number,
    required: false,
  }
})

vendaSchema.plugin(normalize);

var venda = mongoose.model('venda', vendaSchema);

module.exports = venda;

