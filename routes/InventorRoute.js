const express = require('express');
const {
    getInventors,
    getInventorById,
    createInventor,
    updateInventor,
    deleteInventor
} = require('../controllers/InventorController');

const router = express.Router()

router.get('/admin/inventors', getInventors)
router.get('/admin/inventors/:id', getInventorById)
router.post('/admin/inventors', createInventor)
router.put('/admin/inventors/:id', updateInventor)
router.delete('/admin/inventors/:id', deleteInventor)

module.exports = router