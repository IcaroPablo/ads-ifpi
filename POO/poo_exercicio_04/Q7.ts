class Equipamento {

    ligado : boolean;

    constructor() {
        this.ligado = false
    }

    liga() : void {
        if(this.estaLigado()) return;
        this.ligado = true;
    }

    desliga() : void {
        if(!this.estaLigado()) return;
        this.ligado = false;
    }

    inverte() : void {
        this.ligado = !this.ligado;
    }

    estaLigado() : boolean {
        return this.ligado;
    }

}

let equipamento : Equipamento = new Equipamento();

console.log(`equipamento está ligado ? ${equipamento.estaLigado()}`);
equipamento.liga();
console.log(`equipamento está ligado ? ${equipamento.estaLigado()}`);
equipamento.desliga();
console.log(`equipamento está ligado ? ${equipamento.estaLigado()}`);