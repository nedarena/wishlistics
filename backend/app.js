const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./api/authRoutes');
const wishlistRoutes = require('./api/wishlistRoutes');

const app = express();
app.use(express.json()); // Для парсинга JSON тела запроса
app.use(cors()); // Для разрешения CORS, если нужно

// Маршруты
app.use('/api/auth', authRoutes);

module.exports = app;