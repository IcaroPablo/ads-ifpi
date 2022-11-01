#include "../listas/gen_int_list.h"

void ins(int new_value, List* list) {
    List* last;
    while(list != NULL && list->value < new_value) {
        last = list;
        list = list->next;
    }

    if(list == NULL) {
        last->next = create_list(new_value);
    } else {
        List* novo = create_list(list->value);
        novo->next = list->next;
        list->value = new_value;
        list->next = novo;
    }
}

void insSR(int new_value, List* list) {
    List* last;
    while(list != NULL && list->value < new_value) {
        last = list;
        list = list->next;
    }

    if(list == NULL) {
        last->next = create_list(new_value);
    } else if(list->value != new_value) {
        List* novo = create_list(list->value);
        novo->next = list->next;
        list->value = new_value;
        list->next = novo;
    }
}