const express = require('express')
const router = express.Router()
const { useRegister, useLogin, useGetProfile } = require('../controllers/authController')
const { validateRegister, validateLogin } = require('../middleware/validation')
const { authenticateToken } = require('../middleware/auth')

// 公開路由
router.post('/register', validateRegister, useRegister)
router.post('/login', validateLogin, useLogin)

// 後續所有路由都需要認證
router.use(authenticateToken)
router.get('/profile', useGetProfile)

module.exports = router