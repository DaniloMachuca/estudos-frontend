//usando uma ArrowFunction para retornar uma string
const minhaFuncao = () => "Diz olá";

//usando uma ArrowFunction para retornar um objeto
const retornaUmCarro = () => ({
  modelo: "fusca",
  cor: "azul",
});

console.log(minhaFuncao());
console.log(retornaUmCarro());

//mostrando a diferença do conceito 'this' de uma arrow function
const mostrarDiffFunctionEArrowFunction = {
  atributo: "1",

  funcao: function () {
    console.log(this);
  },

  arrowFunction: () => {
    console.log(this);
  },
};

//exemplo
const carro = {
  velocidadeAtual: 40,

  acelerar: function () {
    this.velocidadeAtual += 10;
  },

  //não funciona
  frear: () => {
    this.velocidadeAtual -= 10;
  },
};
