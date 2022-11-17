const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const loginInventor = async (req, res) => {
    try {
        const response = await prisma.inventor.findUnique({
            where:{
                id_inventor: req.params.id
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({msg: error.message})
    }
}

module.exports = loginInventor