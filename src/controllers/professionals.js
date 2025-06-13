const {Professionals} = require('../models');
const jsonwebtoken = require('jsonwebtoken');
require('dotenv').config();

async function getProfessionals(req, res) {
    try {
        const professionals = await Professionals.findAll()

        return res.send(professionals)
    } catch (error) {
        console.error(error)
        return res.status(500).send('Erro ao buscar profissional')
    }
    
}

async function createProfessionals(req, res) {
    try {
        const professional = await Professionals.create(req.body)
        const token = jsonwebtoken.sign({ id: professional.id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
        res.send({token});
    } catch (error) {
        console.error(error);
        res.status(500).send({
            error: error.message
})
    }
}

async function deleteProfessionals(req, res) {
    const {id} = req.params;
    try {
        await Professionals.destroy({
            where: {id: id}
        })

        return res.status(202).send('Profissional deletado com sucesso')
    } catch (error) {
       console.error(error)
       return res.status(500).send('Erro ao deletar profissional') 
    }
}


module.exports = {
    getProfessionals,
    createProfessionals,
    deleteProfessionals
};