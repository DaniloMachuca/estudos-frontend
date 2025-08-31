"use strict";
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOla() {
        return `Ola ${this.nome}`;
    }
}
class contaBancaria {
    constructor(numeroConta) {
        this.saldo = 0;
        this.numeroConta = numeroConta;
    }
    getSaldo() {
        return this.saldo;
    }
    setSaldo(valor) {
        this.saldo = valor;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    static retornaNumeroDoBanco() {
        return 125;
    }
}
class contaBancariaPessoaFisica extends contaBancaria {
    depositar(valor) {
        this.saldo = valor * 2;
    }
}
const contaDoPedro = new contaBancariaPessoaFisica(123456);
contaBancaria.retornaNumeroDoBanco();
