const express = require('express');
const {
    createAlatInventor,
    getAlatInventorById,
    updateAlatInventor,
    deleteAlatInventor
} = require('../../controllers/inventor/AlatInventorController');

const router = express.Router()

router.get('/alat/:id', getAlatInventorById)
router.post('/alat/:id/create', createAlatInventor)
router.put('/alat/:id/detail/:id_alat', updateAlatInventor)
router.delete('/alat/:id/detail/:id_alat', deleteAlatInventor)

module.exports = router