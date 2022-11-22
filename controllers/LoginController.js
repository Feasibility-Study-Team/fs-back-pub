const { PrismaClient } = require("@prisma/client");
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();

const loginInventor = async (req, res) => {
    try {
        const { username, password } = req.body
        if (!username) {
            res.status(400).send("Username tidak boleh kosong")
        }
        if (!password) {
            res.status(400).send("Password tidak boleh kosong")
        }
        const response = await prisma.inventor.findUnique({
            where: {
                username: username
            }
        })

        if (response && password == response.password) {
            const token = jwt.sign({
                id_inventor : response.id_inventor
            })
        }
        res.status(200).json(response.username)
        res.send("Success")
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

module.exports = loginInventor