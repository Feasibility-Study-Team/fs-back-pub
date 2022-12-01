const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAlat = async (req, res) => {
    try {
        const response = await prisma.alat.findMany({
            include: {
                inventor: {
                    include:{
                        institusi: {
                            select:{
                                nama_institusi: true
                            }
                        }
                    },            
                },
                photo_alat: true
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const getProduct = async (req, res) => {
    try {
        const product = await prisma.alat.findMany({
            where:{
                pemasaran: true
            }
        })

        if(product){
            return res.status(200).json(product)
        }

        return res.status(400).json({msg: "error"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg: error.message})
    }
}

const getAlatById = async (req, res) => {
    try {
        const response = await prisma.alat.findUnique({
            where: {
                id_alat: req.params.id
            }, include: {
                pengujian:{
                    include:{
                        transaksi:true,
                        aspek:{
                            include:{
                                parameter:{
                                    include:{
                                        data_aspek: true
                                    }
                                }
                            }
                        },
                    },
                },
                inventor: {
                    include:{
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

const createAlat = async (req, res) => {
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

const updateAlat = async (req, res) => {
    const { nama_alat, deskripsi_alat, pemasaran } = req.body
    try {
        const alat = await prisma.alat.update({
            where: {
                id_alat: req.params.id
            },
            data: {
                nama_alat: nama_alat,
                deskripsi_alat: deskripsi_alat,
                pemasaran: pemasaran
            }
        })
        res.status(200).json(alat)
    } catch (error) {
        console.log(error)
        res.status(400).json({ msg: error.message })
    }
}

const deleteAlat = async (req, res) => {
    try {
        const alat = await prisma.alat.delete({
            where: {
                id_alat: req.params.id
            }
        })
        res.status(200).json(alat)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

module.exports = { getAlat, getAlatById, createAlat, updateAlat, deleteAlat, getProduct }