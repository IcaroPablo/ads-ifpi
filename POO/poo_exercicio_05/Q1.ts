
class Pessoa {
    nome: string;
    constructor(nome: string) {
        this.nome = nome;
    }
}

class Conta {
    numero: string;
    saldo: number;
    cliente: Pessoa;

    constructor(numero: string, saldo: number, cliente: Pessoa) {
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = cliente;
    }

    sacar(valor: number) : boolean {
        if(this.saldo - valor < 0) return false;
        this.saldo = this.saldo - valor;
        return true;
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    getNomeCliente() {
        return this.cliente.nome;
    }

    transferencia(contaDestino: Conta, valor: number) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }

    equals(conta: Conta): boolean {
        return (this.numero == conta.numero && 
                this.cliente.nome == conta.cliente.nome);
    }
}

class Banco {
    contas: Conta[] = [];

    inserir(conta: Conta): void {

        if(!this.validarConta(conta)) return;
        this.contas.push(conta);

    }

    validarConta(conta : Conta) : boolean {

        return this.contas.filter(c => c.numero == conta.numero).length == 0;

    }

    consultar(numero: string): Conta {

        return this.contas.filter(c => c.numero == numero)[0];

    }

    sacar(numero: string, valor: number): void {

        let conta : Conta = this.consultar(numero);
        conta.sacar(valor);

    }

    depositar(numero: string, valor: number): void {

        let conta : Conta = this.consultar(numero);
        conta.depositar(valor);

    }


    transferir(numeroOrigem: string, numeroDestino: string, valor: number): void {

        let contaOrigem : Conta = this.consultar(numeroOrigem);
        let contaDestino : Conta = this.consultar(numeroDestino);

        contaOrigem.transferencia(contaDestino, valor);

    }

    quantidadeDeContas() : number {

        return this.contas.length;

    }

    valorTotalDasContas() : number {

        return this.contas.reduce((total : number, c : Conta) => total += c.saldo, 0);

    }

    mediaTotaldoBanco() : number {

        return this.valorTotalDasContas()/this.quantidadeDeContas();

    }
}