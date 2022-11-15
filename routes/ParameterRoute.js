const express = require('express');
const { 
    getParameter, 
    getParameterById, 
    createParameter, 
    updateParameter, 
    deleteParameter 
} = require('../controllers/ParameterController');

const router = express.Router()

router.get('/admin/aspek', getParameter)
router.get('/admin/aspek/:id', getParameterById)
router.post('/admin/aspek', createParameter)
router.put('/admin/aspek/:id', updateParameter)
router.delete('/admin/aspek/:id', deleteParameter)

module.exports = router