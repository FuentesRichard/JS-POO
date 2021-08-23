export class Cliente {
    nome;
    _cpf;

    get nome(){
        this.nome = nome;
    }
    get cpf(){
        return this._cpf;
    }
    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}