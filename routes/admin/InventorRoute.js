const express = require('express');
const {
    getInventors,
    getInventorById,
    createInventor,
    updateInventor,
    deleteInventor,
    updateToPenguji,
    updateToInventor
} = require('../../controllers/admin/InventorController');

const router = express.Router()

router.get('/admin/inventors', getInventors)
router.get('/admin/inventors/:id', getInventorById)
router.post('/admin/inventors', createInventor)
router.put('/admin/inventors/:id', updateInventor)
router.delete('/admin/inventors/:id', deleteInventor)
router.put('/admin/role/penguji/:id', updateToPenguji)
router.put('/admin/role/inventor/:id', updateToInventor)

module.exports = router