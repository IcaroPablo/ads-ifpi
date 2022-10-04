/*
Considerando o algoritmo abaixo, complete o código do método "main" de maneira que
sejam desenvolvidos os procedimentos de empilhar e desempilhar de uma pilha a
partir dos métodos de uma fila. Para isto, usaremos duas filas ("f1" e "f2", já
definidas no método "main"):

Obs: O objetivo é EMPILHAR OS DADOS mas USANDO os métodos da estrutura de FILA.
Ex:

Entrada = A B C
Saída = C B A
*/

#include <stdlib.h>
#include <iostream>

using namespace std;

class No {
    public:
        char nome;
        No* prox;

        No(char n)
        {
            nome = n;
            prox = NULL;
        }
};

class Fila {
    public:
        No* inicio;
        No* fim;

        Fila() {
            inicio = NULL;
            fim = NULL;
        }

        // inserir um elemento no topo da fila
        void insereNaFila(char n) {
            No* novo = new No(n);
            if (inicio == NULL) { // fila vazia
                inicio = novo;
                fim = novo;
            } else { // insere o elemento e modifica o topo
                fim->prox = novo;
                fim = novo;
            }
        }

        // retirar o elemento do topo
        char retiraDaFila() {
            No* el;
            char nome;
            if (inicio != NULL) {
                el = inicio;
                nome = el->nome;
                inicio = inicio->prox;
                free(el);
            }

            return nome;
        }

        int fila_vazia() {
            return (inicio == NULL);
        }

        void mostra() {
            No* atual;
            atual = inicio;

            cout << "\n\n-- -- -- -- Mostra a Fila -- -- -- --\n\n";

            while (atual != NULL) {
                printf("Nome: %c\n", atual->nome);

                atual = atual->prox;
            }
        }
};

int main() {
    Fila* f1 = new Fila();
    Fila* f2 = new Fila();
    int resp;
    char letra;

    do {
        cout << "\nDigite a letra: ";
        cin >> letra;

        /*
        Cada letra lida deve ser empilhada,
        mas so e possível usar os metodos da classe Fila
        Implemente a resposta da questao aqui
        */

        if(f1->fila_vazia()) {
            f1->insereNaFila(letra);

            while(!f2->fila_vazia()) {
                f1->insereNaFila(f2->retiraDaFila());
            }
        } else {
            f2->insereNaFila(letra);

            while(!f1->fila_vazia()) {
                f2->insereNaFila(f1->retiraDaFila());
            }
        }

        cout << "\nDeseja continuar ?\n1 - Sim\n2 - Nao\n> ";
        cin >> resp;
    } while (resp == 1);

    while(!f2->fila_vazia()) {
        f1->insereNaFila(f2->retiraDaFila());
    }

    f1->mostra();

    return 0;
}