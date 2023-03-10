const { PrismaClient } = require("@prisma/client");
var CryptoJS = require("crypto-js")
const prisma = new PrismaClient();

const getPenguji = async (req, res) => {
    try {
        const response = await prisma.inventor.findMany({
            where: {
                role: "Penguji"
            },
            include: {
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

const getPengujiById = async (req, res) => {
    try {
        const response = await prisma.inventor.findFirst({
            where: {
                AND: {
                    id_inventor: req.params.id,
                    role: "Penguji"
                }
            },
            include: {
                alat: {
                    include:{
                        uji: true
                    }
                },
                institusi: {
                    select: {
                        id_institusi: true,
                        nama_institusi: true
                    }
                }
            }
        })
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(404).json({ msg: error.message })
    }
}

const createPenguji = async (req, res) => {
    const { username, email, nama_lengkap, id_institusi, password, nomor } = req.body
    const hashPassword = CryptoJS.SHA3(password, { outputLength: 256 }).toString()
    try {
        const penguji = await prisma.penguji.create({
            data: {
                username: username,
                email: email,
                nama_lengkap: nama_lengkap,
                id_institusi: id_institusi,
                password: hashPassword,
                nomor: nomor,
                photo: "",
                role: "Penguji"
            }
        })
        res.status(201).json(penguji)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const updatePenguji = async (req, res) => {
    const { username, email, nama_lengkap, id_institusi, password, nomor, photo } = req.body
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
                nomor: nomor,
                photo: photo
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