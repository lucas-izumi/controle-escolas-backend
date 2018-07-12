//O require recebe o que o module.exports enviou
const server = require('./config/server');
require('./config/database');
require('./config/routes')(server); //Passando server como parametro
