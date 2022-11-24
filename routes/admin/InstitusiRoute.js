const express = require('express');
const {
    getInstitusi,
    getInstitusiById,
    createInstitusi,
    updateInstitusi,
    deleteInstitusi
} = require('../../controllers/admin/InstitusiController');

const router = express.Router()

router.get('/admin/institusi', getInstitusi)
router.get('/admin/institusi/:id', getInstitusiById)
router.post('/admin/institusi', createInstitusi)
router.put('/admin/institusi/:id', updateInstitusi)
router.delete('/admin/institusi/:id', deleteInstitusi)

module.exports = router