"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    nome;
    idade;
    dataNascimento;
    constructor(nome, dataNascimento) {
        const today = new Date().getFullYear();
        this.nome = nome;
        this.idade = today - dataNascimento.getFullYear();
        this.dataNascimento = dataNascimento;
    }
    getNome() {
        return this.nome;
    }
    getDataNascimento() {
        return this.dataNascimento;
    }
    getIdade() {
        return this.idade;
    }
    setNome(newName) {
        this.nome = newName;
    }
}
exports.default = Pessoa;
