const knex = require('../config/conexao');

const cadastrarUsuario = async(req, res) => {

    const { nome, email } = req.body;

    try {
        const usuario = await knex('usuarios').insert({nome, email}).returning('*');

        return res.status(200).json(usuario)

    } catch (error) {
        
    }


    
}

const listarUsuarios = async (req, res) => {

    try {

        const usuarios = await knex.select('id', 'nome', 'email').from('usuarios');

        return res.status(200).json(usuarios);
        
    } catch (error) {
        
    }

}

module.exports = {
    cadastrarUsuario,
    listarUsuarios
}