const jwt = require('jsonwebtoken')
require('dotenv').config()

const SECRET_KEY = process.env.SECRET_KEY

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization
	if (!authHeader || !authHeader.startsWith('Bearer ')) {
		// .startsWith() 是 JavaScript 字串的內建方法，用來檢查字串是否以特定的字元或子字串開頭。
    return res.status(401).json({ 
      error: '認證失敗',
      message: '請提供正確格式的 Authorization header (Bearer <token>)' 
    })
  }

  const token = authHeader?.split(' ')[1]
  if (!token) {
    return res.status(401).json({ 
      error: '認證失敗',
      message: '請提供有效的 token' 
    })
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ 
          error: '認證失敗',
          message: 'Token 已過期' 
        })
      }

      return res.status(403).json({ 
        error: '認證失敗',
        message: 'Token 無效' 
      })
    }

    req.user = user
    next()
  })
}

module.exports = {
  authenticateToken
}