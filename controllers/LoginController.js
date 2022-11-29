const { PrismaClient } = require("@prisma/client");
var CryptoJS = require("crypto-js");
const jsonwebtoken = require('jsonwebtoken')
require('dotenv').config()

const prisma = new PrismaClient();

const loginInventor = async (req, res) => {
    const { username, password } = req.body

    const dataUser = await prisma.inventor.findFirst({
        where: {
            OR: [
                { username: username },
                { email: username }
            ]
        }
    })

    if (dataUser) {
        const passwordUser = CryptoJS.SHA3(password, { outputLength: 256 }).toString()
        if (dataUser.password == passwordUser) {
            const data = {
                id: dataUser.id_inventor,
                role: dataUser.role
            }
            const token = await jsonwebtoken.sign(data, process.env.JWT_SECRET, { expiresIn: '1 days' })
            return res.status(200).json({
                msg: 'sukses',
                token: token
            })
        }
    }

    return res.status(404).json({
        error: "Username/password salah!"
    })
}

module.exports = loginInventor