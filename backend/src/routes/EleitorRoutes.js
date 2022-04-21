const { Router } = require('express')
const EleitorController = require('../controllers/EleitorController') 

const router = Router()

router.get('/getAllUsers', EleitorController.getAllUsers)

module.exports = router