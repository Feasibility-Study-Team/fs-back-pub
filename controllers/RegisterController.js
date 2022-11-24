const { PrismaClient } = require("@prisma/client");
var CryptoJS = require("crypto-js");
const prisma = new PrismaClient();

const registerInventor = async (req, res) => {
    try {
        const { username, email, nama_lengkap, id_institusi, password, nomor, role } = req.body
        const hashPassword = CryptoJS.SHA3(password).toString
        const inventor = await prisma.inventor.create({
            data: {
                username: username,
                email: email,
                nama_lengkap: nama_lengkap,
                id_institusi: id_institusi,
                password: hashPassword,
                nomor: nomor,
                photo: "",
                
            }
        })
        res.status(200).json(inventor)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

module.exports = registerInventor