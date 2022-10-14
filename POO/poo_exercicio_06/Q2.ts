class Hora {

    private horas : number;
    private minutos : number;
    private segundos : number;

    constructor(horas : number, minutos : number, segundos : number) {

        this.horas = horas;
        this.minutos = minutos;
        this.segundos = segundos;

    }

    public exibirHoras() : number {
        return this.horas;
    }

    public exibirMinutos() : number {
        return this.minutos;
    }

    public exibirSegundos() : number {
        return this.segundos;
    }

    public exibirHoraCompleta() : string {
        return `${this.horas}:${this.minutos}:${this.segundos}`
    }

}

let hora : Hora = new Hora(22, 11, 34);
console.log(hora.exibirHoras()); // 22
console.log(hora.exibirMinutos()); // 11
console.log(hora.exibirSegundos()); // 34
console.log(hora.exibirHoraCompleta()); // 22:11:34

console.log(hora.horas) // Property 'horas' is private and only accessible within class 'Hora'.