const database = require('../models')

class PrecosControllers{
    static listarTodosPrecos = async (req,res) =>{
        try {
            const todasOsPrecos = await database.Precos.findAll()  
            return res.status(200).json(todasOsPrecos)
            
        } catch (error) {
            return res.status(500).send({message: `${err.message}  - Falha ao encontrar Preço`})
        }
    }
    static listarPrecoId = async (req, res) => {
        const id = req.params.id;
        try {
            const umPreco = await database.Precos.findOne({
                where: {id: Number(id)}
            }) 
            return res.status(200).json(umPreco)      
        } catch (error) {
            return res.status(500).send({message: `${err.message}  - Falha ao encontrar Preço`})
        }
    }
    static cadastrarPreco= async (req, res) => {
        const preco = req.body
        try {
            const novoPreco= await database.Precos.create(preco) //findOne() 
            return res.status(200).json(novoPreco)      
        } catch (error) {
            return res.status(500).send({message: `${err.message}  - Falha ao criar Preço`})
        }
    }
    static atualizarPreco = async (req, res) => {
        const id = req.params.id
        const novasInfos = req.body
        //localiza pelo id e atualiza
        try {
            await database.Precos.update(novasInfos,{where: {id: Number(id)}})
            const precoAtualizado = await database.Precos.findOne({where: {id: Number(id)}})
            return res.status(200).json(precoAtualizado)      
        } catch (error) {
            return res.status(500).send({message: `${err.message}  - Falha ao atualizar Preço`})
        }
    }
    static deletePreco = async (req, res) => {
        const id = req.params.id     
        //localiza pelo id e atualiza
        try {
            await database.Precos.destroy({where: {id: Number(id)}})
            return res.status(200).json({messagem:`deletado`})      
        } catch (error) {
            return res.status(500).send({message: `${err.message}  - Falha ao deletar Preço`})
        }
    }
}

module.exports = PrecosControllers;