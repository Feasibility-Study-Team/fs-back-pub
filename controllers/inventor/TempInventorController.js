const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

const getTemps = async (req, res) => {
    try {
        const response = await prisma.temp_data.findMany()

        if (response) {
            return res.status(200).json(response)
        }

    } catch (error) {
        console.log(error)
        return res.status(500).json({ mgs: error.message })
    }
}

const getTempId = async (req, res) => {
    const { id } = req.params
    try {
        const response = await prisma.temp_data.findFirst({
            where: id
        })

        if(response){
            return res.status(200).json(response) 
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg: error.message})
    }
}

const createTemp = async (req, res) => {
    const {id_alat, id_data, type, value} = req.body
    try {
        const temp = await prisma.temp_data.create({
            data:{
                id_alat: id_alat,
                id_data: id_data,
                type: type,
                value: value
            }
        })

        if(temp){
            return res.status(200).json(temp)
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg: error.message})
    }
}

const updateTemp = async (req, res) =>{
    const {id_alat, id_data, type, value} = req.body
    const {id} = req.params
    try {
        const update = await prisma.temp_data.update({
            where:{
                id_temp_data: id
            },
            data: {
                id_alat: id_alat,
                id_data: id_data,
                type: type,
                value: value
            }
        })

        if(update){
            return res.status(200).json(update)
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg: error.message})
    }
}

const deleteTemp = async (req, res) => {
    const { id } = req.params
    try {
        const deleteTemp = await prisma.temp_data.delete({
            where: {
                id_temp_data : id
            }
        })

        return res.status(200).json(deleteTemp)
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: error.message})
    }
}

module.exports = {getTemps, getTempId, createTemp, updateTemp, deleteTemp}