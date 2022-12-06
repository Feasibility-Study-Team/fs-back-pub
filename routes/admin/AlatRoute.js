const express = require('express');
const {
    getAlat,
    getAlatById,
    createAlat,
    updateAlat,
    deleteAlat,
    getProduct
} = require('../../controllers/admin/AlatController');
const router = express.Router()

const path = require('path');
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



router.get('/admin/alat', getAlat)
router.get('/product', getProduct)
router.get('/admin/alat/:id', getAlatById)
router.post('/admin/alat', upload.array('photo_alat', 8), createAlat)
router.put('/admin/alat/:id', updateAlat)
router.delete('/admin/alat/:id', deleteAlat)

module.exports = router