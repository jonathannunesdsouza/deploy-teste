const express = require('express');
const { cadastrarUsuario, listarUsuarios } = require('./controladores/usuarios');
const rotas = express();

rotas.post('/usuarios', cadastrarUsuario);

rotas.get('/', listarUsuarios);

module.exports = rotas;