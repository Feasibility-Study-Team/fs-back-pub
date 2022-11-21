const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const loginInventor = async (req, res) => {
    const { username, password } = req.body
    try {
        const response = await prisma.inventor.findUnique({
            where: {
                username: username,
                password: password
            }
        })
        res.status(200).json(response.username)
        res.send("Success")
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

module.exports = loginInventor