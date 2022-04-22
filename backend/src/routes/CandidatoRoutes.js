const { Router } = require('express')
const CandidatoController = require('../controllers/CandidatoController') 

const router = Router()

router.get('/getAllCandidatos', CandidatoController.getAllCandidatos)
router.post('/newCandidato', CandidatoController.newCandidato)

module.exports = router