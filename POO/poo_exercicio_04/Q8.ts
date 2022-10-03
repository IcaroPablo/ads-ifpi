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
        if(!this.sacar(valor)) return false;
        contaDestino.depositar(valor);
        return true;
    }
}

let c1 : Conta = new Conta("1", 200);
let c2 : Conta = new Conta("2", 200);

console.log(`tentativa de sacar 300 de c1: ${c1.sacar(300)}`)
console.log(`tentativa de sacar 100 de c1: ${c1.sacar(100)}`)

console.log(`tentativa de transferir 300 de c1 para c2: ${c1.transferencia(c2, 300)}`)
console.log(`tentativa de transferir 100 de c1 para c2: ${c1.transferencia(c2, 100)}`)