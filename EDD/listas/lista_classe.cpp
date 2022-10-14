#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <iostream>

using namespace std;

class No {
	public:
		int mat;
		char nome[23];
		No *prox;
		
		No(int m,char n[23]) {
			mat=m;
			strcpy(nome,n);			
			prox=NULL;
		}
};

class Lista {
	public:
		No *inicio;
		No *fim;
	
	    Lista() {
	    	inicio = NULL;
	    	fim = NULL;
		}

		void addToFinal(int m, char n[23]) {
			No *novo= new No(m,n);
			if (fim==NULL){
				inicio = novo;
				fim = novo;
			} else{
				fim->prox=novo;
				fim=novo;
			}
		}
		
		int lst_vazia() {
			return (inicio==NULL);
		}

		void addToInicio(int m,char n[23]) {	
			
		}
		
		void mostra() {
			if (lst_vazia()) {
				cout<<"\nLista vazia!!!";
			} else {
				
			}
						
		}
		
		int remove(int mat) {
			 
		}
		
		// auxiliar no metodo remove, vai 
		//retornar o endereco do anterior
		No *busca(int mat) {
			
		}
		
		void removeTodos() {
			No *atual=inicio;
			No *proximo=NULL;

			while (atual!=NULL) {
				proximo=atual->prox;
				cout<<"\n Apaga:"<<atual->nome;
				free(atual);
				atual=proximo;						
			}

			inicio=atual;
		}
		
		// criar uma nova lista que seja o inverso da primeira
		void crialistainversa() {
				
		}
		
		//inverter a propria lista
		void listainvertida() {
			
		}
};

main() {
	Lista *l=new Lista();
	l->addToFinal(1,"Joao");
	l->addToFinal(2,"Gabriela");
	l->addToFinal(3,"Fabiola");
	l->addToInicio(5,"Joana Oliveira");
	l->addToInicio(6,"Cristiano Oliveira");
	l->mostra();
 
	l->listainvertida();
	l->mostra();
}
