export class Loja{
constructor(){
    this.nome =this.nome;
    this.tipo = this.tipo;
    this.tamano = this.tamanho;
    this.cor = this.cor;
    this.imagem = this.imagem;
    this.estoque = this.estoque;
    this.id =this.generatorId(nome, tipo, tamanho, cor, imagem, estoque);
}
generatorId(){
    return Math.floor(Math.random() * 1000);
}

}