const express = require('express');
const { getPhotoPengujiById, updatePhotoPengujiById } = require('../../controllers/penguji/PhotoPengujiController');
const path = require('path');
const router = express.Router()

const multer = require('multer'); 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../../src/images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage: storage})

router.get('/inventor/:username/photo', getPhotoPengujiById)
router.put('/inventor/:username/photo', upload.single('profile'), updatePhotoPengujiById)

module.exports = router