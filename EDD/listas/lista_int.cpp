#include <stdio.h>
#include <iostream>
using namespace std;

typedef struct aluno {
	int mat;
	string nome;	
} Aluno; 

Aluno lista[30];

void incluirDesordenado(Aluno e) {

	int qa=0; int cont;
	printf("\nInserir Novo Aluno\n\n");
	do {
		if (qa < maximo) { // verifica se o vetor pode receber novo aluno
			printf("\nMatricula do Aluno: ");
			scanf("%d",&turma[qa].mat);
			printf("\nNome: ");
			scanf("%s",turma[qa].nome);
			qa++;
			printf("\n\nAluno Inserido com Sucesso!!!\n\n");
		} else { // vetor cheio
			printf("\n\n Nao Pode Inserir – Turma Cheia!!!\n\n");
			break;
		}
		printf("\n\n Inserir outro(1-sim/2-nao)? ");
		scanf("%d",&cont);
	} while (cont == 1);

}

//retorna a posicao do elemento procurado
int procura(int mat) {	

}

//recebe a posicao e imprime o elemento na tela
void mostrar(int pos) {

}

//procura o elemento e depois mostra o elemento encontrado (se nao for encontrado informa q ele nao existe)
void consultar(int mat) {	

}

//estrat�gia 1: colocar o ultimo elemento da lista na posi��o do elemento removido
void remover00() {

}

//estrat�gia 2: mover TODOS os elementos que est�o AP�S  o elemento que deve ser removido UMA POSI��O A FRENTE.
void remover01() {

}

main() {

}