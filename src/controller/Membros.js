import membroModel from "../models/Membro.js"
import Membros from "../models/Membros.js";
import membrofixo from "../data/membrofixo.js";

const Integrantes = new Membros()

 export const exibirMembros = (req, res) => {
    Integrantes.addMembro(membrofixo.map((membro) => new membroModel(membro.nome, membro.idade, membro.posicao, membro.descricao)));
    res.send(Integrantes.getAllMembro());
}


export const CreateMembro = (req, res) => {
    const { nome, idade, posicao, descricao } = req.body;
    const equipe = new membroModel(nome, idade, posicao, descricao)

    if (Integrantes.validaUsuario(nome) != undefined) {
        console.log("Membro ja  existe");
        res.status(404).send({
            message: `Membro JA existe`
        });
    } else {
        Integrantes.addMembro(equipe);
        return res.status(200).send({
            message: `${equipe.nome} foi adicionado com sucesso${equipe.id}`
        });
    }
}

export const updatedMembro = (req, res) => {
    const { id } = req.params;
    const { nome, idade, posicao, descricao } = req.body;
    const updatedMembro = {
        id,
        nome,
        idade,
        posicao,
        descricao
    };
    validaMembro(req, res);
    if (Integrantes.getMembroId(id) == undefined) {
        res.status(404).send({
            message: `Membro nao encontrado`
        })
    }
    Integrantes.updateMembroById(id, updatedMembro);
    res.send(`Membro atualizada com sucesso. ID: ${id}`);


};
export const DeleteMembro = (req, res) => {
    const { id } = req.params;

    if (Integrantes.getMembroId(id) == undefined) {
        res.status(404).send({
            message: `Membro nao encontrado`
        })
    }
    Integrantes.deleteMembroById(id);
    return res.status(200).send({
        message: `O item com o id:${id} foi removido com sucesso`
    });

}
export const getAllMembro = (req, res) => {

    
};
export const validaMembro = (req, res) => {
    const { nome, idade, posicao, descricao } = req.body;

    if (nome == null, idade == null, posicao == null, descricao == null) {
        console.log("Preencha todos os campos");
        return res.status(400).send({
            message: `Preencha todos os campos`
        });

    } if (posicao != "chef" && posicao != "critico" && posicao !="membro" && posicao != "techlider") {
        console.log("Posição Inexistente");
        return res.status(401).send({
            message: `Posição Inexistente`
        });
    } if (idade < 0 || idade > 100) {
        console.log("Idade invalida maior que zero e menor que 100");
        return res.status(402).send({
            message: `Idade invalida maior que zero e menor que 100`
        });
    }
}