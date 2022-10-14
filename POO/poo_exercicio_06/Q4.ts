class Conta {

    private _numero: string;
    private _saldo: number;

    constructor(numero: string, saldo: number) {
        this._numero = numero;
        this._saldo = saldo;
    }

    public get numero() {
        return this._numero;
    }

    public get saldo() {
        return this._saldo;
    }

    public sacar(valor: number) : boolean {
        if(this._saldo - valor < 0) return false;
        this._saldo = this.saldo - valor;
        return true;
    }

    public depositar(valor: number): void {
        this._saldo = this.saldo + valor;
    }

    public transferencia(contaDestino: Conta, valor: number) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }

    public toString() : string {
        return `numero: ${this._numero}\nsaldo: ${this._saldo}`
    }

}

let conta : Conta = new Conta("1", 300);

conta._numero; // Property '_numero' is private and only accessible within class 'Conta'
conta._saldo; // Property '_saldo' is private and only accessible within class 'Conta'

console.log(conta.saldo) // 300
console.log(conta.numero) // "1"