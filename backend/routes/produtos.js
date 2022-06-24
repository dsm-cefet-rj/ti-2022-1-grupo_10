var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Produtos = require('../models/produtos');

router.use(bodyParser.json());


/* GET users listing. */
router.route('/')
.get(async (req, res, next) => {

  try{
    const produtosBanco = await Produtos.find({}).maxTime(5000);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(produtosBanco);
  }catch(err){
    next(err);
  }
})
.post((req, res, next) => {
  Produtos.create(req.body)
  .then((produto) => {
      console.log('Produto criado ', produto);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(produto);
  }, (err) => next(err))
  .catch((err) => next(err));
})

router.route('/:id')
.get((req, res, next) => {

  Produtos.findById(req.params.id)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));


})
.delete((req, res, next) => {

  Produtos.findByIdAndRemove(req.params.id)
  .then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp.id);
  }, (err) => next(err))
  .catch((err) => next(err));
})
.put((req, res, next) => {

  Produtos.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, { new: true })
  .then((produto) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(produto);
  }, (err) => next(err))
  .catch((err) => next(err));
})

module.exports = router;
