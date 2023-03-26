"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = require("./pessoa");
class PessoaFisica extends pessoa_1.default {
    cpf;
    constructor(nome, dataNascimento, cpf) {
        super(nome, dataNascimento);
        this.cpf = cpf;
        this.setNome(`${this.getNome()} - Física`);
    }
    getCpf() {
        return this.cpf;
    }
}
exports.default = PessoaFisica;
