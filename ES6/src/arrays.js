function separaLinhas() {
  console.log(
    "------------------------------------------------------------------------------------"
  );
}

separaLinhas();

// Construindo um array
const redesSociais = ["facebook", "twitter", "instagram"];

//fazendo um laço de repetição com o "for" para mostrar todos os itens
for (let i = 0; i < redesSociais.length; i++) {
  console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`);
}

separaLinhas();

//monstrando os itens com o "forEach"
redesSociais.forEach(function (item, indice) {
  console.log(`#${indice} Eu tenho perfil na rede social: ${item}`);
});

separaLinhas();

//criando um array de alunos
const alunos = ["Gustavo", "Júlia", "Paula", "Wagner"];

//criando um objeto para cada item do array
const alunos2 = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    curso: "Front-End",
  };
});

console.log(alunos2);

separaLinhas();

//criando um array de numeros
const numeros = [1, 2, 3, 4, 5];

//usando o .map para criar um array com o dobro dos numeros
const dobroDeNumeros = numeros.map(function (numeroAtual) {
  return numeroAtual * 2;
});

console.log(dobroDeNumeros);

separaLinhas();

//usando o find para encontrar um item específico em um array por um dos atributos dele
const paula = alunos2.find(function (item) {
  return item.nome == "Paula";
});

console.log(paula);

separaLinhas();

//usando o find para encontrar o índice de um item especifico em um array
const indiceDaPaula = alunos2.findIndex(function (item) {
  return item.nome == "Paula";
});

console.log(indiceDaPaula);

separaLinhas();

//usando o every através de uma função para verificar se todos os itens de um array satisfaem uma condição
function verifaFrontEnd() {
  const todosSaoFrontEnd = alunos2.every(function (item) {
    return item.curso == "Front-End";
  });

  console.log(todosSaoFrontEnd);
}
verifaFrontEnd();

separaLinhas();

//adicionando um item (objeto) ao array de alunos
alunos2.push({
  nome: "Wagner",
  curso: "Back-End",
});

verifaFrontEnd();

separaLinhas();

//utilizando o some para verificar se existe algum aluno de backend atraves de uma função
function verificaBackEnd() {
  const temBackEnd = alunos2.some(function (item) {
    return item.curso == "Back-End";
  });

  console.log(temBackEnd);
}

verificaBackEnd();

separaLinhas();

//verificando se um aluno é full stack atraves de uma função uilizando o some
function verificaFullStack() {
  const temFullStack = alunos2.some(function (item) {
    return item.curso == "Back-End" && item.curso == "Front-End";
  });

  console.log(temFullStack);
}

verificaFullStack();

separaLinhas();

//utilizando o "filter" para filtrar os items de um array que atendem a uma condição possuindo ou n um atributo com determinado valor, utilizando uma função própira de call back

function filtraAlunosDeBackend(aluno) {
  return aluno.curso == "Back-End";
}

const alunosBackEnd = alunos2.filter(filtraAlunosDeBackend);

console.log(alunosBackEnd);
