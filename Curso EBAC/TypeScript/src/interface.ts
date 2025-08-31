class conta {
  numeroDaConta: number;
  saldo: number = 0;

  constructor(numeroDaConta: number) {
    this.numeroDaConta = numeroDaConta;
  }
}

class contaSalario extends conta {
  depositar(valor: number) {
    this.saldo += valor;
  }
}

interface ITransacional {
  transferir: (valor: number, destinario: conta) => boolean;
  taxaTransferencia: number;
}

interface IExemplo2 {
  cnpj: number;
}

interface IExemplo3 extends IExemplo2 {
  telefone: number;
}

class contaCorrente extends conta implements ITransacional {
  transferir(valor: number, destinatario: conta) {
    destinatario.saldo += valor - this.taxaTransferencia;
    return true;
  }
  taxaTransferencia: number = 0;
}
