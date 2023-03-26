class Pessoa {
    nome;
    idade;
    dataNascimento;
    constructor(nome, idade, dataNascimento) {
        this.nome = nome;
        this.idade = idade;
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
