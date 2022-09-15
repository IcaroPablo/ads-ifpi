#include <stdio.h>
#include <stdlib.h>

typedef struct pilha {
	int value;
	struct pilha* prox;	
} Pilha;

Pilha* create_item(char valor) {
	Pilha* item = (Pilha*) malloc(sizeof(Pilha));
	item->value = valor;
	item->prox = NULL;
}

void push(int new_value, Pilha* pilha) {
	Pilha* new_item = create_item(new_value);
	if(pilha->prox == NULL) {
		pilha->prox = new_item;
	} else {
		new_item->prox = pilha->prox;
		pilha->prox = new_item;
	}
}

Pilha* create_stack() {
	Pilha* new_stack = (Pilha*) malloc(sizeof(Pilha));
	new_stack->value = NULL;
	new_stack->prox = NULL;

	return new_stack;
}

bool stack_is_empty(Pilha* pilha) {
	return pilha->prox == NULL;
}

int pop(Pilha* pilha) {
	if(!stack_is_empty(pilha)) {
		int value = pilha->prox->value;
		pilha->prox = pilha->prox->prox;
		return value;
	}

	return '\0';
}
		
int get_top(Pilha* pilha){
	if(stack_is_empty(pilha)) {
		return '\0';
	}

	return pilha->prox->value;
}