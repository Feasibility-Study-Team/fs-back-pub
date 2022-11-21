const express = require('express');
const {
    getParameter,
    getParameterById,
    createParameter,
    updateParameter,
    deleteParameter
} = require('../controllers/ParameterController');

const router = express.Router()

router.get('/admin/parameter', getParameter)
router.get('/admin/parameter/:id', getParameterById)
router.post('/admin/parameter', createParameter)
router.put('/admin/parameter/:id', updateParameter)
router.delete('/admin/parameter/:id', deleteParameter)

module.exports = router