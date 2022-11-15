const express = require('express');
const { 
    getAspek, 
    getAspekById, 
    createAspek, 
    updateAspek, 
    deleteAspek 
} = require('../controllers/AspekController');

const router = express.Router()

router.get('/admin/aspek', getAspek)
router.get('/admin/aspek/:id', getAspekById)
router.post('/admin/aspek', createAspek)
router.put('/admin/aspek/:id', updateAspek)
router.delete('/admin/aspek/:id', deleteAspek)

module.exports = router