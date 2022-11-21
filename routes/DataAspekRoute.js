const express = require('express');
const {
    getDataAspek,
    getDataAspekById,
    createDataAspek,
    updateDataAspek,
    deleteDataAspek
} = require('../controllers/DataAspekController');

const router = express.Router()

router.get('/admin/data-aspek', getDataAspek)
router.get('/admin/data-aspek/:id', getDataAspekById)
router.post('/admin/data-aspek', createDataAspek)
router.put('/admin/data-aspek/:id', updateDataAspek)
router.delete('/admin/data-aspek/:id', deleteDataAspek)

module.exports = router