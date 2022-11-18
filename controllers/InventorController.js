const { PrismaClient } = require("@prisma/client")


const prisma = new PrismaClient()

const getInventors = async (req, res) => {
    try {
        const response = await prisma.inventor.findMany()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

const getInventorById = async (req, res) => {
    try {
        const response = await prisma.inventor.findUnique({
            where:{
                id_inventor: req.params.id
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({msg: error.message})
    }
}

const createInventor = async (req, res) => {
    const { username, email, nama_lengkap, id_institusi, password, nomor, photo } = req.body
    try {
        const inventor = await prisma.inventor.create({
            data: {
                username: username,
                email: email,
                nama_lengkap: nama_lengkap,
                id_institusi: id_institusi,
                password: password,
                nomor: nomor,
                photo: photo
            }
        })
        res.status(200).json(inventor)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

const updateInventor = async (req, res) => {
    const { username, email, nama_lengkap, id_institusi, password, nomor, photo } = req.body
    try {
        const inventor = await prisma.inventor.update({
            where: {
                id_inventor: req.params.id
            },
            data: {
                username: username,
                email: email,
                nama_lengkap: nama_lengkap,
                id_institusi: id_institusi,
                password: password,
                nomor: nomor,
                photo: photo
            }
        })
        res.status(200).json(inventor)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

const deleteInventor = async (req, res) => {
    try {
        const inventor = await prisma.inventor.delete({
            where: {
                id_inventor: req.params.id
            }
        })
        res.status(200).json(inventor)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

module.exports = { getInventors, getInventorById, createInventor, updateInventor, deleteInventor }