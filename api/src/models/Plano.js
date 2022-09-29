import mongoose from "mongoose";


const PlanoSchema = new mongoose.Schema({
    id: { type :String},
    registro: {type :String, required:true,min:[4,'Por favor digite mais de 3 letras'],validate:{
        validator:checkExist,
        message: props => `{props.value} nao existe`

    }},
    nome: {type:String, required:true, min:[4,'Por favor digite mais de 3 letras']},
    code: [{type:mongoose.Schema.Types.ObjectId, ref:'preco',required:true}],//referenciando com outra tabela
    
    

});

function checkExist(value) {
    
    if(!this.registro){
        return false;
    }else{
        return true;
    }
}
//variavel que vai ser exportada para outros arquivos
const planos = mongoose.model('plano', PlanoSchema);

export default planos;