const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getDashboardAlat = async (req, res) => {
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

module.exports = getDashboardAlat