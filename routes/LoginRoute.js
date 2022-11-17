const express = require('express');
const loginInventor = require('../controllers/LoginController');

const router = express.Router()

router.get('/login', loginInventor)

module.exports = router