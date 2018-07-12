const express = require('express');

module.exports = function(server) {
  //API routes
  const router = express.Router();
  server.use('/api', router);

  //Rotas da api
  const escolasService = require ('../api/escolas/escolasService');
  escolasService.register(router, '/escolas');
}
