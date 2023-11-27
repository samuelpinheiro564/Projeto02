import { v4 as uuidv4 } from "uuid"

class Membro{
    constructor(nome,idade,posicao,descricao){
        this.id = uuidv4();
        this.nome = nome;
        this.idade = idade;
        this.posicao = posicao;
        this.descricao = descricao;
        this.senha =this.senha;
    }
    getnome(){
        return this.nome;
    }
}
export default Membro;