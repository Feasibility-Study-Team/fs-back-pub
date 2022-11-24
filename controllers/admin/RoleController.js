const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getRole = async (req, res) => {
    try {
        const response = await prisma.role.findMany()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const getRoleById = async (req, res) => {
    try {
        const response = await prisma.role.findUnique({
            where: {
                id_role: req.params.id
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

const createRole = async (req, res) => {
    const { nama_role } = req.body
    try {
        const role = await prisma.role.create({
            data: {
                nama_role: nama_role,
            }
        })
        res.status(201).json(role)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const updateRole = async (req, res) => {
    const { nama_role } = req.body
    try {
        const role = await prisma.role.update({
            where: {
                id_role: req.params.id
            },
            data: {
                nama_role: nama_role,
            }
        })
        res.status(200).json(role)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const deleteRole = async (req, res) => {
    try {
        const role = await prisma.role.delete({
            where: {
                id_role: req.params.id
            }
        })
        res.status(200).json(role)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

module.exports = { getRole, getRoleById, createRole, updateRole, deleteRole }