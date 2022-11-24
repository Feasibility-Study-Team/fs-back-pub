const express = require('express');
const { getRole, getRoleById, createRole, updateRole, deleteRole } = require('../../controllers/admin/RoleController');

const router = express.Router()

router.get('/admin/role', getRole)
router.get('/admin/role/:id', getRoleById)
router.post('/admin/role', createRole)
router.put('/admin/role/:id', updateRole)
router.delete('/admin/role/:id', deleteRole)

module.exports = router