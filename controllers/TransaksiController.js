const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getTransaksi = async (req, res) => {
    try {
        const response = await prisma.transaksi.findMany()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

const getTransaksiById = async (req, res) => {
    try {
        const response = await prisma.transaksi.findUnique({
            where:{
                id_transaksi: req.params.id
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({msg: error.message})
    }
}

const createTransaksi = async (req, res) => {
    const { id_pengujian,id_penguji } =req.body
    try {
        const transaksi = await prisma.transaksi.create({
            data: {
                id_pengujian: id_pengujian,
                id_penguji: id_penguji
            }
        })
        res.status(201).json(transaksi)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

const updateTransaksi = async (req, res) => {
    const { id_pengujian, id_penguji } =req.body
    try {
        const transaksi = await prisma.transaksi.update({
            where:{
                id_transaksi: req.params.id
            },
            data: {
                id_pengujian: id_pengujian,
                id_penguji: id_penguji
            }
        })
        res.status(200).json(transaksi)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

const deleteTransaksi = async (req, res) => {
    try {
        const transaksi = await prisma.transaksi.delete({
            where:{
                id_transaksi: req.params.id
            }
        })
        res.status(200).json(transaksi)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

module.exports = { getTransaksi, getTransaksiById, createTransaksi, updateTransaksi, deleteTransaksi }