
import { LojaList } from '../../models/LojaList.js';


const lojaList = new LojaList();


export const CreateLoja = (req, res) => {
    const { nome, tipo, tamanho, cor, imagem, estoque } = req.body;
    
    if (!nome || !tipo || !tamanho || !cor || !imagem || !estoque) {
        return res.status(50).send({
            message: `Dados inválidos`
        });
    }
    if (nome.length < 6 || nome.length > 40) {
        return res.status(100).send({
            message: `O nome deve conter entre 3 e 30 caracteres`
        });
    }if( tipo.length > 50) {
        return res.status(100).send({
            message: `O tipo deve conter até  50 caracteres`
        });

    }
    if (tamanho !== 'PP' && tamanho !== 'P' && tamanho !== 'M' && tamanho !== 'G' && tamanho !== 'GG' && tamanho !== 'XG') {
        return res.status(300).send({
            message: `Tamanho Nao ta no Padrao por favor escolha entre: PP,P,M,G ou GG`
        });
    }
    if (estoque !== Number) {
        return res.status(400).send({
            message: `O estoque deve ser um número`
        });
    }
    if (estoque < 0) {
        return res.status(500).send({
            message: `O estoque deve ser um número positivo`
        });
    } if(nome ="" && tipo =="" && tamanho =="" && cor =="" && imagem =="" && estoque ==""){
        return res.status(600).send({
            message: `Por favor preencha todos os campos`
        });
    }
    lojaList.add(nome, tipo, tamanho, cor, imagem, estoque);

    return res.status(200).send({
        message: `Essa Peça ${nome} do tipo${tipo} do tamanho ${tamanho} da cor ${cor}
     com a imagem ${imagem} com o estoque ${estoque} foi criada com sucesso`
    });

}
export const updateLoja = (req, res) => {
    const id = req.params;
    const { nome, tipo, tamanho, cor, imagem, estoque } = req.body;
    if (!nome || !tipo || !tamanho || !cor || !imagem || !estoque) {
        return res.status(50).send({
            message: `Dados inválidos`
        });
    }
    if (nome.length < 6 || nome.length > 40) {
        return res.status(100).send({
            message: `O nome deve conter entre 3 e 30 caracteres`
        });
    }
if(imagem !== `${imagem}.png` &&   imagem !== `${imagem}.jpg` && imagem !== `${imagem}.jpeg` && imagem !== `${imagem}.gif`){
    return res.status(100).send({
        message: `URL invalida`
    });
    }
    if (tamanho !== 'PP' && tamanho !== 'P' && tamanho !== 'M' && tamanho !== 'G' && tamanho !== 'GG') {
        return res.status(300).send({
            message: `Tamanho Nao ta no Padrao por favor escolha entre: PP,P,M,G ou GG`
        });
    }
    if (estoque !== Number) {
        return res.status(400).send({
            message: `O estoque deve ser um número`
        });
    }
    if (estoque < 0) {
        return res.status(500).send({
            message: `O estoque deve ser um número positivo`
        });
    } if(nome ="" && tipo =="" && tamanho =="" && cor =="" && imagem =="" && estoque ==""){
        return res.status(600).send({
            message: `Por favor preencha todos os campos`
        });
    }
    
    lojaList.update(nome, tipo, tamanho, cor, imagem, estoque, id);

    return res.status(200).send({
        message: `O item com o id:${id} foi atualizado com sucesso`
    });

}
export const DeleteLoja = (req, res) => {
    const id = req.params;
    if(!id){
        return res.status(50).send({
            message: `nao encontrado`
        });
    }
    if (!nome || !tipo || !tamanho || !cor || !imagem || !estoque) {
        return res.status(50).send({
            message: `Dados inválidos`
        });
    }
    if (nome.length < 6 || nome.length > 40) {
        return res.status(100).send({
            message: `O nome deve conter entre 3 e 30 caracteres`
        });
    }if(imagem !== `${imagem}.png` &&   imagem !== `${imagem}.jpg` && imagem !== `${imagem}.jpeg` && imagem !== `${imagem}.gif`){
        return res.status(100).send({
            message: `URL invalida`
        });
    }
    if (tamanho !== 'PP' && tamanho !== 'P' && tamanho !== 'M' && tamanho !== 'G' && tamanho !== 'GG') {
        return res.status(300).send({
            message: `Tamanho Nao ta no Padrao por favor escolha entre: PP,P,M,G ou GG`
        });
    }
    if (estoque !== Number) {
        return res.status(400).send({
            message: `O estoque deve ser um número`
        });
    }
    if (estoque < 0) {
        return res.status(500).send({
            message: `O estoque deve ser um número positivo`
        });
    } if(nome ="" && tipo =="" && tamanho =="" && cor =="" && imagem =="" && estoque ==""){
        return res.status(600).send({
            message: `Por favor preencha todos os campos`
        });
    }
    lojaList.remove(nome, tipo, tamanho, cor, imagem, estoque, id);

    return res.status(200).send({
        message: `O ${nome}com o id:${id} foi deletado com sucesso`
    });
    
}
export const ListarLoja = (req, res) => {
//para definir a listar()  
    const list = listar();
    return res.status(200).send({
        message: `Essa é a lista de todos os itens ${list}`
    });
}

