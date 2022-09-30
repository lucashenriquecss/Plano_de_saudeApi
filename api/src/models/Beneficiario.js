import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
    {
        id: { type :String},
        nome: {type :String, required:true, min:[4,'Por favor digite mais de 3 letras']},
        idade: {type:Number, required:true},
        quantidade: {type:Number, required:true},
        plano:{type:Object, ref:'plano',required:true},
        total:{type:Number}
    },
    { //versionando modelos para caso inclua novo atributo ou campo para ser requerido
        versionKey: false,
    }

);
//variavel que vai ser exportada para outros arquivos
const beneficiarios = mongoose.model('beneficiario', autorSchema);

export default beneficiarios;