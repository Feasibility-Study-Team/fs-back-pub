const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getDataAspek = async (req, res) => {
    try {
        const response = await prisma.data_aspek.findMany()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const getDataAspekById = async (req, res) => {
    try {
        const response = await prisma.data_aspek.findUnique({
            where: {
                id_data_aspek: req.params.id
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

const createDataAspek = async (req, res) => {
    const { nama_data_aspek, id_parameter } = req.body
    try {
        const data_aspek = await prisma.data_aspek.create({
            data: {
                nama_data_aspek: nama_data_aspek,
                id_parameter: id_parameter
            }
        })
        res.status(201).json(data_aspek)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const updateDataAspek = async (req, res) => {
    const { nama_data_aspek, id_parameter } = req.body
    try {
        const data_aspek = await prisma.data_aspek.update({
            where: {
                id_data_aspek: req.params.id
            },
            data: {
                nama_data_aspek: nama_data_aspek,
                id_parameter: id_parameter
            }
        })
        res.status(200).json(data_aspek)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const deleteDataAspek = async (req, res) => {
    try {
        const data_aspek = await prisma.data_aspek.delete({
            where: {
                id_data_aspek: req.params.id
            }
        })
        res.status(200).json(data_aspek)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

module.exports = { getDataAspek, getDataAspekById, createDataAspek, updateDataAspek, deleteDataAspek }