const { PrismaClient } = require("@prisma/client");
var CryptoJS = require("crypto-js");
const prisma = new PrismaClient();

const registerInventor = async (req, res) => {
    try {
        const { username, email, nama_lengkap, id_institusi, password, nomor } = req.body
        const hashPassword = CryptoJS.SHA3(password, { outputLength: 256 }).toString()
        const inventor = await prisma.inventor.create({
            data: {
                username: username,
                email: email,
                nama_lengkap: nama_lengkap,
                id_institusi: id_institusi,
                password: hashPassword,
                nomor: nomor,
                photo: "",
                role: "Inventor"
            }
        })
        res.status(200).json(inventor)
    } catch (error) {
        console.log(error)
        res.status(400).json({ msg: error.message })
    }
}

module.exports = registerInventor