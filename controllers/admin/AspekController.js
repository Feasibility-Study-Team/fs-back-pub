const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAspek = async (req, res) => {
    try {
        const response = await prisma.aspek.findMany({
            include:{
                parameter: {
                    include:{
                        data: true
                    }
                }
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const getAspekById = async (req, res) => {
    try {
        const response = await prisma.aspek.findUnique({
            where: {
                id_aspek: req.params.id
            },
            include:{
                parameter: {
                    include: {
                        data: true
                    }
                }
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

const createAspek = async (req, res) => {
    const { nama_aspek } = req.body
    try {
        const aspek = await prisma.aspek.create({
            data: {
                nama: nama_aspek
            }
        })
        res.status(201).json(aspek)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const updateAspek = async (req, res) => {
    const { nama_aspek } = req.body
    try {
        const aspek = await prisma.aspek.update({
            where: {
                id_aspek: req.params.id
            },
            data: {
                nama_aspek: nama_aspek
            }
        })
        res.status(200).json(aspek)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const deleteAspek = async (req, res) => {
    try {
        const aspek = await prisma.aspek.delete({
            where: {
                id_aspek: req.params.id
            }
        })
        res.status(200).json(aspek)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

module.exports = { getAspek, getAspekById, createAspek, updateAspek, deleteAspek }