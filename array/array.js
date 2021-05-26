/**
 * Ejemplo simple de un Array
 */

// const array = ["Dilan", "Karen", "Katerine"];
// array.push("Daniel");

class MyArray {
    constructor() {
        // Defino la longitud del array
        this.length = 0;

        // Defino un objeto para mas adelante almacenar los datos
        this.data = {}
    }

    // En este metodo le paso como parametro el indice o index para poder buscar el elemento
    get(index) {
        // Aquí devuelvo el valor buscado
        return this.data[index];
    }

    // El parametro que recive será el item para agregar al array
    push(item) {

        // Asignar el index al elemento que vayamos agregando
        this.data[this.length] = item;

        // Incrementar la longitud del array
        this.length++;

        // Retorna los datos actualizados
        return this.data;
    }
}

const myArray = new MyArray();

myArray.push("Dilan");
myArray.push("Daniela");

console.log(myArray.get(1));