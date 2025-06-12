const express = require('express');
const router = express.Router();
const Usersmiddlewares = require('../middlewares/users');
const UsersController = require('../controllers/users');

router.post('/users',
    Usersmiddlewares.validateCreateUser,
    UsersController.createUser
);

module.exports = router;