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
var carro = {
  velorcidadeAtual: 40,
  acelerar: function acelerar() {
    this.velorcidadeAtual += 10;
  },
  frear: function frear() {
    _this.velorcidadeAtual -= 10;
  }
};
carro.acelerar();
console.log(carro.velorcidadeAtual);
carro.frear();
console.log(carro.velorcidadeAtual);