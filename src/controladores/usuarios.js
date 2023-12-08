const knex = require('../config/conexao');

const cadastrarUsuario = async(req, res) => {

    const { nome, email } = req.body;

    try {
        const usuario = await knex('usuarios').insert({nome, email}).returning('*');

        return res.status(200).json(usuario)

    } catch (error) {
        
    }


    
}

module.exports = {
    cadastrarUsuario
}