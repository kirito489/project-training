# 英雄管理系統 (Hero Management System)

一個現代化的全端應用程式，提供英雄和怪物管理功能，支援多種登入方式包括 Google 和 LINE OAuth 認證。

![Node.js](https://img.shields.io/badge/Node.js-16.x+-green.svg)
![Vue.js](https://img.shields.io/badge/Vue.js-3.x-brightgreen.svg)
![License](https://img.shields.io/badge/License-MIT-blue.svg)

## 🚀 功能特色

### 認證系統
- ✅ 傳統帳號密碼註冊/登入
- ✅ Google OAuth 2.0 登入
- ✅ LINE Login 登入  
- ✅ JWT 認證機制
- ✅ 自動 token 管理和刷新

### 核心功能
- 🦸‍♂️ 英雄管理 (新增、編輯、刪除、查詢)
- 👹 怪物管理 (新增、編輯、刪除、查詢)
- 🔗 英雄與怪物關聯 (擊殺關係)
- 👤 個人資料管理
- 🔍 搜尋和分頁功能

### 技術特色
- 📱 響應式設計 (支援手機、平板、桌面)  
- 🔒 安全的用戶權限隔離
- 🎯 RESTful API 設計
- 🏗️ 現代化前後端分離架構

## 🛠️ 技術棧

### 後端 (Backend)
- **Node.js** - JavaScript 運行環境
- **Express.js** - Web 框架
- **PostgreSQL** - 關聯式資料庫
- **Drizzle ORM** - TypeScript ORM
- **Passport.js** - 認證中間件
- **JWT** - JSON Web Tokens
- **bcrypt** - 密碼加密
- **Zod** - 資料驗證

### 前端 (Frontend)  
- **Vue 3** - 前端框架 (Composition API)
- **Vue Router 4** - 路由管理
- **Pinia** - 狀態管理
- **Axios** - HTTP 客戶端
- **Tailwind CSS** - 原子化 CSS 框架
- **Vite** - 建置工具

### 開發工具
- **Git** - 版本控制
- **npm** - 套件管理
- **ESLint** - 代碼檢查
- **Prettier** - 代碼格式化

## 📋 系統需求

- **Node.js** 16.x 或更新版本
- **PostgreSQL** 12.x 或更新版本
- **npm** 8.x 或更新版本

## 🚀 快速開始

### 1. 複製專案

```bash
git clone https://github.com/yourusername/hero-management-system.git
cd hero-management-system
```

### 2. 後端設置

```bash
# 進入後端目錄
cd backend

# 安裝依賴
npm install

# 設置環境變數
cp .env.example .env
# 編輯 .env 檔案，填入你的資料庫連接和 OAuth 設定

# 運行資料庫遷移
npm run db:migrate

# 啟動開發服務器
npm run dev
```

### 3. 前端設置

```bash
# 開新終端，進入前端目錄  
cd frontend

# 安裝依賴
npm install

# 設置環境變數
cp .env.example .env
# 編輯 .env 檔案，設置 API URL

# 啟動開發服務器
npm run dev
```

### 4. 訪問應用程式

- 前端：http://localhost:5173
- 後端 API：http://localhost:3000

## ⚙️ 環境變數配置

### 後端環境變數 (.env)

```env
# 資料庫設定
DATABASE_URL=postgresql://username:password@localhost:5432/database_name

# JWT 設定
SECRET_KEY=your-super-secret-jwt-key
SESSION_SECRET=your-session-secret-key

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# LINE Login
LINE_CHANNEL_ID=your-line-channel-id  
LINE_CHANNEL_SECRET=your-line-channel-secret

# 前端 URL
CLIENT_URL=http://localhost:5173

# 伺服器設定
PORT=3000
NODE_ENV=development
```

### 前端環境變數 (.env)

```env
# API 設定
VITE_API_URL=http://localhost:3000

# 應用程式設定
VITE_APP_NAME=英雄管理系統
```

## 🔧 OAuth 設置指南

### Google OAuth 設置

1. 前往 [Google Cloud Console](https://console.cloud.google.com/)
2. 創建新專案或選擇現有專案
3. 啟用 Google+ API
4. 創建 OAuth 2.0 客戶端 ID
5. 設置授權回調 URI：`http://localhost:3000/auth/google/callback`
6. 複製 Client ID 和 Client Secret 到 .env 檔案

### LINE Login 設置

1. 前往 [LINE Developers Console](https://developers.line.biz/)
2. 創建新的 Channel (LINE Login)
3. 設置 Callback URL：`http://localhost:3000/auth/line/callback`
4. 設置 Scope：`profile openid email`
5. 複製 Channel ID 和 Channel Secret 到 .env 檔案

## 📚 API 文檔

### 認證 API

| 方法 | 端點 | 描述 |
|------|------|------|
| POST | `/auth/register` | 用戶註冊 |
| POST | `/auth/login` | 用戶登入 |
| GET | `/auth/profile` | 獲取用戶資料 |
| GET | `/auth/google` | Google OAuth 登入 |
| GET | `/auth/line` | LINE OAuth 登入 |
| POST | `/auth/logout` | 用戶登出 |

### 英雄管理 API

| 方法 | 端點 | 描述 |
|------|------|------|
| GET | `/heroes` | 獲取所有英雄 |
| GET | `/heroes/:id` | 獲取特定英雄 |
| POST | `/heroes` | 創建新英雄 |
| PUT | `/heroes/:id` | 更新英雄 |
| DELETE | `/heroes/:id` | 刪除英雄 |

### 怪物管理 API

| 方法 | 端點 | 描述 |
|------|------|------|
| GET | `/monsters` | 獲取所有怪物 |
| GET | `/monsters/:id` | 獲取特定怪物 |
| POST | `/monsters` | 創建新怪物 |
| PUT | `/monsters/:id` | 更新怪物 |
| DELETE | `/monsters/:id` | 刪除怪物 |

## 🗄️ 資料庫結構

### Users 表
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE,
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255),
  phone_number VARCHAR(20),
  provider VARCHAR(20) DEFAULT 'local',
  provider_id VARCHAR(100),
  display_name VARCHAR(100),
  avatar VARCHAR(500),
  is_email_verified BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Heroes 表
```sql
CREATE TABLE heroes (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id),
  name VARCHAR(100) NOT NULL,
  gender CHAR(1),
  age INTEGER,
  hero_level CHAR(1) NOT NULL,
  hero_rank INTEGER,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Monsters 表
```sql
CREATE TABLE monsters (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id),
  name VARCHAR(100) NOT NULL,
  danger_level CHAR(1) NOT NULL,
  kill_by INTEGER REFERENCES heroes(id),
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🚀 部署指南

### 使用 Docker 部署

#### 1. 建立 Docker 映像

**後端 Dockerfile**：
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

**前端 Dockerfile**：
```dockerfile  
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### 2. Docker Compose

```yaml
version: '3.8'
services:
  postgres:
    image: postgres:14
    environment:
      POSTGRES_DB: heroapp
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  backend:
    build: ./backend
    ports:
      - "3000:3000"
    depends_on:
      - postgres
    environment:
      DATABASE_URL: postgresql://admin:password@postgres:5432/heroapp
      
  frontend:
    build: ./frontend
    ports:
      - "80:80"
    depends_on:
      - backend

volumes:
  postgres_data:
```

### 雲端部署選項

#### Vercel + PlanetScale
- **前端**：部署到 Vercel
- **資料庫**：使用 PlanetScale MySQL
- **後端**：部署到 Vercel Functions

#### Netlify + Supabase  
- **前端**：部署到 Netlify
- **資料庫**：使用 Supabase PostgreSQL
- **後端**：部署到 Netlify Functions

#### AWS/GCP/Azure
- **前端**：S3 + CloudFront / Cloud Storage
- **後端**：EC2 / Compute Engine / App Service
- **資料庫**：RDS / Cloud SQL / Azure Database

## 🧪 測試

### 運行測試

```bash
# 後端測試
cd backend
npm test

# 前端測試  
cd frontend
npm test

# E2E 測試
npm run test:e2e
```

### 測試覆蓋率

```bash
# 生成測試覆蓋率報告
npm run test:coverage
```

## 📝 開發指南

### 代碼風格

專案使用 ESLint 和 Prettier 保持代碼一致性：

```bash
# 檢查代碼風格
npm run lint

# 自動修復
npm run lint:fix

# 格式化代碼
npm run format
```

### 提交規範

使用 Conventional Commits 規範：

```bash
# 功能
git commit -m "feat: 添加 Google OAuth 登入功能"

# 修復
git commit -m "fix: 修復用戶註冊驗證問題"

# 文檔
git commit -m "docs: 更新 README 安裝指南"
```

### 分支策略

- `main` - 生產環境分支
- `develop` - 開發分支  
- `feature/xxx` - 功能分支
- `hotfix/xxx` - 緊急修復分支

## 🤝 貢獻指南

1. Fork 專案
2. 創建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'feat: add amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 開啟 Pull Request

## 📄 授權

此專案採用 MIT 授權 - 查看 [LICENSE](LICENSE) 檔案了解詳情。

## 👥 作者

- **您的名字** - *初始開發* - [YourGithub](https://github.com/yourusername)

## 🙏 致謝

- [Node.js](https://nodejs.org/) - 後端運行環境
- [Vue.js](https://vuejs.org/) - 前端框架
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [Drizzle ORM](https://orm.drizzle.team/) - ORM 工具
- 所有開源貢獻者

## 📞 支援

如果你有任何問題或建議，請：

- 開啟 [Issue](https://github.com/yourusername/hero-management-system/issues)
- 發送郵件到：your.email@example.com
- 加入我們的 [Discord](https://discord.gg/yourserver)

## 🗺️ 專案路線圖

- [ ] 實作即時通知功能
- [ ] 添加英雄技能系統
- [ ] 支援多語言 (i18n)
- [ ] 添加暗黑模式
- [ ] 實作數據統計儀表板
- [ ] 添加移動端 App (React Native)

---

⭐ 如果這個專案對你有幫助，請給它一個星星！