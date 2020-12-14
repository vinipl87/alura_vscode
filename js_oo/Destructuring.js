//Destructuring / spread operator
const pares = [2,4,6];
const impares = [1,3,5];
const todos = [...pares,...impares];
console.log(todos);

const [num1,num2,...outros] = [1,2,3,4,5];
console.log(outros);

const [nome1 = 'valor padrao'] = [];
console.log(nome1);

const [nome2 = 'valor padrao'] = ['novo nome'];
console.log(nome2);

const pessoa = {nome:'nome',idade:30};
const pessoaComTelefone = {...pessoa,telefone: 123456};
console.log(pessoaComTelefone);

const {nome} = pessoa;
console.log(nome);

function imprime({nome,idade}){
    console.log(nome,idade);
}