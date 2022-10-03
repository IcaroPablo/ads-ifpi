class Jogador {

    forca : number;
    nivel: number;
    pontos: number;

    constructor(forca : number, nivel : number, pontos : number) {
        
        this.forca = forca;
        this.nivel = nivel;
        this.pontos = pontos;
    }

    calcularAtaque() : number {

        return this.forca * this.nivel;

    }

    perdePontos(dano : number) : void {

        this.pontos -= dano;

    }

    atacar (outroJogador : Jogador) : void {

        if(!outroJogador.estaVivo()) return;
        let dano : number = this.calcularAtaque();
        outroJogador.perdePontos(dano);

    }

    estaVivo() : boolean {

        return this.pontos > 0;

    }

    toString() : string {

        return `força: ${this.forca}\nnível: ${this.nivel}\npontos: ${this.pontos}\n`;

    }

}

let jogador1 : Jogador = new Jogador(12, 25, 350);
let jogador2 : Jogador = new Jogador(10, 30, 300);

console.log(jogador1.toString());
console.log(jogador2.toString());

jogador1.atacar(jogador2);
jogador2.atacar(jogador1);

console.log(jogador1.toString());
console.log(jogador2.toString());

// o jogador 1 ficará com mais pontos
