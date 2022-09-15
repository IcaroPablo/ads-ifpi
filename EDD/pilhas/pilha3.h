#include <stdio.h>
#include <stdlib.h>

int max = 50;
int topo = -1;
char item[50];

void push(char n) {
	if(topo != (max-1)) {
		item[++topo] = n;
	}	
}
		
char pop() {
	if(topo != 0) {
		return item[topo--];
	}	
}

bool pilhaVazia() {
	return topo == -1;
}
		
int pilhaCheia() {
	return topo == 49;
}

char getTopo() {
	return item[topo];
}