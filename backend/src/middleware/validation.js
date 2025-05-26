const { z } = require('zod')

const registerSchema = z.object({
  username: z.string().min(3, '使用者名稱至少需要3個字元').max(20, '使用者名稱不能超過20個字元'),
  password: z.string().min(8, '密碼至少需要8個字元').regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, '密碼必須包含至少一個大寫字母、小寫字母和數字'),
  email: z.string().email('請輸入正確的email'),
  phoneNumber: z.string().regex(/^09\d{8}$|^09\d{2}-\d{3}-\d{3}$/, '請輸入正確的手機號碼格式').optional()
})

const loginSchema = z.object({
  username: z.string().min(1, '請輸入使用者名稱'),
  password: z.string().min(1, '請輸入密碼')
})

const handleValidationError = (error, res) => {
  const formattedErrors = error.errors.map((err) => ({
    field: err.path.join('.'),
    message: err.message
  }))

  res.status(400).json({
    error: '驗證錯誤',
    details: formattedErrors
  })
}

// 高階函數：驗證中間件工廠
const createValidationMiddleware = (schema) => {
  return (req, res, next) => {
    try {
      schema.parse(req.body)
      next()
    } catch (error) {
      handleValidationError(error, res)
    }
  }
}

// 使用高階函數創建具體的驗證中間件
const validateRegister = createValidationMiddleware(registerSchema)
const validateLogin = createValidationMiddleware(loginSchema)

module.exports = {
  validateRegister,
  validateLogin
}