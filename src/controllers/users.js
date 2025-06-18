const {User} = require('../models');

async function createUser(req, res) {
    try {
        await User.create(req.body)
        //faca a criacao do token ao criar 
        res.status(201).send('Parabéns! Usuário criado com sucesso');
    } catch (error) {
        console.error(error);
        res.status(500).send ({
            error: error.message
        })
    }
    
}

async function deleteUser(req, res) {
    const {id} = req.params;
    try {
        await User.destroy({
            where: {id: id}
        })

        return res.status(202).send('Usuário deletado com sucesso')
    } catch (error) {
       console.error(error)
       return res.status(500).send('Erro ao deletar usuário') 
    }
}

async function updateUser(req, res) {
    const {id} = req.params;
    try {
        await User.update(req.body, {
            where: {id: id}
        })

        return res.status(202).send('Usuário atualizado com sucesso')
    } catch (error) {
       console.error(error)
       return res.status(500).send('Erro ao atualizar usuário') 
    }
}

async function getUser(req, res) {
    try {
        const users = await User.findAll()
        return res.send(users)
    } catch (error) {
        console.error(error)
        return res.status(500).send('Erro ao buscar usuários')
    }
}

module.exports = {
    createUser,
    deleteUser,
    updateUser,
    getUser

};