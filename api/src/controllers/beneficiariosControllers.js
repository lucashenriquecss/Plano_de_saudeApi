import beneficiarios from "../models/Beneficiario.js";
import precos from "../models/Preco.js";



class BeneficiariosController {

    static listarBeneficiarios = (req,res) => {
        beneficiarios.find()
            .populate('plano')
            .exec((err, beneficiarios) =>{
            res.status(200).json(beneficiarios)
        })
    }
    static listarValorBeneficiarioId = (req, res) => {
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
                    res.status(200).json(beneficiarios)
                }
            })
        } else if (idade >= 18 && idade <=40 ) {
            beneficiarios.updateOne(id,{$mul})
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
                    res.status(200).json(beneficiarios)
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
                    res.status(200).json(beneficiarios)
                }
            })
        }  
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
                    res.status(200).json(beneficiarios)
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
                    res.status(200).json(beneficiarios)
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
                    res.status(200).json(beneficiarios)
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