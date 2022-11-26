const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient

const getPhotoInvestorById = async (req, res) => {
    try {
        const response = await prisma.inventor.findUnique({
            where: {
                username: req.params.username
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
    const { username } = req.params

    // const photoUrl = req.protocol + "://" + req.get("host") + "/inventor/" + username + "/photo/" + req.file.filename

    const photoUrl = req.protocol + "://" + req.get("host") + "/images/" + req.file.filename

    try {
        const inventor = await prisma.inventor.update({
            where: {
                id_inventor: username
            },
            data: {
                photo: photoUrl
            }
        })
        res.status(200).json({ 
            data: inventor,
            image: photoUrl })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

module.exports = { getPhotoInvestorById, updatePhotoInvestorById }