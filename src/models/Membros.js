class Membros {
    constructor() {
        this.membros = [];
    }
    addMembro(membro) {
        this.membros.push(membro);
    }
    getAllMembro() {
        return this.membros;
    }
    deleteMembroById(id) {
        this.membros = this.membros.filter((membro) => membro.id !== id);
    }
    updateMembroById(id, membro) {
        const membroIndex = this.membros.findIndex((membro) => membro.id === id);
        this.membros[membroIndex] = membro;
    }
    getMembroId(id) {
        return this.membros.find((membro) => membro.id === id);
    }
    validaUsuario(nome) {
        return this.membros.find((membro) => membro.nome === nome);
    }
}
export default Membros;