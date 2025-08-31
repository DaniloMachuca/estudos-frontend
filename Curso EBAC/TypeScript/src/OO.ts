class Pessoa {
  nome: string;
  renda?: number;

  constructor(nome: string, renda?: number) {
    this.nome = nome;
    this.renda = renda;
  }

  dizOla(): string {
    return `Ola ${this.nome}`;
  }
}

class contaBancaria {
  protected saldo: number = 0;
  numeroConta: number;

  constructor(numeroConta: number) {
    this.numeroConta = numeroConta;
  }

  getSaldo() {
    return this.saldo;
  }

  private setSaldo(valor: number) {
    this.saldo = valor;
  }

  depositar(valor: number) {
    this.saldo += valor;
  }

  static retornaNumeroDoBanco() {
    return 125;
  }
}

class contaBancariaPessoaFisica extends contaBancaria {
  depositar(valor: number): void {
    this.saldo = valor * 2;
  }
}

const contaDoPedro = new contaBancariaPessoaFisica(123456);
contaBancaria.retornaNumeroDoBanco();
