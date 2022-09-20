class simple_class {

    field1 : string | null;
    field2 : string;

    constructor(field1 : string, field2: string) {
        this.field1 = field1;
        this.field2 = field2;
    }
}

let simple_object;

// undefined checker irá apontar erro nesta linha
console.log(simple_object2.field3);

let simple_object2 = new simple_class("campo1", "campo2");

simple_object2.field1 = null;

// undefined checker irá apontar erro nesta linha, pois field2 não aceita nulo, apenas string
simple_object2.field2 = null;