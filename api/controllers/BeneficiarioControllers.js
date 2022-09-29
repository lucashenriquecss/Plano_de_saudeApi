const database = require('../models')

class BeneficiarioControllers{
    static listarTodosBeneficiarios = async (req,res) =>{
        try {
            const todasAsPessoas = await database.Beneficiarios.findAll()  
            return res.status(200).json(todasAsPessoas)
            
        } catch (error) {
            return res.status(500).send({message: `${err.message}  - Falha ao encontrar pessoas`})
        }
    }
    static listarBeneficiarioId = async (req, res) => {
        const id = req.params.id;
        try {
            const umaPessoa = await database.Beneficiarios.findOne({
                where: {id: Number(id)}
            }) 
            return res.status(200).json(umaPessoa)      
        } catch (error) {
            return res.status(500).send({message: `${err.message}  - Falha ao encontrar Pessoa`})
        }
    }
    static cadastrarBeneficiario= async (req, res) => {
        const pessoa = req.body
        try {
            const novaPessoa = await database.Beneficiarios.create(pessoa) //findOne() 
            return res.status(200).json(novaPessoa)      
        } catch (error) {
            return res.status(500).send({message: `${err.message}  - Falha ao criar Pessoa`})
        }
    }
    static atualizarBeneficiario = async (req, res) => {
        const id = req.params.id
        const novasInfos = req.body
        //localiza pelo id e atualiza
        try {
            await database.Beneficiarios.update(novasInfos,{where: {id: Number(id)}})
            const pessoaAtualizada = await database.Beneficiarios.findOne({where: {id: Number(id)}})
            return res.status(200).json(pessoaAtualizada)      
        } catch (error) {
            return res.status(500).send({message: `${err.message}  - Falha ao atualizar Pessoa`})
        }
    }
    static deleteBeneficiario = async (req, res) => {
        const id = req.params.id     
        //localiza pelo id e atualiza
        try {
            await database.Beneficiarios.destroy({where: {id: Number(id)}})
            return res.status(200).json({messagem:`deletado`})      
        } catch (error) {
            return res.status(500).send({message: `${err.message}  - Falha ao criar Pessoa`})
        }
    }
}
module.exports = BeneficiarioControllers;