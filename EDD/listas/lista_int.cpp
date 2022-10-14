#include <stdio.h>
#include <string.h>

typedef struct item {
	int id;
	char valor[50];	
} Item; 

Item list[30];

int maximo = sizeof(list)/sizeof(list[0]);

int qa = 0;

void incluirDesordenado(Item e) {

	int cont;

	printf("\nInserir Novo Item:");
	do {
		if (qa < maximo) {
			printf("\ninforme o id do item: ");
			scanf("%d",&list[qa].id);
			printf("\ninforme o valor do item: ");
			scanf("%s",list[qa].valor);
			qa++;
			printf("\n\nItem Inserido com Sucesso!!!\n");
		} else { 
			printf("\n\n Nao Pode Inserir - lista cheia!!!\n");
			break;
		}
		printf("\n\n Inserir outro(1-sim/2-nao)? ");
		scanf("%d",&cont);
	} while (cont == 1);

}

int procura(int id) {	
	for(int i = 0; i < maximo; i++) {
		if(list[i].id == id) {
			return i;
		}
	}
	return -1;
}

void mostrar(int pos) {

	if(pos < maximo) {
		printf("elemento: %d\nid: %d\nvalor: %s", pos, list[pos].id, list[pos].valor);
	}

}

void consultar(int id) {	
	int pos = procura(id);
	if(pos > -1) {
		mostrar(pos);
	} else {
		printf("\nelemento não existe");
	}
}

void remover() {

	int matprocurada, i, cont, achou, resp;
	do {
		printf("\nRemover Item:");
		printf("\nId do Item: ");
		scanf("%d",&matprocurada);

		achou = procura(matprocurada);
		if (achou != -1) {
			mostrar(achou);
			printf("\nDeseja remover o item (1-sim/2-nao)? ");
			scanf("%d",&resp);

			if (resp==1) {
				remover00(achou);
				// remover01(achou);

				printf("\n\nitem removido com Sucesso!!!\n");
			} else {
				printf("\n\n\aO item nao foi removido!!!\n");
				break;
			}
		} else {
			printf("\n\naNumero de id Incorreto!!!!!!\n");
		}

		printf("\n\nRemover outro(1-sim/2-nao)? ");
		scanf("%d",&cont);
	} while (cont == 1);

}

//estrat�gia 1: colocar o ultimo elemento da lista na posi��o do elemento removido
void remover00(int pos) {

	list[pos] = list[qa];
	qa--;

}

//estrat�gia 2: mover TODOS os elementos que est�o AP�S  o elemento que deve ser removido UMA POSI��O A FRENTE.
void remover01(int pos) {

	if(pos == maximo-1) qa--;
	else {
		for(int i = pos; i <= qa; i++) {
			list[i] = list[i+1];
		}
	}

	qa--;

}

int main() {
	strcpy(list[0].valor, "oi");
	printf("%s", list[0].valor);
	printf("%s", list[1].valor);

	return 0;
}