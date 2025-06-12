const {Professionals} = require('../models');

async function createProfessionals(req, res) {
    try {
        await Professionals.create(req.body)
        res.status(201).send('Parabéns! Usuário profissional criado com sucesso');
    } catch (error) {
        console.error(error);
        res.status(500).send ({
            error: error.message
        })
    }
}

module.exports = {
    createProfessionals
};