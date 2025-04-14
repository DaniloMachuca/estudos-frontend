//criando um objeto:
const carroDoJoao = {
  //atributos
  modelo: "Fiesta",
  fabricante: "Ford",
  anoModelo: 2020,
  anoFabricacao: 2020,

  //metodos
  acelerar: function () {
    console.log("vruum");
  },
};

//mau exemplo ao criar outro objeto, não é pra repetir
const carroDaMaria = {
  modelo: "Ka",
  fabricante: "Ford",
  anoModelo: 2021,
  anoFabricacao: 2020,
  acelerar: function () {
    console.log("vruum");
  },
};

//criando um classe (function) ela recebe os atributos q o objeto deve ter (como argumento da função)
function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
  //determinando os atributos
  this.modelo = modelo;
  this.fabricante = fabricante;
  this.anoModelo = anoModelo;
  this.anoFabricacao = anoFabricacao;

  //métodos
  this.acelerar = function () {
    console.log("vruum");
  };
}

//montando dois objetos com um bom exemplo
const carroDoJoao2 = new Carro("Fiesta", "Ford", 2020, 2019);
const carroDaMaria2 = new Carro("Ka", "Ford", 2021, 2020);
//const nomeDoObjeto = new nomeDaClasee(atributos);

console.log(carroDoJoao2);
console.log(carroDaMaria2);

const nome = "gian";
const idade = "30";
const ehMaiorDeIdade = true;
const conhecimento = ["html", "css", "javascript"];

//montando um objeto
const pessoa = {
  nome: nome,
  idade: idade,
  ehMaiorDeIdade: ehMaiorDeIdade,
  conhecimento: conhecimento,
};

//formas de exibir um atributo (usando o "nome" como exemplo)
console.log(pessoa.nome);
console.log(pessoa["nome"]);

//exibindo o atributo com uma função
function exibeAtributo(nomeAtributo) {
  console.log(pessoa[nomeAtributo]);
}

//definindo novo atributo
pessoa.sobrenome = null;

//impedindo de fazer alterações no objeto "pessoa"
Object.freeze(pessoa);

//tentando fazer a alteração
pessoa.nome = "joao";
exibeAtributo("nome");

//verificando se o objeto "pessoa" tem um sobrenome
if (pessoa.sobrenome) {
  console.log("a pessoa tem um sobrenome");
}

//verificando se o objeto "pessoa" tem um sobrenome como atributo
if ("sobrenome" in pessoa) {
  console.log("a pessoa tem um sobrenome");
}

//mostrando todos os atributos em um arrey
console.log(Object.keys(pessoa));

//mostrando todos os valores dos atributos em um arrey
console.log(Object.values(pessoa));
