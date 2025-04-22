//map é tipo um dicionario, conjunto de valores, valores esses q são como objetos

//criando o um map
let meuMap = new Map();
//setando a chave e dps o valor
meuMap.set("nome", "Danilo");
meuMap.set("stack", "html, css, js");
//mostra o map inteiro
console.log(meuMap);

//recupera um valor com a chave usando o get
const nome = meuMap.get("nome");
console.log(nome);

//vendo o tamanho do map
console.log(meuMap.size);

//verificando se há uma chave em um map
console.log(meuMap.has("nome"));
console.log(meuMap.has("sobrenome"));

//para recuperar as chaves
for (let chave of meuMap.keys()) {
  console.log(chave);
}

//para recuperar os valores
for (let valor of meuMap.values()) {
  console.log(valor);
}

//para ver os pares de chaves e valores
for (let [chave, valor] of meuMap.entries()) {
  console.log(`${chave}: ${valor}`);
}

//usando o forEach para listar cada valor de um map
meuMap.forEach((valor, chave) => {
  console.log(`${chave}: ${valor}`);
});

//removendo uma chave do map
meuMap.delete("stack");
console.log(meuMap);

//limpando o map
meuMap.clear();
console.log(meuMap.size);

//criando um set
const cpfs = new Set();

//adicionando valores ao set
cpfs.add("32791151087");
cpfs.add("66208876001");
cpfs.add("43112810058");

console.log(cpfs);

//provando q as chaves e valores são iguais
console.log(cpfs.keys());
console.log(cpfs.values());

//usando o forEach para listar cada valor de um set (funciona com o map tbm)
cpfs.forEach((valor) => {
  console.log(valor);
});

//mostrando como o set não permite itens duplicados
const array = [
  "Gian Souza",
  "José Paulo",
  "Maria Isabel",
  "Luana",
  "Luana",
  "Gian Souza",
];

const arraySet = new Set([...array]);
const arrayLimpo = [...arraySet];

console.log(arrayLimpo);
