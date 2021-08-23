import { Cliente } from "./Cliente.js"

export class ContaCorrente {
    static numeroDeContas = 0;
    agencia;
    _saldo = 0;
    _cliente;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get agencia(){
        return this.agencia;
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this.saldo;
    }

    constructor(cliente, agencia){
        this._cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.numeroDeContas += 1;
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