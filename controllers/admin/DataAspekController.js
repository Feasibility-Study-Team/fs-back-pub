const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getDataAspek = async (req, res) => {
    try {
        const response = await prisma.data.findMany()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const getDataAspekById = async (req, res) => {
    try {
        const response = await prisma.data.findUnique({
            where: {
                id_data: req.params.id
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

const createDataAspek = async (req, res) => {
    const { nama_data, id_parameter, tipe } = req.body
    try {
        const data = await prisma.data.create({
            data: {
                nama: nama_data,
                id_parameter: id_parameter,
                tipe: tipe,
            }
        })
        res.status(201).json(data)
    } catch (error) {
        console.log(error)
        res.status(400).json({ msg: error.message })
    }
}

const updateDataAspek = async (req, res) => {
    const { nama_data, id_parameter, tipe, value } = req.body
    try {
        const data = await prisma.data.update({
            where: {
                id_data: req.params.id
            },
            data: {
                nama_data: nama_data,
                id_parameter: id_parameter,
                tipe: tipe,
                value: value
            }
        })
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const deleteDataAspek = async (req, res) => {
    try {
        const data = await prisma.data.delete({
            where: {
                id_data: req.params.id
            }
        })
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

module.exports = { getDataAspek, getDataAspekById, createDataAspek, updateDataAspek, deleteDataAspek }