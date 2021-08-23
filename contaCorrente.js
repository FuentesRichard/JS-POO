export class ContaCorrente {
    agencia;
    #saldo = 0;

    sacar(valor) {
        if (this.#saldo < valor || valor < 0) {
            return;
        }
        this.#saldo -= valor;
    }
    depositar(valor) {
        if (valor <= 0) {
            return valor;
        }
        this.#saldo += valor;
    }
}