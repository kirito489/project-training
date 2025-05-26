const corsOptions = {
  // 允許的來源 (前端 URL)
  origin: function (origin, callback) {
    const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(', ') || [
      'http://localhost:3000',  // Vue 開發服務器
      'http://localhost:5173',  // Vite 開發服務器
    ];

    // 允許沒有 origin 的請求 (如 Postman)
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);  // (錯誤物件（null 表示沒有錯誤）, (true 允許，false 拒絕)）
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },

  // 允許的 HTTP 方法
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],

  // 允許的請求頭
  allowedHeaders: [
  'Origin',           // 請求來源
  'X-Requested-With', // AJAX 請求標識
  'Content-Type',     // 內容類型 (application/json)
  'Accept',           // 接受的響應格式
  'Authorization',    // 認證令牌 (Bearer token)
  'Cache-Control'     // 緩存控制
  ],

  // 允許發送認證信息 (cookies, Authorization header)
  credentials: true,

  // 預檢請求緩存時間
  maxAge: 86400 // 24 hours
};

module.exports = { corsOptions };