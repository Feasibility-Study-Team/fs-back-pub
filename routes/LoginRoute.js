const express = require('express');
const loginInventor = require('../controllers/LoginController');

const router = express.Router()

router.post('/login', loginInventor)

module.exports = router