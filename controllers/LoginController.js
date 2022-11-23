const { PrismaClient } = require("@prisma/client");
const jwt = require('jsonwebtoken');
var CryptoJS = require("crypto-js");

const prisma = new PrismaClient();

const loginInventor = async (req, res) => {
    try {
        const { username, password } = req.body
        const hashPassword = CryptoJS.SHA3(password).toString
        const response = await prisma.inventor.findUnique({
            where: {
                username: username
            }
        })

        if (response.password == hashPassword) {
            // const token = jwt.sign({
            //     id_inventor : response.id_inventor
            // })
            res.status(200).json(response)
            res.send("Success")
        }
        else {
            res.status(200).json(response)
            res.send("Wrong Password")
        }
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

module.exports = loginInventor