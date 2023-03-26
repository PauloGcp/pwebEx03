"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = require("./pessoa");
class PessoaJuridica extends pessoa_1.default {
    cnpj;
    constructor(nome, dataNascimento, cnpj) {
        super(nome, dataNascimento);
        this.cnpj = cnpj;
        this.setNome(`${this.getNome()} - Jurídica`);
    }
    getCnpj() {
        return this.cnpj;
    }
}
exports.default = PessoaJuridica;
