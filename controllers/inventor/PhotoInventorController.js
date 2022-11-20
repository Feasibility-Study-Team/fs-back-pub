const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient

const getPhotoInvestorById = async (req, res) => {
    try {
        const response = await prisma.inventor.findUnique({
            where:{
                username: req.params.username
            }, select : {
                photo
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({msg: error.message})
    }
}

const updatePhotoInvestorById = async (req, res) => {
    const { photo } =req.body
    try {
        const inventor = await prisma.inventor.update({
            where:{
                username: req.params.username
            },
            data: {
                photo : photo
            }
        })
        res.status(200).json(inventor)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

module.exports = { getPhotoInvestorById, updatePhotoInvestorById }