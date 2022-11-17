const express = require('express');
const registerInventor = require('../controllers/RegisterController');

const router = express.Router()

router.post('/register', registerInventor)

module.exports = router