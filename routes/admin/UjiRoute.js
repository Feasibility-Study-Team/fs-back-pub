const express = require('express')
const {
    getUji, getUjiId, createUji, deleteUji, updateUji, getUjiByPenguji
} = require("../../controllers/admin/UjiController")
const router = express.Router()

router.get('/admin/uji', getUji)
router.get('/admin/uji/:id', getUjiId)
router.get('/admin/uji/penguji/:penguji', getUjiByPenguji)
router.post('/admin/uji', createUji)
router.put('/admin/uji/:id', updateUji)
router.delete('/admin/uji/:id', deleteUji)

module.exports = router