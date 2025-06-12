const {Professionals} = require('../models')
const bcrypt = require('bcrypt')

async function validateCreateProfessionals(req, res, next){
    const {name, email, password, type, credential} = req.body;

    if(!name || !email || !password || !type || !credential) {
        return res.status(400).send({
            error: 'Todos os campos são obrigatórios'
        })
    }

    if(name.length > 255){
        return res.status(400).send({
            error: 'O nome não pode ter mais de 255 caracteres'
        })
    }

    if(email.length > 255){
        return res.status(400).send({
            error: 'O email não pode ter mais de 255 caracteres'
        })
    }

    const existingProfessionals = await Professionals.findOne({
        where: {email: email}
    })

    if(existingProfessionals) {
        return res.status(400).send({
            error: 'Email já cadastrado'
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    req.body.password = hashedPassword

    next()
}

module.exports = {
    validateCreateProfessionals
}