
export class LojaList{
    constructor(){
        this.lojas = [];
    }

add(loja){
    this.lojas.push(loja);
}
update(loja,id){
const index=this.lojas.
findIndex((loja)=>loja.id === loja.id);
this.lojas[index]=loja;
}
remove(id){
  this.lojas=this.lojas.
  filter((loja)=>loja.id !== id);
}
listar(){
    return this.lojas;
}

}