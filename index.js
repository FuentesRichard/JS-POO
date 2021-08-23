import { Cliente } from "./cliente.js";
import { ContaCorrente } from "./contaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const conta1 = new ContaCorrente(cliente1, 1001);

const cliente2 = new Cliente("Alice", 8882233309);
const conta2 = new ContaCorrente(cliente2, 102);

console.log(conta1);
console.log(ContaCorrente.numeroDeContas);