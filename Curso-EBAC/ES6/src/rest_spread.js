//estrutura dicionário
function somar() {
  //criando uma variavel da soma total
  let soma = 0;

  //o for analisa cada item do "arguments" e soma eles a variável soma quantas vezes necessárias
  for (let i = 0; i < arguments.length; i++) {
    soma += arguments[i];
  }

  return soma;
}

console.log(somar(10, 20, 30, 40, 50));

//usando o rest
function somarComRest(...numeros) {
  //criando uma variavel da soma total utilizando a função reduce no array criado com o rest e passando o callback como arrow function
  const soma = numeros.reduce((total, numeroAtual) => {
    total += numeroAtual;
    return total;
  }, 0);
  return soma;
}

//usando o spread
const numeros = [10, 20, 30, 40, 50];
console.log(...numeros);

const times = ["Santos", "Palmeiras", "Corinthians", "São Paulo"];
const times2 = ["Vasco", "Bota-fogo", "Flamengo", "Fluminense"];
const timesTotal = [...times, ...times2];
console.log(timesTotal);

//spread com objetos
const carroDaJulia = {
  modelo: "gol",
  marca: "volkswagen",
  motor: 1.6,
};

const carroDoPaulo = {
  //copiou todo conteúdo do carro da julia e sobreescreveu o valor do motor
  ...carroDaJulia,
  motor: 2.0,
};

//desestruturação: pegando um item do array e passando para uma variavel
const { motor: motorCarroDaJulia } = carroDaJulia;
const { motor: motorCarroDaPaulo } = carroDoPaulo;

console.log(motorCarroDaPaulo);
console.log(motorCarroDaJulia);

const [...outrosTimes] = times;
console.log(outrosTimes);
