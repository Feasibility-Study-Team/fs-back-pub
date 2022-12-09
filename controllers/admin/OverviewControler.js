const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const countInventor = async (req, res) => {
    try {
        const inventor = await prisma.inventor.count({
            where:{
                role: "Inventor"
            }
        })

        if(inventor){
            return res.status(200).json(inventor)
        }

        return res.status(301).json({
            msg: "error"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: error.message })
    }
}

const countPenguji = async (req, res) => {
    try {
        const penguji = await prisma.inventor.count({
            where:{
                role: "Penguji"
            }
        })

        if(penguji){
            return res.status(200).json(penguji)
        }
        
        return res.status(301).json({
            msg: "error"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: error.message })
    }
}

const countAlat = async (req, res) => {
    try {
        const alat = await prisma.alat.count()

        if(alat){
            return res.status(200).json(alat)
        }
        
        return res.status(301).json({
            msg: "error"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: error.message })
    }
}

module.exports = {countInventor, countPenguji, countAlat}