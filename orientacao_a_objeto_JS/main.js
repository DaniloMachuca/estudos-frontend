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

//mau exemplo, não é pra repetir
const carroDaMaria = {
  modelo: "Ka",
  fabricante: "Ford",
  anoModelo: 2021,
  anoFabricacao: 2020,
  acelerar: function () {
    console.log("vruum");
  },
};

//o argumento da função (clasee) tem os nomes do atributos
function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
  //atributos
  this.modelo = modelo;
  this.fabricante = fabricante;
  this.anoModelo = anoModelo;
  this.anoFabricacao = anoFabricacao;

  //metodos
  this.acelerar = function () {
    console.log("vruum");
  };
}

const carroDoJoao2 = new Carro("Fiesta", "Ford", 2020, 2019);
const carroDaMaria2 = new Carro("Ka", "Ford", 2021, 2020);
//const nomeDoObjeto = new nomeDaClasee(argumentos);

console.log(carroDoJoao2);
console.log(carroDaMaria2);

const nome = "gian";
const idade = "30";
const ehMaiorDeIdade = true;
const conhecimento = ["html", "css", "javascript"];

const pessoa = {
  nome: nome,
  idade: idade,
  ehMaiorDeIdade: ehMaiorDeIdade,
  conhecimento: conhecimento,
};

console.log(pessoa.nome);
console.log(pessoa["nome"]);

function exibeAtributo(nomeAtributo) {
  console.log(pessoa[nomeAtributo]);
}

exibeAtributo("nome ");
