// boolean

const contaPaga: boolean = false;

//Number

const idade: number = 18;

//String

const nome: string = 'Bruna';

//Array

const idades: number[] = [18,19,21];
const num: Array<number> = [1, 2, 3,]


//Tuple
let jogadores: [string, string, string];
jogadores = ['Bruna', "Alex", "Sonia"];

//Enum

enum statusAprovado {
  aprovado,
  pendete,
  reprovado
}

const statusA: statusAprovado = statusAprovado.aprovado;

//Any

const retorno: any[] = [123, 'Bruna', true]

//Void

function printar(msg: string): void{
  console.log(msg);
}

//Null e Undefined

const u: undefined = undefined;
const n: null = null;

//Object

function criar(objeto: object){

}
criar({
  propriedade: 1
})

//Never

function loopInfinito(): never{
  while(true){}
}

function erro(msg: string): never{
  throw new Error(msg);
}

// Union Tyoes
const nota: number | string = '10'
function exibirNota(nota: Number | string) {
  console.log('A nota é' + nota)
}

exibirNota('10');
exibirNota(6);

// Alias

type funcionario = {
  nome: string;
  sobrenome: string;
  dataNascimento: Date;
}

type Funcionarios = Array<string>
const funcionarios: Funcionarios = ['Bruna', 'Alex', 'Sonia']
function trataFun(funcionario: Funcionarios){

}


///////

let altura = 1.6;
altura = null;


// operador opcional (?)
type Contato = {
  nome: string;
  telefone1: string;
  telefone2?: string;
}

const contato: Contato = {
  nome: "Bruna",
  telefone1: '08867755',
}

// Type Assertion, só o auto complete 
const minhaIdade: any = 18;
(minhaIdade as number).toString

const input = document.getElementById("numero1") as HTMLInputElement;
console.log(input.value);