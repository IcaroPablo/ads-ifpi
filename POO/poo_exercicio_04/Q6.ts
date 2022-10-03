class Triangulo {

    a : number;
    b : number;
    c : number;

    constructor(a : number, b : number, c : number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    ehTriangulo() {
        return Math.abs(this.b - this.c) < this.a && this.a < this.b + this.c;
    }

    ehIsosceles() : boolean {
        if(this.ehTriangulo()) return this.a == this.b || this.b == this.c || this.c == this.a;
        return false;
    }
    
    ehEquilatero() : boolean {
        if(this.ehTriangulo()) return this.a == this.b && this.b == this.c;
        return false;
    }
        
    ehEscaleno() : boolean {
        if(this.ehTriangulo()) return this.a != this.b && this.b != this.c && this.c != this.a;
        return false;
    }

}

let triangulo1 : Triangulo = new Triangulo(2, 3, 4);

console.log(`é isósceles ? ${triangulo1.ehIsosceles()}`);
console.log(`é equilátero ? ${triangulo1.ehEquilatero()}`);
console.log(`é escaleno ? ${triangulo1.ehEscaleno()}`);

let triangulo2 : Triangulo = new Triangulo(2, 2, 3);

console.log(`é isósceles ? ${triangulo2.ehIsosceles()}`);
console.log(`é equilátero ? ${triangulo2.ehEquilatero()}`);
console.log(`é escaleno ? ${triangulo2.ehEscaleno()}`);

let triangulo3 : Triangulo = new Triangulo(2, 2, 2);

console.log(`é isósceles ? ${triangulo3.ehIsosceles()}`);
console.log(`é equilátero ? ${triangulo3.ehEquilatero()}`);
console.log(`é escaleno ? ${triangulo3.ehEscaleno()}`);