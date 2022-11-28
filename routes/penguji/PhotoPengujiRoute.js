const express = require('express');
const { getPhotoPengujiById, updatePhotoPengujiById } = require('../../controllers/penguji/PhotoPengujiController');
const path = require('path');
const router = express.Router()

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
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
    dest: "public/images"
})

router.get('/penguji/:id/photo', getPhotoPengujiById)
router.put('/penguji/:id/photo', upload.single('profile'), updatePhotoPengujiById)

module.exports = router