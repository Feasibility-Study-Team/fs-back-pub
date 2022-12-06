const { PrismaClient } = require("@prisma/client")


const prisma = new PrismaClient()

const getInventors = async (req, res) => {
    try {
        const response = await prisma.inventor.findMany({
            where:{
                role: "Inventor"
            },
            include: {
                alat: true,
                institusi: {
                    select: {
                        nama_institusi: true
                    }
                }
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const getInventorById = async (req, res) => {
    try {
        const response = await prisma.inventor.findFirst({
            where: {
                id_inventor: req.params.id,
                role: "Inventor"
            },
            include: {
                alat:{
                    include: {
                        uji: true
                    },

                },
                institusi: {
                    select: {
                        nama_institusi: true
                    }
                }
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
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
                photo: "",
                role: "Inventor"
            }
        })
        res.status(200).json(inventor)
    } catch (error) {
        res.status(400).json({ msg: error.message })
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
        res.status(400).json({ msg: error.message })
    }
}

const updateToPenguji = async (req, res) => {
    const { id } = req.params
    try {
        const update = await prisma.inventor.update({
            where:{
                id_inventor: id
            },
            data:{
                role: "Penguji"
            }
        })

        if(update){
            return res.status(200).json(update)
        }
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: error.message })
    }
}

const updateToInventor = async (req, res) => {
    const { id } = req.params
    try {
        const update = await prisma.inventor.update({
            where:{
                id_inventor: id
            },
            data:{
                role: "Inventor"
            }
        })

        if(update){
            return res.status(200).json(update)
        }
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: error.message })
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
        res.status(400).json({ msg: error.message })
    }
}

module.exports = { getInventors, getInventorById, createInventor, updateInventor, deleteInventor, updateToInventor, updateToPenguji }