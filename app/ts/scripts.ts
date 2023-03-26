import PessoaJuridica from "./pessoaJuridica"
import PessoaFisica from "./pessoaFisica"
import Pessoa from "./pessoa";

const joaozinDate = new Date('2015/01/01')
const pessoaNormal = new Pessoa('Jõaozin', joaozinDate)

const joaoDate = new Date('2000/01/01')
const pessoaFísica = new PessoaFisica('João', joaoDate, '001.002.003-45')

const joaozaoDate = new Date('1979/01/01')
const pessoaJurídica = new PessoaJuridica('Joãozao', joaozaoDate, '12.345.678/0001-00.')

console.log(`Nome: ${pessoaJurídica.getNome()}\n Idade: ${pessoaJurídica.getIdade()}\n Data de nasc.: ${pessoaJurídica.getDataNascimento()} \n Cnpj: ${pessoaJurídica.getCnpj()}` );
console.log(`Nome: ${pessoaFísica.getNome()}\n Idade: ${pessoaFísica.getIdade()}\n Data de nasc.: ${pessoaFísica.getDataNascimento()} \n Cpf: ${pessoaFísica.getCpf()}` );
console.log(`Nome: ${pessoaNormal.getNome()}\n Idade: ${pessoaNormal.getIdade()}\n Data de nasc.: ${pessoaNormal.getDataNascimento()}` );
