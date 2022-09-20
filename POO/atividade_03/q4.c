#include "stdio.h"

/*
podemos converter de um tipo para o outro sem formas especiais de casting, apenas atribuindo valores
neste exemplo convertemos um float para inteiro,
mesmo com perda de informação, a conversão foi possível
*/

int main() {

    float a = 2.3;

    printf("%f\n", a);

    int b = a;

    printf("%d\n", b);

    return 0;

}
