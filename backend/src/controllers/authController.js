const bcrypt = require('bcrypt');
const db = require('../config/db');
const { usersTable } = require('../models/schema');
const { eq, and, or } = require('drizzle-orm');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY;
if (!SECRET_KEY) {
  throw new Error('SECRET_KEY environment variable is required');
}

const useRegister = async (req, res) => {
  try {
    const { username, password, email, phoneNumber } = req.body;

		const existingUsers = await db.select().from(usersTable).where(or(eq(usersTable.username, username), eq(usersTable.email, email)));
    const existingUsername = existingUsers.find(user => user.username === username);
    const existingEmail = existingUsers.find(user => user.email === email);
		if (existingUsername) {
			return res.status(409).json({ message: '使用者名稱已存在' })
		}
		if (existingEmail) {
			return res.status(409).json({ message: 'Email 已被使用' })
		}

    const hashedPassword = await bcrypt.hash(password, 10);
    await db.insert(usersTable).values({
      username,
      password: hashedPassword,
      email,
      phoneNumber
    });

    res.status(201).json({ message: '註冊成功' })
  } catch (err) {
    console.log('Register error:', err);
    res.status(500).json({ message: '伺服器錯誤' })
  }
}

const useLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const foundUsers = await db.select().from(usersTable).where(eq(usersTable.username, username)).limit(1);
    const user = foundUsers[0];
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: '帳號或密碼錯誤' })
    };

    const token = jwt.sign({
        userId: user.id,
        username: user.username
      },
      SECRET_KEY, { expiresIn: '12h' }
    );

		const { password: _, ...userWithoutPassword } = user;

    res.json({ token, user: userWithoutPassword })
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: '伺服器錯誤' })
  }
}

const useGetProfile = async (req, res) => {
  try {
    const userId = req.user.userId;
    
    const foundUsers = await db.select({
      id: usersTable.id,
      username: usersTable.username,
      email: usersTable.email,
      phoneNumber: usersTable.phoneNumber
    }).from(usersTable).where(eq(usersTable.id, userId));

    if (foundUsers.length === 0) {
      return res.status(404).json({ message: '使用者不存在' });
    }

    res.json({ user: foundUsers[0] });
  } catch (err) {
    console.error('Get profile error:', err);
    res.status(500).json({ message: '伺服器錯誤' });
  }
};

module.exports = {
  useRegister,
  useLogin,
  useGetProfile
};