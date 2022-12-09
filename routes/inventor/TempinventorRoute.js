const express = require('express');
const { getTemps, getTempId, createTemp, deleteTemp, updateTemp, getTempUser } = require('../../controllers/inventor/TempInventorController')
const router = express.Router()
const path = require('path');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/files')
    },
    filename: (req, file, cb) => {
        cb(
            null,
            path.parse(file.originalname).name + "-" +
            Date.now() +
            path.extname(file.originalname
            )
        )
    }
})

const upload = multer({
    storage: storage,
    dest: "public/files"
})

router.get('/temp', getTemps)
router.get('/temp/:id', getTempId)
router.post('/temp/create', upload.single('value'), createTemp)
router.put('/temp/:id', updateTemp)
router.delete('/temp/:id', deleteTemp)
router.get('/temp/:alat/:data', getTempUser)

module.exports = router