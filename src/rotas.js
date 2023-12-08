const express = require('express');
const { cadastrarUsuario } = require('./controladores/usuarios');
const rotas = express();

rotas.post('/usuarios', cadastrarUsuario);

rotas.get('/', cadastrarUsuario);

module.exports = rotas;