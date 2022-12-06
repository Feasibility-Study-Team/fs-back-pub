const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getUji = async (req, res) => {
    try {
        const uji = await prisma.uji.findMany({
            include:{
                alat:{
                    select:{
                        id_alat: true,
                        nama_alat: true
                    }
                },
                inventor:{
                    select:{
                        id_inventor: true,
                        nama_lengkap: true
                    }
                }
            }
        })
        if (uji) {
            return res.status(200).json(uji)
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

const getUjiId = async (req, res) => {
    const { id } = req.params
    try {
        const uji = await prisma.uji.findFirst({
            where: {
                id: id
            },
            include:{
                alat: {
                    include:{
                        photo_alat: true
                    }
                }
            }
        })

        if (uji) {
            return res.status(200).json(uji)
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

const getUjiByPenguji = async (req, res) =>{
    const { penguji } = req.params
    try {
        const uji = await prisma.uji.findMany({
            where: {
                id_inventor: penguji
            },
            include:{
                alat:{
                    include:{
                        photo_alat: true
                    }
                },
                inventor:{
                    select:{
                        id_inventor: true,
                        nama_lengkap: true
                    }
                }
            }
        })

        if (uji) {
            return res.status(200).json(uji)
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

const createUji = async (req, res) => {
    const { id_alat, id_penguji } = req.body
    try {
        const uji = await prisma.uji.create({
            data: {
                Status: "Under Review",
                id_alat: id_alat,
                id_inventor: id_penguji
            }
        })
        if (uji) {
            return res.status(200).json(uji)
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

const updateUji = async (req, res) => {
    const { nilai, status, review } = req.body
    const { id } = req.params
    try {
        const uji = await prisma.uji.update({
            where:{
                id: id
            },
            data: {
                Status: status,
                nilai: nilai,
                review: review
            }
        })

        if (uji) {
            return res.status(200).json(uji)
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

const deleteUji = async (req, res) => {
    const { id } = req.params
    const uji = await prisma.uji.delete({
        where: {
            id: id
        }
    })

    if (uji) {
        return res.status(200).json(uji)
    }
    try {

    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}
module.exports = { getUji, getUjiId, createUji, updateUji, deleteUji, getUjiByPenguji }