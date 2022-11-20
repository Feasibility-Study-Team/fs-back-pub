const express = require('express');
const { getPhotoInvestorById, updatePhotoInvestorById } = require('../../controllers/inventor/PhotoInventorController');
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

router.get('/inventor/:username/photo', getPhotoInvestorById)
router.put('/inventor/:username/photo', upload.single('profile'), updatePhotoInvestorById)

module.exports = router