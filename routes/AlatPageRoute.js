const express = require('express');
const { getAlatPage, getAlatPageById } = require('../controllers/AlatPageController');

const router = express.Router()

router.get('/alat', getAlatPage)
router.get('/alat/:id', getAlatPageById)

module.exports = router