const Escolas = require('./escolas');

Escolas.methods(['get', 'post', 'put', 'delete']);

//Se um registro sofrer alteração, sempre retornar o mais novo
//Validar os dados de entrada
Escolas.updateOptions({new: true, runValidators: true});

module.exports = Escolas;
