const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAlatPage = async (req, res) => {
    try {
        const response = await prisma.alat.findMany({
            include: {
                inventor: true,
                photoAlat: true
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const getAlatPageById = async (req, res) => {
    try {
        const response = await prisma.alat.findUnique({
            where: {
                id_alat: req.params.id
            },
            include: {
                inventor: true,
                photoAlat: true
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

module.exports = { getAlatPage, getAlatPageById}