class SituacaoFinanceira {

    valorCreditos : number = 0;
    valorDebitos : number = 0;

    saldo() : number {
        return this.valorCreditos - this.valorDebitos;
    }

}

let situacaoFinanceira : SituacaoFinanceira = new SituacaoFinanceira();

situacaoFinanceira.valorCreditos = 50;
situacaoFinanceira.valorDebitos = 60;


console.log(`Saldo da conta: ${situacaoFinanceira.saldo().toFixed(2)} reais`);