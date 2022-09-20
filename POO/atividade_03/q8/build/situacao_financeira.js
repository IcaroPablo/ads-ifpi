var SituacaoFinanceira = /** @class */ (function () {
    function SituacaoFinanceira() {
        this.valorCreditos = 0;
        this.valorDebitos = 0;
    }
    SituacaoFinanceira.prototype.saldo = function () {
        return this.valorCreditos - this.valorDebitos;
    };
    return SituacaoFinanceira;
}());
var situacaoFinanceira = new SituacaoFinanceira();
situacaoFinanceira.valorCreditos = 50;
situacaoFinanceira.valorDebitos = 60;
console.log("Saldo da conta: ".concat(situacaoFinanceira.saldo().toFixed(2), " reais"));
