var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Produtos = require('../models/produtoSchema');

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
.get(async(req, res, next) => {
  let err;
  res.setHeader('Content-Type', 'application/json');
  try{
    const resp = await Produtos.findById(req.params.id);
    if (resp!=null){
      res.statusCode=200;
      res.json(resp);
    }
    else{
      err={}
      res.statusCode=404;
      res.json({});
    }
    }
    catch(errParam){
    console.log(errParam);
    res.statusCode = 404;
    res.json({});
    }})


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