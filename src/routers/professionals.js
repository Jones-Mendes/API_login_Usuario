const express = require('express');
const router = express.Router();
const professionalsMiddleware = require('../middlewares/professionals');
const professionalsController = require('../controllers/professionals');
const authMiddleware = require("../middlewares/auth");

router.get('/professionals', authMiddleware.validateToken, professionalsController.getProfessionals)

router.post('/professionals', professionalsMiddleware.validateCreateProfessionals, professionalsController.createProfessionals);

router.delete('/professionals/:id', authMiddleware.validateToken, professionalsMiddleware.validateDeleteProfessionals, professionalsController.deleteProfessionals)

module.exports = router;