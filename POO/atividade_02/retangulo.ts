class Retangulo {
    l1: number = 0;
    l2: number = 0;

    calcularArea(): number {
        return this.l1 * this.l2;
    }

    calcularPerimetro(): number {
        return 2*this.l1 + 2*this.l2;
    }

}

let retangulo : Retangulo = new Retangulo();

retangulo.l1 = 4;
retangulo.l2 = 6;
console.log(`perímetro: ${retangulo.calcularPerimetro()}`);
