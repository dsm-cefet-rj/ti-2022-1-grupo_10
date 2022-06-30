var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const MateriaPrima = require('../models/materiaPrimaSchema');
var authenticate = require('../authenticate');
const cors = require('./cors');

router.use(bodyParser.json());

/* GET users listing. */
router.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.corsWithOptions, authenticate.verifyUser, async (req, res, next) => {
  console.log(req.user);

  try{
    const mpsBanco = await MateriaPrima.find({}).maxTime(5000);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(mpsBanco);
  }catch(err){
    next(err);
  }
})
.post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
  MateriaPrima.create(req.body)
  .then((materiaprima) => {
      console.log('Materia prima criada ', materiaprima);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(materiaprima);
  }, (err) => next(err))
  .catch((err) => next(err));
})

router.route('/:id')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.corsWithOptions, authenticate.verifyUser, async(req, res, next) => {
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

.delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {

  MateriaPrima.findByIdAndRemove(req.params.id)
  .then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp.id);
  }, (err) => next(err))
  .catch((err) => next(err));
})
.put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {

  MateriaPrima.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, { new: true })
  .then((materiaprima) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(materiaprima);
  }, (err) => next(err))
  .catch((err) => next(err));
})

module.exports = router;
