import membroModel from "../../models/Membro.js"
import Membros from "../../models/Membros.js";
const Integrantes = new Membros()

export const CreateMembro = (req, res) => {
    const { nome, idade, posicao, descricao } = req.body;
    ValidaMembro(req, res);
    if (ValidaMembro) {
        const equipe = new membroModel(nome, idade, posicao, descricao)
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
    ValidaMembro(req, res);

    Integrantes.updateMembroById(id, updatedMembro);
    res.send(`Roupa atualizada com sucesso. ID: ${id}`);


};
export const DeleteMembro = (req, res) => {
    const { id } = req.params;
    Integrantes.deleteMembroById(id);
    return res.status(200).send({
        message: `O item com o id:${id} foi removido com sucesso`
    });

}
export const getAllMembro = (req, res) => {
    res.send(Integrantes.getAllMembro());
};
export const ValidaMembro = (req, res) => {
    const { nome, idade, posicao, descricao } = req.body;
    if (nome == null, idade == null, posicao == null, descricao == null) {
        console.log("Preencha todos os campos");
        return res.status(400).send({
            message: `Preencha todos os campos`
        });

    } if (posicao !="Chefe de cozinha" && posicao != "Crítico Gastronomico" ) {
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