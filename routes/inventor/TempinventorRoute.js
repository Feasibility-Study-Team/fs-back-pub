const express = require('express');
const { getTemps, getTempId, createTemp, deleteTemp, updateTemp, getTempUser } = require('../../controllers/inventor/TempInventorController')
const router = express.Router()

router.get('/temp', getTemps)
router.get('/temp/:id', getTempId)
router.post('/temp/create', createTemp)
router.put('/temp/:id', updateTemp)
router.delete('/temp/:id', deleteTemp)
router.get('/temp/:alat/:data', getTempUser)

module.exports = router