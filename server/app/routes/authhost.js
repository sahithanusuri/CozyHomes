const express = require('express')
const router = express.Router()
const AuthHostController = require('../controllers/AuthHostController')

router.post('/register',AuthHostController.register)
router.post('/login',AuthHostController.login)

module.exports = router
