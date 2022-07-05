const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = require('normalize-mongoose');
const { number } = require('yup');

const vendaSchema = new Schema({
  produto: {
    type: String,
    required: true,
},
  qtd: {
    type: number,
    required: true,
},
  lucro: {
    type: number,
    required: false,
  }
})

vendaSchema.plugin(normalize);

var venda = mongoose.model('venda', vendaSchema);

module.exports = venda;

