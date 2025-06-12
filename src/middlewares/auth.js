const jwt = require('jsonwebtoken');
require('dotenv').config();

function validateToken(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).send({
            error: 'Token não fornecido'
        });
    }
    try { 
        const decoded =  jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
        
        
    } catch (error) {
        return res.status(401).send({
            error: 'Erro ao validar o token'
        });
        
    }

}
module.exports = {
    validateToken
};