const restful = require('node-restful');
const mongoose = restful.mongoose;

const alunoSchema = new mongoose.Schema({
  nome: { type: String, required: [true, 'Informe o nome do aluno!'], uppercase: true }
});

const turmaSchema = new mongoose.Schema({
  nome: { type: String, required: [true, 'Informe o nome da turma!'], uppercase: true },
  ensino: { type: String, required: [true, 'Informe o tipo de ensino!'], uppercase: true },
  ano: { type: Number, min: 1970, max: 2100, required: [true, 'Informe o ano da turma!'] },
  nomealuno: [alunoSchema]
});

const escolaSchema = new mongoose.Schema({
  nome: { type: String, required: [true, 'Informe o nome da escola!'], uppercase: true },
  endereco: { type: String, required: [true, 'Informe o endereço da escola!'] },
  turmas: [turmaSchema]
});

module.exports = restful.model('Escolas', escolaSchema);
