import Pessoa from "./pessoa";
export default class PessoaFisica extends Pessoa {

    private cpf: string;

    constructor(nome: string, dataNascimento: Date, cpf: string){
        super(nome, dataNascimento)
        this.cpf = cpf
        this.setNome(`${this.getNome()} - Física`)
    }

    getCpf(): string{
        return this.cpf
    }
}