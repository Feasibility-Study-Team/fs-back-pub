const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getPengujian = async (req, res) => {
    try {
        const response = await prisma.pengujian.findMany()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const getPengujianById = async (req, res) => {
    try {
        const response = await prisma.pengujian.findUnique({
            where: {
                id_pengujian: req.params.id
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

const createPengujian = async (req, res) => {
    const { id_aspek, id_alat, status, hasil_uji, } = req.body
    try {
        const pengujian = await prisma.pengujian.create({
            data: {
                id_aspek: id_aspek,
                id_alat: id_alat,
                status: status,
                hasil_uji: hasil_uji,
            }
        })
        res.status(201).json(pengujian)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const updatePengujian = async (req, res) => {
    const { id_aspek, id_alat, status, hasil_uji, } = req.body
    try {
        const pengujian = await prisma.pengujian.update({
            where: {
                id_pengujian: req.params.id
            },
            data: {
                id_aspek: id_aspek,
                id_alat: id_alat,
                status: status,
                hasil_uji: hasil_uji,
            }
        })
        res.status(200).json(pengujian)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const deletePengujian = async (req, res) => {
    try {
        const pengujian = await prisma.pengujian.delete({
            where: {
                id_pengujian: req.params.id
            }
        })
        res.status(200).json(pengujian)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

module.exports = { getPengujian, getPengujianById, createPengujian, updatePengujian, deletePengujian }