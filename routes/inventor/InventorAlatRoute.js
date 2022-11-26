const express = require('express');
const {
    createAlatInventor,
    getAlatInventorById,
    updateAlatInventor
} = require('../../controllers/inventor/AlatInventorController');

const router = express.Router()

router.get('/alat', getAlatInventorById)
router.post('/alat/create', createAlatInventor)
router.put('/alat/detail/:id', updateAlatInventor)

module.exports = router