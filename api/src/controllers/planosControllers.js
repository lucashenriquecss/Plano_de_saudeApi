import planos from "../models/Plano.js"

class PlanoController {

    static listarPlanos = (req,res) => {
        planos.find()
            .populate('code')
            .exec((err, planos) =>{           
            res.status(200).json(planos)
        })
       
    }
    static listarPlanoId = (req, res) => {
        const id = req.params.id;
        planos.findById(id)
            .populate('code')         
            .exec((err, planos) =>{
            if (err) {
                res.status(400).send({message: `${err.message}  - Falha ao encontrar `})
            } else {
                res.status(200).json(planos)
            }
        })
    }
    static cadastrarPlano = (req, res) => {
        let plano = new planos(req.body);
        plano.save((err)=>{
            if (err) {
                res.status(500).send({message: `${err.message}  - Falha ao cadastrar `});
            }else{
                res.status(201).send(plano.toJSON());
            }
        })
    }
    static atualizarPlano = (req, res) => {
        const id = req.params.id
        //localiza pelo id e atualiza
        planos.findByIdAndUpdate(id, {$set: req.body },(err) => {
            if(!err){
                res.status(200).send({message: "Atualizado com sucesso"});
            }else{
                res.status(500).send({message: `${err.message}  - Falha ao atualizar livro`});
            }
        })
    }
    static deletePlano= (req, res) => {
        const id = req.params.id;
        planos.findByIdAndDelete(id,(err) =>{
            if (!err) {
                res.status(200).send({message: "Detelado com sucesso"});
            }else{
                res.status(500).send({message: err.message});
            }
        })
    }
    
}


export default PlanoController;