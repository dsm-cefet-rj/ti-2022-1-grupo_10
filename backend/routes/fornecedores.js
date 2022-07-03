var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Fornecedores = require('../models/fornecedoresSchema');
var authenticate = require('../authenticate');
const cors = require('./cors');

router.use(bodyParser.json());


/* GET users listing. */
router.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.corsWithOptions, authenticate.verifyUser, async (req, res, next) => {
  console.log(req.user);
  try{
    const fornecedoresBanco = await Fornecedores.find({}).maxTime(5000);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(fornecedoresBanco);
  }catch(err){
    next(err);
  }
})
.post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
  Fornecedores.create(req.body)
  .then((fornecedor) => {
      console.log('Fornecedor criado ', fornecedor);
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
    const resp = await Fornecedores.findById(req.params.id);
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

  Fornecedores.findByIdAndRemove(req.params.id)
  .then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp.id);
  }, (err) => next(err))
  .catch((err) => next(err));
})
.put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {

  Fornecedores.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, { new: true })
  .then((fornecedor) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(fornecedor);
  }, (err) => next(err))
  .catch((err) => next(err));
})

module.exports = router;
