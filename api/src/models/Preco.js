import mongoose from "mongoose";


const PrecoSchema = new mongoose.Schema({
    id: { type :String},
    codigo: {type :Number, required:true},
    minimo_vidas: {type:Number, required:true},
    faixa1:{type :Number},
    faixa2:{type :Number},
    faixa3:{type :Number},
    
    
    

});
//variavel que vai ser exportada para outros arquivos
const precos = mongoose.model('preco', PrecoSchema);

export default precos;