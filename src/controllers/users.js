const {Users} = require('../models');

async function createUser(req, res) {
    try {
        await Users.create(req.body)
        res.status(201).send('Parabéns! Usuário criado com sucesso');
    } catch (error) {
        console.error(error);
        res.status(500).send ({
            error: error.message
        })
    }
}

module.exports = {
    createUser
};