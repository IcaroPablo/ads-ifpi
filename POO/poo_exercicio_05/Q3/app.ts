class Conta {

    numero: string;
    saldo: number;

    constructor(numero: string, saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
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

    transferencia(contaDestino: Conta, valor: number) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }

    toString() : string {
        return `numero: ${this.numero}\nsaldo: ${this.saldo}`
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

    consultar(numero : string): Conta {

        return this.contas.filter(c => c.numero == numero)[0];

    }

    excluir(numero: string) : void {

        for(let i : number = 0; i < this.contas.length; i++) {
            if(this.contas[i].numero == numero) {
                this.contas.splice(i, 1);
                break;
            }
        }
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

let b: Banco = new Banco();
let opcao: string;

do {
    console.log(
        '\nBem vindo' +
        '\nDigite uma opção:');

    console.log(
        '\n1 - Cadastrar' +
        '\n2 - Consultar' +
        '\n3 - Sacar' +
        '\n4 - Depositar' +
        '\n5 - Excluir' +
        '\n6 - Transferir' +
        '\n7 - Totalizações' +
        '\n0 - Sair\n\n> ');

    opcao = prompt() as string;

    switch (opcao) {
        case "1":
            inserir();
            break
        case "2":
            consultar();
            break
        case "3":
            sacar();
            break
        case "4":
            depositar();
            break
        case "5":
            excluir();
            break
        case "6":
            transferir();
            break
        case "7":
            totalizacoes();
            break
        }

    prompt("Operação finalizada. Digite <enter>");

} while (opcao != "0");

console.log("Aplicação encerrada");

function inserir() : void {

    console.log("\nCadastrar conta\n");
    let numero : string = prompt('Digite o número da conta:') as string;

    let conta : Conta = new Conta(numero, 0);

    b.inserir(conta);
}

function consultar() : void {

    let numero : string = prompt('Digite o número da conta:') as string;
    
    let conta : Conta = b.consultar(numero)
    
    console.log(conta.toString());

}

function sacar() : void {

    let numero : string = prompt('Digite o número da conta:') as string;

    let valor: number = Number(prompt('Digite o valor a ser sacado da conta:'));

    b.sacar(numero, valor)

}

function depositar() : void {

    let numero : string = prompt('Digite o número da conta:') as string;

    let valor: number = Number(prompt('Digite o valor a ser depositado na conta:'));

    b.depositar(numero, valor)

}

function excluir() : void {

    let numero : string = prompt('Digite o número da conta:') as string;

    b.excluir(numero);

}

function transferir() : void {

    let numeroOrigem : string = prompt('Digite o número da conta de origem:') as string;

    let numeroDestino : string = prompt('Digite o número da conta de destino:') as string;

    let valor: number = Number(prompt('Digite o valor a ser depositado na conta:'));

    b.transferir(numeroOrigem, numeroDestino, valor);

}

function totalizacoes() : void {

    console.log(b.valorTotalDasContas());

}