const{User} = require('../models');
const bcrypt= require('bcrypt');
async function validateCreateUser(req, res, next) {
    const {name, email, password} = req.body;

    if (!name || !email || !password) {
        return res.status(400).send({ error: 'Todos os campos são obrigatórios' });
    }

    if (name.length> 255) {
        return res.status(400).send({ error: 'Os campos devem ser do tipo string' });
    }

    if (email.length > 255) {
        return res.status(400).send({ error: 'Os campos devem ser do tipo string' });
    }

    const existingUser = await User.findOne({ 
        where: { 
            email } });
    if (existingUser) {
        return res.status(400).send({ error: 'Email já cadastrado' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    req.body.password = hashedPassword;
    next();
}

async function validateDeleteUser(req, res, next) {
    const {id} = req.params;

    if (!id) {
        return res.status(400).send('O ID do usuário é obrigatório');
    }

    next();
}

async function validateUpdateUser(req, res, next) {
    const {id} = req.params;
    const {name, email, password} = req.body;

    if (!id) {
        return res.status(400).send('O ID do usuário é obrigatório');
    }

    if (name && name.length > 255) {
        return res.status(400).send({ error: 'O nome não pode ter mais de 255 caracteres' });
    }

    if (email && email.length > 255) {
        return res.status(400).send({ error: 'O email não pode ter mais de 255 caracteres' });
    }

    if (password) {
        req.body.password = await bcrypt.hash(password, 10);
    }

    next();
}

module.exports = {
    validateCreateUser,
    validateDeleteUser,
    validateUpdateUser
};