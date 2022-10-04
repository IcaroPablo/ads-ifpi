#include <stdio.h>
#include <ctype.h>
#include "../pilhas/pilha_char.h"
#include "./fila_char.h"

int main(void) {
    char s[256];
    Fila* F = new Fila();
    Pilha* P = create_stack();
    printf("\nFrase ? ");
    scanf("%255[^\n]", s);

    for(int i = 0; s[i]; i++) {
        if(isalpha(s[i])) {
            F->append(s[i]);
            push(s[i], P);
        }
    }

    while(!F->isEmpty() && toupper(F->pop()) == toupper(pop(P)));

    if(F->isEmpty()) puts("A frase e palindroma");
    else puts("A frase nao e palindroma");

    F->popAll();
    free(F);
    destroy(P);
    return 0;
}