class Postagem {

    id : number;
    texto : string;
    quantidadeCurtidas : number;

    curtir() : void {

        this.quantidadeCurtidas++;

    }

    toString() : string {

        return `texto: ${this.texto}\nquantidade de curtidas: ${this.quantidadeCurtidas}\n`;

    }

}

class Microblog {

    postagens : Postagem[] = [];

    inserirPostagem(postagem : Postagem) : void {

        this.postagens.push(postagem);

    }

    obterIndexDaConta(numero : number) : number {

        for(let i : number = 0; i < this.postagens.length; i++) {
            if(this.postagens[i].id == numero) return i;
        }

        return -1;
    }

    excluir(numero : number) : void {

        let index = this.obterIndexDaConta(numero);
        this.postagens.splice(index, 1);

    }

    maisCurtida() : Postagem[] {

        let maisCurtidas : Postagem[] = []

        let maiorNumeroCurtidas = 0;

        for(let i : number = 0; i < this.postagens.length; i++) {
            if(this.postagens[i].quantidadeCurtidas >= maiorNumeroCurtidas) {
                maiorNumeroCurtidas = this.postagens[i].quantidadeCurtidas;
            }
        }

        for(let i : number = 0; i < this.postagens.length; i++) {
            if(this.postagens[i].quantidadeCurtidas == maiorNumeroCurtidas) {
                maisCurtidas.push(this.postagens[i]);
            }
        }

        return maisCurtidas;

    }
    
    curtir(id : number) : void {

        let index : number = this.obterIndexDaConta(id);
        this.postagens[index].curtir();

    }

    toString() : string {

        return this.postagens.reduce((total : string, p : Postagem) => total += p.toString, "");

    }

}