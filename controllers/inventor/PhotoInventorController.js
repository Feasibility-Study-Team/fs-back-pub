const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient

const getPhotoInvestorById = async (req, res) => {
    try {
        const response = await prisma.inventor.findUnique({
            where: {
                id_inventor: req.params.id
            }, select: {
                photo
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

const updatePhotoInvestorById = async (req, res) => {
    const { id_inventor } = req.params

    const photoUrl = req.protocol + "://" + req.get("host") + "/images/" + req.file.filename

    try {
        const inventor = await prisma.inventor.update({
            where: {
                id_inventor: id_inventor
            },
            data: {
                photo: photoUrl
            }
        })
        res.status(200).json({
            data: inventor,
            image: photoUrl
        })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

module.exports = { getPhotoInvestorById, updatePhotoInvestorById }