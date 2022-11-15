const express = require('express');
const { 
    getTransaksi, 
    getTransaksiById, 
    createTransaksi, 
    updateTransaksi, 
    deleteTransaksi 
} = require('../controllers/TransaksiController');

const router = express.Router()

router.get('/admin/aspek', getTransaksi)
router.get('/admin/aspek/:id', getTransaksiById)
router.post('/admin/aspek', createTransaksi)
router.put('/admin/aspek/:id', updateTransaksi)
router.delete('/admin/aspek/:id', deleteTransaksi)

module.exports = router