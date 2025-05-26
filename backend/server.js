const express = require('express');
const cors = require('cors');
const { corsOptions } = require('./src/config/cors');
const authRouter = require('./src/routes/authRoutes');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors(corsOptions)); 

app.use('/auth', authRouter);

// 404 處理
app.use((req, res) => {
    res.status(404).json({ 
        error: '找不到該路由',
        message: `路徑 ${req.originalUrl} 不存在` 
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})