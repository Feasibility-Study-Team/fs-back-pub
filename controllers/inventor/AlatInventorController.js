const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createAlatInventor = async (req, res) => {
    const { nama_alat, deskripsi_alat, id_inventor } = req.body
    try {
        const alat = await prisma.alat.create({
            data: {
                nama_alat: nama_alat,
                deskripsi_alat: deskripsi_alat,
                id_inventor: id_inventor,
                pemasaran: false
            }
        })
        res.status(201).json(alat)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const getAlatInventorById = async (req, res) => {
    try {
        const response = await prisma.alat.findUnique({
            where: {
                id_alat: req.params.id
            }, include: {
                inventor: {
                    include: {
                        institusi: true
                    }
                },
                photo_alat: true
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

const updateAlatInventor = async (req, res) => {
    const { nama_alat, deskripsi_alat, id_inventor, photo_alat, pemasaran } = req.body
    try {
        const alat = await prisma.alat.update({
            where: {
                id_alat: req.params.id
            },
            data: {
                nama_alat: nama_alat,
                deskripsi_alat: deskripsi_alat,
                id_inventor: id_inventor,
                photo_alat: photo_alat,
                pemasaran: pemasaran
            }
        })
        res.status(200).json(alat)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

module.exports = { createAlatInventor, getAlatInventorById, updateAlatInventor }