const express = require('express');
const {
    getAlat,
    getAlatById,
    createAlat,
    updateAlat,
    deleteAlat,
    getProduct
} = require('../../controllers/admin/AlatController');

const router = express.Router()

router.get('/admin/alat', getAlat)
router.get('/product', getProduct)
router.get('/admin/alat/:id', getAlatById)
router.post('/admin/alat', createAlat)
router.put('/admin/alat/:id', updateAlat)
router.delete('/admin/alat/:id', deleteAlat)

module.exports = router