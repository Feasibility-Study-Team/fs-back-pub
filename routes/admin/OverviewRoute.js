const express = require('express')
const { countAlat, countInventor, countPenguji } = require('../../controllers/admin/OverviewControler')
const router = express.Router()

router.get('/overview/inventor', countInventor)
router.get('/overview/penguji', countPenguji)
router.get('/overview/alat', countAlat)

module.exports = router