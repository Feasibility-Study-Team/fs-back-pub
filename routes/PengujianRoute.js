const express = require('express');
const { 
    getPengujian, 
    getPengujianById,
    createPengujian, 
    updatePengujian, 
    deletePengujian 
} = require('../controllers/PengujianController');

const router = express.Router()

router.get('/admin/pengujian', getPengujian)
router.get('/admin/pengujian/:id', getPengujianById)
router.post('/admin/pengujian', createPengujian)
router.put('/admin/pengujian/:id', updatePengujian)
router.delete('/admin/pengujian/:id', deletePengujian)

module.exports = router