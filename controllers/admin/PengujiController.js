const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getPenguji = async (req, res) => {
    try {
        const response = await prisma.penguji.findMany()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const getPengujiById = async (req, res) => {
    try {
        const response = await prisma.penguji.findUnique({
            where: {
                id_penguji: req.params.id
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

const createPenguji = async (req, res) => {
    const { username, email, nama_lengkap, id_institusi, password, nomor } = req.body
    try {
        const penguji = await prisma.penguji.create({
            data: {
                username: username,
                email: email,
                nama_lengkap: nama_lengkap,
                id_institusi: id_institusi,
                password: password,
                nomor: nomor
            }
        })
        res.status(201).json(penguji)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const updatePenguji = async (req, res) => {
    const { username, email, nama_lengkap, id_institusi, password, nomor } = req.body
    try {
        const penguji = await prisma.penguji.update({
            where: {
                id_penguji: req.params.id
            },
            data: {
                username: username,
                email: email,
                nama_lengkap: nama_lengkap,
                id_institusi: id_institusi,
                password: password,
                nomor: nomor
            }
        })
        res.status(200).json(penguji)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const deletePenguji = async (req, res) => {
    try {
        const penguji = await prisma.penguji.delete({
            where: {
                id_penguji: req.params.id
            }
        })
        res.status(200).json(penguji)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

module.exports = { getPenguji, getPengujiById, createPenguji, updatePenguji, deletePenguji }