var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const venda = require('../models/vendaSchema');
var authenticate = require('../authenticate');
const cors = require('./cors');

router.use(bodyParser.json());


/* GET users listing. */
router.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.corsWithOptions, authenticate.verifyUser, async (req, res, next) => {
  console.log(req.user);
  try{
    const vendaBanco = await venda.find({}).maxTime(5000);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(vendaBanco);
  }catch(err){
    next(err);
  }
})
.post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
  venda.create(req.body)
  .then((venda) => {
      console.log('venda criada ', venda);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(fornecedor);
  }, (err) => next(err))
  .catch((err) => next(err));
})

router.route('/:id')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.corsWithOptions, authenticate.verifyUser, async(req, res, next) => {
  let err;
  res.setHeader('Content-Type', 'application/json');
  try{
    const resp = await venda.findById(req.params.id);
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


.delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {

  venda.findByIdAndRemove(req.params.id)
  .then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp.id);
  }, (err) => next(err))
  .catch((err) => next(err));
})
.put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {

  venda.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, { new: true })
  .then((venda) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(venda);
  }, (err) => next(err))
  .catch((err) => next(err));
})

module.exports = router;
