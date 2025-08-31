//função construtora
// function Pokemon(nomeDoPokemon, tipoDoPokemon) {
//   this.nome = nomeDoPokemon;
//   this.tipo = tipoDoPokemon;
// }

// const pikachu = new Pokemon("Pikachu", "elétrico");

class Pokemon {
  #hp = 100;

  constructor(nomDoPokemon, tipoDoPokemon) {
    this.nome = nomDoPokemon;
    this.tipo = tipoDoPokemon;
  }

  atacar(nomeDoAtaque) {
    console.log(`${this.nome} usou ${nomeDoAtaque}`);
  }

  recebeuAtaque() {
    this.#hp -= 10;
  }

  exibeHp() {
    console.log(this.#hp);
  }
}

class Pikachu extends Pokemon {
  constructor() {
    super("Pikachu", "Elétrico");
  }
  atacar() {
    console.log(`${this.nome} usou choque do trovão`);
  }
}

const pikachuDoAsh = new Pikachu();

const pikachu = new Pokemon("Pikachu", "Elétrico");
pikachu.atacar("Choque do Trovão");
console.log(pikachu);

pikachuDoAsh.recebeuAtaque();
pikachuDoAsh.atacar();
pikachuDoAsh.exibeHp();
