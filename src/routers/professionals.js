const express = require('express');
const router = express.Router();
const professionalsMiddleware = require('../middlewares/professionals');
const professionalsController = require('../controllers/professionals');

router.post('/professionals', professionalsMiddleware.validateCreateProfessionals, professionalsController.createProfessionals);

module.exports = router;