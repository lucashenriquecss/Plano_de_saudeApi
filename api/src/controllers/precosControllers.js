import precos from "../models/Preco.js";




class PrecosController {

    static listarPrecos = (req,res) => {
        precos.find()
        .populate('codigo')
        .exec((err, precos) =>{
            res.status(200).json(precos)
        })
    }
    static listarPrecoId = (req, res) => {
        const id = req.params.id;
        precos.findById(id,(err, precos) =>{
            if (err) {
                res.status(400).send({message: `${err.message}  - Falha ao encontrar `})
            } else {
                res.status(200).json(precos)
            }
        })
    }
    static cadastrarPreco = (req, res) => {
        let preco = new precos(req.body);
        preco.save((err)=>{
            if (err) {
                res.status(500).send({message: `${err.message}  - Falha ao cadastrar `});
            }else{
                res.status(201).send(preco.toJSON());
            }
        })
    }
    static atualizarPreco = (req, res) => {
        const id = req.params.id
        //localiza pelo id e atualiza
        precos.findByIdAndUpdate(id, {$set: req.body },(err) => {
            if(!err){
                res.status(200).send({message: "Atualizado com sucesso"});
            }else{
                res.status(500).send({message: `${err.message}  - Falha ao atualizar `});
            }
        })
    }
    static deletePreco = (req, res) => {
        const id = req.params.id;
        precos.findByIdAndDelete(id,(err) =>{
            if (!err) {
                res.status(200).send({message: "Detelado com sucesso"});
            }else{
                res.status(500).send({message: err.message});
            }
        })
    }
}


export default PrecosController;