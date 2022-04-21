const { Router } = require('express')
const UserController = require('../controllers/UserController') 

const router = Router()

router.get('/getAllUsers', UserController.getAllUsers)

module.exports = router