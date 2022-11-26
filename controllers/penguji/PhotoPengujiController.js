const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient

const getPhotoPengujiById = async (req, res) => {
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

const updatePhotoPengujiById = async (req, res) => {
    const { username } = req.params

    const photoUrl = req.protocol + "://" + req.get("host") + "/images/" + req.file.filename

    try {
        const inventor = await prisma.penguji.update({
            where: {
                username: username
            },
            data: {
                photo: photoUrl
            }
        })
        res.status(200).json(inventor)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

module.exports = { getPhotoPengujiById, updatePhotoPengujiById }