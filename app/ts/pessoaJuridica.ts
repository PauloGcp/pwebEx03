import Pessoa from "./pessoa";
export default class PessoaJuridica extends Pessoa {

    private cnpj: string;

    constructor(nome: string, dataNascimento: Date, cnpj: string){
        super(nome, dataNascimento)
        this.cnpj = cnpj
        this.setNome(`${this.getNome()} - Jurídica`)
    }

    getCnpj(): string{
        return this.cnpj
    }
}