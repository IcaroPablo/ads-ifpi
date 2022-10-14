class Banco {
    private contas: Conta[] = [];

    public inserir(conta: Conta): void {

        if(!this.validarConta(conta)) return;
        this.contas.push(conta);

    }

    private validarConta(conta : Conta) : boolean {

        return this.contas.filter(c => c.numero == conta.numero).length == 0;

    }

    private consultar(numero : string): Conta {

        return this.contas.filter(c => c.numero == numero)[0];

    }

    public excluir(numero: string) : void {

        for(let i : number = 0; i < this.contas.length; i++) {
            if(this.contas[i].numero == numero) {
                this.contas.splice(i, 1);
                break;
            }
        }
    }

    public sacar(numero: string, valor: number): void {

        let conta : Conta = this.consultar(numero);
        conta.sacar(valor);

    }

    public depositar(numero: string, valor: number): void {

        let conta : Conta = this.consultar(numero);
        conta.depositar(valor);

    }

    public transferir(numeroOrigem: string, numeroDestino: string, valor: number): void {

        let contaOrigem : Conta = this.consultar(numeroOrigem);
        let contaDestino : Conta = this.consultar(numeroDestino);

        contaOrigem.transferencia(contaDestino, valor);

    }

    public quantidadeDeContas() : number {

        return this.contas.length;

    }

    public valorTotalDasContas() : number {

        return this.contas.reduce((total : number, c : Conta) => total += c.saldo, 0);

    }

    public mediaTotaldoBanco() : number {

        return this.valorTotalDasContas()/this.quantidadeDeContas();

    }
}

let conta1 : Conta = new Conta("1", 300);
let conta2 : Conta = new Conta("2", 300);

let banco : Banco = new Banco();

banco.inserir(conta1);
banco.inserir(conta2);

banco.contas; // Property 'contas' is private and only accessible within class 'Banco'.
banco.consultar("1"); // Property 'consultar' is private and only accessible within class 'Banco'

console.log(banco.valorTotalDasContas()); // 600
