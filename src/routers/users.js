const express = require('express');
const router = express.Router();
const Usersmiddlewares = require('../middlewares/users');
const UsersController = require('../controllers/users');
const authMiddleware = require("../middlewares/auth");


router.post('/users',
    Usersmiddlewares.validateCreateUser,
    UsersController.createUser
);
router.get('/users',
   authMiddleware.validateToken,
    UsersController.getUser
);
router.delete('/users/:id',
    authMiddleware.validateToken,
    Usersmiddlewares.validateDeleteUser,
    UsersController.deleteUser
);


module.exports = router;