const Escolas = require('./escolas');

Escolas.methods(['get', 'post', 'put', 'delete']);

//Se um registro sofrer alteração, sempre retornar o mais novo
//Validar os dados de entrada
Escolas.updateOptions({new: true, runValidators: true});

Escolas.route('count', function(req, res, next) {
  Escolas.count(function(error, value) {
    if(error) {
      res.status(500).json({errors: [error]});
    } else {
      res.json({value});
    }
  })
});

module.exports = Escolas;
