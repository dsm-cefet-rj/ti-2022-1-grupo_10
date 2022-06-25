var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const MateriaPrima = require('../models/materiaPrimaSchema');

router.use(bodyParser.json());

/* GET users listing. */
router.route('/')
.get(async (req, res, next) => {

  try{
    const mpsBanco = await MateriaPrima.find({}).maxTime(5000);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(mpsBanco);
  }catch(err){
    next(err);
  }
})
.post((req, res, next) => {
  MateriaPrima.create(req.body)
  .then((materiaprima) => {
      console.log('Materia prima criada ', materiaprima);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(produto);
  }, (err) => next(err))
  .catch((err) => next(err));
})

router.route('/:id')
.get((req, res, next) => {

  MateriaPrima.findById(req.params.id)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));


})
.delete((req, res, next) => {

  MateriaPrima.findByIdAndRemove(req.params.id)
  .then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp.id);
  }, (err) => next(err))
  .catch((err) => next(err));
})
.put((req, res, next) => {

  MateriaPrima.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, { new: true })
  .then((materiaprima) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(produto);
  }, (err) => next(err))
  .catch((err) => next(err));
})

module.exports = router;