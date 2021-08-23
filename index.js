import { Cliente } from "./cliente";
import { ContaCorrente } from "./contaCorrente";

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.npf = "11122233309";

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = "8882233309";

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
const valorSacado = contaCorrenteRicardo.sacar(50);
contaCorrenteRicardo.depositar(200);

const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice.agencia = 1001;
contaCorrenteAlice.saldo = 0;

console.log(valorSacado);
console.log(contaCorrenteRicardo);