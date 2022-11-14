const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getInstitusi = async (req, res) => {
    try {
        const response = await prisma.institusi.findMany()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

const getInstitusiById = async (req, res) => {
    try {
        const response = await prisma.institusi.findUnique({
            where:{
                id_institusi: Number(req.params.id)
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({msg: error.message})
    }
}

const createInstitusi = async (req, res) => {
    const { nama_institusi, alamat, nomor } =req.body
    try {
        const institusi = await prisma.institusi.create({
            data: {
                nama_institusi: nama_institusi,
                alamat: alamat,
                nomor:nomor
            }
        })
        res.status(201).json(institusi)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

const updateInstitusi = async (req, res) => {
    const { nama_institusi, alamat, nomor } =req.body
    try {
        const institusi = await prisma.institusi.update({
            where:{
                id_institusi: Number(req.params.id)
            },
            data: {
                nama_institusi: nama_institusi,
                alamat: alamat,
                nomor:nomor,
            }
        })
        res.status(200).json(institusi)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

const deleteInstitusi = async (req, res) => {
    try {
        const institusi = await prisma.institusi.delete({
            where:{
                id_institusi: Number(req.params.id)
            }
        })
        res.status(200).json(institusi)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

module.exports = { getInstitusi, getInstitusiById, createInstitusi, updateInstitusi, deleteInstitusi }