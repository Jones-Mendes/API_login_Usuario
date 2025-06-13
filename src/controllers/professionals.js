const {Professionals} = require('../models');

async function getProfessionals(req, res) {
    try {
        const produtos = await Professionals.findAll()

        return res.send(professionals)
    } catch (error) {
        console.error(error)
        return res.status(500).send('Erro ao buscar profissional')
        
    }
    
}

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