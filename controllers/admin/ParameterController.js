const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getParameter = async (req, res) => {
    try {
        const response = await prisma.parameter.findMany()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const getParameterById = async (req, res) => {
    try {
        const response = await prisma.parameter.findUnique({
            where: {
                id_parameter: req.params.id
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

const createParameter = async (req, res) => {
    const { nama_parameter, id_aspek } = req.body
    try {
        const parameter = await prisma.parameter.create({
            data: {
                nama_parameter: nama_parameter,
                id_aspek: id_aspek
            }
        })
        res.status(201).json(parameter)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const updateParameter = async (req, res) => {
    const { nama_parameter, id_aspek } = req.body
    try {
        const parameter = await prisma.parameter.update({
            where: {
                id_parameter: req.params.id
            },
            data: {
                nama_parameter: nama_parameter,
                id_aspek: id_aspek
            }
        })
        res.status(200).json(parameter)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const deleteParameter = async (req, res) => {
    try {
        const parameter = await prisma.parameter.delete({
            where: {
                id_parameter: req.params.id
            }
        })
        res.status(200).json(parameter)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

module.exports = { getParameter, getParameterById, createParameter, updateParameter, deleteParameter }