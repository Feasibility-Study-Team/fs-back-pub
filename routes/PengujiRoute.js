const express = require('express');
const { getPenguji, getPengujiById, createPenguji, updatePenguji, deletePenguji } = require('../controllers/PengujiController');

const router = express.Router()

router.get('/admin/penguji', getPenguji)
router.get('/admin/penguji/:id', getPengujiById)
router.post('/admin/penguji', createPenguji)
router.put('/admin/penguji/:id', updatePenguji)
router.delete('/admin/penguji/:id', deletePenguji)

module.exports = router