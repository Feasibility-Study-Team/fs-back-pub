const express = require('express');
const getDashboardAlat = require('../controllers/DashboardController');

const router = express.Router()

router.get('/dashboard', getDashboardAlat)

module.exports = router