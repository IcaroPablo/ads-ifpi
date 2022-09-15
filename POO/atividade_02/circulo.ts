class Circulo {
    raio: number = 0;

    calcularArea(): number {
        return Math.PI*this.raio**2
    }

    calcularPerimetro(): number {
        return Math.PI*this.raio*2
    }

}

let circulo : Circulo = new Circulo();

circulo.raio = 4;
console.log(`Área do circulo: ${circulo.calcularArea().toFixed(2)}`);
console.log(`Perímetro do circulo: ${circulo.calcularPerimetro().toFixed(2)}`);
