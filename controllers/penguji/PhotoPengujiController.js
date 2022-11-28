const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient

const getPhotoPengujiById = async (req, res) => {
    try {
        const response = await prisma.penguji.findUnique({
            where: {
                id_penguji: req.params.id
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
    const { id_penguji } = req.params

    const photoUrl = req.protocol + "://" + req.get("host") + "/images/" + req.file.filename

    try {
        const penguji = await prisma.penguji.update({
            where: {
                id_penguji: id_penguji
            },
            data: {
                photo: photoUrl
            }
        })
        res.status(200).json({
            data: penguji,
            image: photoUrl
        })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

module.exports = { getPhotoPengujiById, updatePhotoPengujiById }