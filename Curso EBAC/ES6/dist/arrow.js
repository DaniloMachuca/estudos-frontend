"use strict";

var _this = void 0;
//usando uma ArrowFunction para retornar uma string
var minhaFuncao = function minhaFuncao() {
  return "Diz olá";
};

//usando uma ArrowFunction para retornar um objeto
var retornaUmCarro = function retornaUmCarro() {
  return {
    modelo: "fusca",
    cor: "azul"
  };
};
console.log(minhaFuncao());
console.log(retornaUmCarro());

//mostrando a diferença do conceito 'this' de uma arrow function
var mostrarDiffFunctionEArrowFunction = {
  atributo: "1",
  funcao: function funcao() {
    console.log(this);
  },
  arrowFunction: function arrowFunction() {
    console.log(_this);
  }
};

//exemplo
var carro = {
  velocidadeAtual: 40,
  acelerar: function acelerar() {
    this.velocidadeAtual += 10;
  },
  //não funciona
  frear: function frear() {
    _this.velocidadeAtual -= 10;
  }
};