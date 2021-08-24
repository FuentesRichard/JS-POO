import { ContaCorrente } from "./contaCorrente";

export class ContaPoupanca{
    constructor(saldoInicial, cliente, agencia){
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
    }    

    sacar(valor) {
        if (this._saldo >= valor || valor > 0) {
            this._saldo -= valor;
            return valor;
        }
    }
    depositar(valor) {
        if (valor >= 0) {
            this._saldo += valor;
            return valor;
        }
    }

    transferir(valor, conta){
        conta.cidade = "São Paulo";
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}