var express = require('express');
var router = express.Router();

let materiasprimas = [
    {
      "id": 10,
      "tipo": "Fecho",
      "qtd": 300,
      "fornecedor": "FechosExpress",
      "custo": 0.15,
      "qtdUsos": 0
    },
    {
      "id": 11,
      "tipo": "Gancho",
      "qtd": 286,
      "fornecedor": "GanchosExpress",
      "custo": 0.1,
      "qtdUsos": 0
    }
  ]
/* GET users listing. */
router.route('/')
.get((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(materiasprimas);
})
.post((req, res, next) => {

  let proxId = 1 + materiasprimas.map(p => p.id).reduce((x, y) => Math.max(x,y));
  let materiaprima = {...req.body, id: proxId};
  materiasprimas.push(materiaprima);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(materiaprima);
})

router.route('/:id')
.delete((req, res, next) => {

    materiasprimas = materiasprimas.filter(function(value, index, arr){ 
    return value.id != req.params.id;
  });

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(req.params.id);
})
.put((req, res, next) => {

  let index = materiasprimas.map(p => p.id).indexOf(req.params.id);
  materiasprimas.splice(index, 1, req.body);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(req.body);
})

module.exports = router;
