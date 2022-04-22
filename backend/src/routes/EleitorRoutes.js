const { Router } = require('express')
const EleitorController = require('../controllers/EleitorController') 

const router = Router()
router.get('/getAllEleitores', EleitorController.getAllUsers)
router.post('/newEleitor', EleitorController.newEleitor)

module.exports = router