const Escolas = require('./escolas');
const _ = require('lodash');

Escolas.methods(['get', 'post', 'put', 'delete']);

//Se um registro sofrer alteração, sempre retornar o mais novo
//Validar os dados de entrada
Escolas.updateOptions({new: true, runValidators: true});

//Padronização de erros
Escolas.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext);

function sendErrorsOrNext(req, res, next) {
  const bundle = res.locals.bundle;

  if (bundle.errors) {
    var errors = parseErrors(bundle.errors);
    res.status(500).json({errors});
  } else {
    next(); //Prosseguir com a requisição se não houver erros
  }
}

function parseErrors(nodeRestfulErrors) {
  const errors = [];
  //Percorre os objetos de erro e pega o atributo "mensagem"
  _.forIn(nodeRestfulErrors, error => errors.push(error.message));
  return errors;
}

//Contador de registros
Escolas.route('count', function(req, res, next) {
  Escolas.count(function(error, value) {
    if(error) {
      res.status(500).json({errors: [error]});
    } else {
      res.json({value});
    }
  })
});

Escolas.route('turmasCount', function(req, res, next) {
  Escolas.find({ "turmas.0": { "$exists": true } },function(err,docs) {

  }).count(function(error, value) {
    res.json({value})
  })
})

module.exports = Escolas;
