export default class Pessoa {

    private nome: string;
    private idade: number;
    private dataNascimento: Date;

    constructor(nome: string, dataNascimento: Date){
        const today = new Date().getFullYear()
        this.nome = nome;
        this.idade = today - dataNascimento.getFullYear();
        this.dataNascimento = dataNascimento;
    }

    getNome(): string{
        return this.nome;
    }
    getDataNascimento(): Date{
        return this.dataNascimento;
    }
    getIdade(): number{
        return this.idade;
    }

    setNome(newName: string): void{
        this.nome = newName;
    }
}