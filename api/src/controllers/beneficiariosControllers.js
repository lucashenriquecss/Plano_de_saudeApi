import beneficiarios from "../models/Beneficiario.js";
import precos from "../models/Preco.js";



class BeneficiariosController {

    static listarBeneficiarios = (req,res) => {
        
                
        beneficiarios.find()
            .populate({
                path:"plano",
                populate:{
                    path:"code",
                    select:{faixa1 :1,faixa2 :2,faixa3 :3}               
                }
            })
            .exec((err, beneficiarios) =>{  
            res.status(200).json(beneficiarios)
        })
    }
  
    static listarBeneficiarioId = (req, res) => {
        const id = req.params.id;
        const idade = req.body.idade;  
        
        if (idade <= 17) {       
            beneficiarios.findById(id)
                .populate({
                    path:"plano",
                    populate:{
                        path:"code",
                        select:{faixa1 :1}
                    }
                })
                .exec((err, beneficiarios) =>{
                if (err) {
                    res.status(400).send({message: `${err.message}  - Falha ao encontrar `})
                } else {
                    const total = beneficiarios.plano.code.map(item => item.faixa1).reduce((current, accumulator) => current + accumulator) * beneficiarios.quantidade
                    const objeto = {beneficiarios,total}
                    res.status(200).json(objeto)
                }
            })
        } else if (idade >= 18 && idade <=40 ) {
             beneficiarios.findById(id)
                .populate({
                    path:"plano",
                    populate:{
                        path:"code",
                        select:{faixa2 :1}
                    }
                })
                .exec((err, beneficiarios) =>{
                if (err) {
                    res.status(400).send({message: `${err.message}  - Falha ao encontrar `})
                } else {
                    const total = beneficiarios.plano.code.map(item => item.faixa2).reduce((current, accumulator) => current + accumulator) * beneficiarios.quantidade
                    const objeto = {beneficiarios,total}
                    
                    res.status(200).json(objeto)
                }
            })
        }else{
            beneficiarios.findById(id)
                .populate({
                    path:"plano",
                    populate:{
                        path:"code",
                        select:{faixa3 :1}
                    }
                })
                .exec((err, beneficiarios) =>{
                if (err) {
                    res.status(400).send({message: `${err.message}  - Falha ao encontrar `})
                } else {
                    const total = beneficiarios.plano.code.map(item => item.faixa3).reduce((current, accumulator) => current + accumulator) * beneficiarios.quantidade
                    const objeto = {beneficiarios,total}
                    res.status(200).json(objeto)
                }
            })
        }  
    }
    static cadastrarBeneficiario = (req, res) => {
        let beneficiario = new beneficiarios(req.body);
        beneficiario.save((err)=>{
            if (err) {
                res.status(500).send({message: `${err.message}  - Falha ao cadastrar `});
            }else{
                res.status(201).send(beneficiario.toJSON());
            }
        })
    }
    static atualizarBeneficiario = (req, res) => {
        const id = req.params.id
        //localiza pelo id e atualiza
        beneficiarios.findByIdAndUpdate(id, {$set: req.body },(err) => {
            if(!err){
                res.status(200).send({message: "Atualizado com sucesso"});
            }else{
                res.status(500).send({message: `${err.message}  - Falha ao atualizar `});
            }
        })
    }
    static deleteBeneficiario = (req, res) => {
        const id = req.params.id;
        beneficiarios.findByIdAndDelete(id,(err) =>{
            if (!err) {
                res.status(200).send({message: "Detelado com sucesso"});
            }else{
                res.status(500).send({message: err.message});
            }
        })
    }
}


export default BeneficiariosController;