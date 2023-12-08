const express = require('express');
const { teste } = require('./controladores/usuarios');
const rotas = express();

rotas.get('/', teste);

module.exports = rotas;