const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Регистрация пользователя
router.post('/register', authController.register);

// Вход пользователя
router.post('/login', authController.login);

module.exports = router;