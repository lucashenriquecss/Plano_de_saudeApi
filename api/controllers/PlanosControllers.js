const database = require('../models')

class PlanosControllers{
    static listarTodosPlanos = async (req,res) =>{
        const { planoId } = req.params
        try {
            const todasOsPlanos = await database.Planos.findOne({ where: { id: Number(planoId) }})  
            return res.status(200).json(todasOsPlanos)
            
        } catch (error) {
            return res.status(500).send({message: `${err.message}  - Falha ao encontrar Plano`})
        }
    }
    static listarPlanoId = async (req, res) => {
        const {codigoId,planoId} = req.params;
        try {
            const umPlano = await database.Planos.findOne({
                where: {id: Number(planoId),
                    codigo_id:Number(codigoId)
                }
            }) 
            return res.status(200).json(umPlano)      
        } catch (error) {
            return res.status(500).send({message: `${err.message}  - Falha ao encontrar Plano`})
        }
    }
    static cadastrarPlano= async (req, res) => {
        const {codigoId} = req.params
        const novoPlano = { ...req.body, codigo_id: Number(codigoId) }
        try {
            const novoPlanoCriado= await database.Planos.create(novoPlano) //findOne() 
            return res.status(200).json(novoPlanoCriado)      
        } catch (error) {
            return res.status(500).send({message: `${err.message}  - Falha ao criar Plano`})
        }
    }
    static atualizarPlano = async (req, res) => {
        const {codigoId,planoId}= req.params
        const novasInfos = req.body
        //localiza pelo id e atualiza
        try {
            await database.Planos.update(novasInfos,{where: {id: Number(id),codigo_id: Number(codigoId)}})
            const planoAtualizado = await database.Planos.findOne({where: {id: Number(planoId)}})
            return res.status(200).json(planoAtualizado)      
        } catch (error) {
            return res.status(500).send({message: `${err.message}  - Falha ao atualizar Plano`})
        }
    }
    static deletePlano = async (req, res) => {
        const {codigoId,planoId} = req.params     
        //localiza pelo id e atualiza
        try {
            await database.Planos.destroy({where: {id: Number(planoId)}})
            return res.status(200).json({messagem:`deletado`})      
        } catch (error) {
            return res.status(500).send({message: `${err.message}  - Falha ao deletar Plano`})
        }
    }
}

module.exports = PlanosControllers;