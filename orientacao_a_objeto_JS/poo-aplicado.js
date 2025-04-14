//oquer será q é isso?????????
const separadorDeLinha = "=".repeat(30);

// Criando uma classe Pessoa
function Pessoa(nome) {
  //atributos e metodos de uma pessoas
  this.nome = nome;
  this.dizOi = function () {
    console.log(this.nome + " diz olá");
  };
}

//criando uma classe Funcionario
function Funcionario(nome, cargo, salario) {
  //atributos de um funcionario
  this.cargo = cargo;
  //atributo de privado
  let _salario = salario;

  //metodos de um funcionario:
  this.dizCargo = function () {
    console.log(`eu sou um(a) ${this.cargo}`);
  };

  //metodo de encapsulamento: Getters e Setters
  this.getSalario = function () {
    return _salario;
  };
  this.setSalario = function (newSalario) {
    if (typeof newSalario === "number") {
      _salario = newSalario;
    }
  };

  //criando um método polimorfico
  this.aumento = function () {
    const novoSalario = _salario * 1.1;
    _salario = novoSalario;
  };

  //herança de um atributo da classe pessoa
  Pessoa.call(this, nome);
}

//criando uma classe Estagiário
function Estagiario(nome, salario) {
  //herdando os atributos da classe Funcionario
  Funcionario.call(this, nome, "estagiário", salario);

  //método polimorfico
  this.aumento = function () {
    const newSalario = this.getSalario() * 1.07;
    this.setSalario(newSalario);
  };
}

function Gerente(nome, salario) {
  //herdando os atributos da classe Funcionario
  Funcionario.call(this, nome, "Gerente", salario);

  //método polimorfico
  this.aumento = function () {
    const newSalario = this.getSalario() * 1.15;
    this.setSalario(newSalario);
  };
}

//criando um objeto funcionario
const funcionario1 = new Funcionario("Maria", "dev front-end", 5000);

//separa linha
console.log(separadorDeLinha);

//ações do objeto funcionario1
funcionario1.dizOi();
funcionario1.dizCargo();

//alterando o salario com um setter
funcionario1.setSalario(6000);

//acessando o salario com um getter
console.log("Eu tinha: ", funcionario1.getSalario());

//aumentando o salario
funcionario1.aumento();
console.log("Agora eu tenho: ", funcionario1.getSalario());

//separa linha
console.log(separadorDeLinha);

//criando um novo estagiario
const funcionario2 = new Estagiario("Pedro", 2000);

//acoes do estagiario1
funcionario2.dizOi();
funcionario2.dizCargo();

//aumentando o salario do estagiario
console.log("Eu recebia: ", funcionario2.getSalario());
funcionario2.aumento();
console.log("Agora recebo: ", funcionario2.getSalario());

//separa linha
console.log(separadorDeLinha);

//criando um novo Gerente
const funcionario3 = new Gerente("Joaquim", 10000);

//acoes do Gerente
funcionario3.dizOi();
funcionario3.dizCargo();

//aumentando o salario do Gerente
console.log("Eu recebia: ", funcionario3.getSalario());
funcionario3.aumento();
console.log("Agora recebo: ", funcionario3.getSalario());

//separa linha
console.log(separadorDeLinha);
