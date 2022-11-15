const express = require('express');
const { 
    getTransaksi, 
    getTransaksiById, 
    createTransaksi, 
    updateTransaksi, 
    deleteTransaksi 
} = require('../controllers/TransaksiController');

const router = express.Router()

router.get('/admin/transaksi', getTransaksi)
router.get('/admin/transaksi/:id', getTransaksiById)
router.post('/admin/transaksi', createTransaksi)
router.put('/admin/transaksi/:id', updateTransaksi)
router.delete('/admin/transaksi/:id', deleteTransaksi)

module.exports = router