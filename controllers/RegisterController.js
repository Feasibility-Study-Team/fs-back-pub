const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const registerInventor = async (req, res) => {
    const { username, email, nama_lengkap, id_institusi, password, nomor, photo } = req.body
    try {
        const inventor = await prisma.inventor.create({
            data: {
                username: username,
                email: email,
                nama_lengkap: nama_lengkap,
                id_institusi: id_institusi,
                password: password,
                nomor: nomor,
                photo: photo
            }
        })
        res.status(200).json(inventor)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

module.exports = registerInventor