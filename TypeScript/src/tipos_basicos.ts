//variaveis
let estaChovendo: boolean = true;

let idade: number = 37;

let altura: number = 1.83;

const nacionalidade: string = "Brasileira";

//arrays
const colegas: string[] = ["joao", "maria", "pedro"];
const tecnologia: Array<string> = ["html", "css", "js"];
const notas: ReadonlyArray<number> = [7, 8, 9, 10];

//tuplas
const lista: [nome: string, estaEstudando: boolean, idade: number] = [
  "joao",
  true,
  37,
];

//unions
let idadeDaAna: number | string = 25;
idadeDaAna = "25";

//any
let dadosDaAPI: any;
dadosDaAPI = 10;
dadosDaAPI = "string";
dadosDaAPI = true;
dadosDaAPI = [10, 20, 30];

//tentando mudar o tipo de uma variável
let curso = "Typescript";
// curso = 111;
