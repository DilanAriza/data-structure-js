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

    pop() {
        // Aquí guardamos el ultimo elemento en una constante
        const lastImtem = this.data[this.length - 1];

        // Eliminamos el elemento
        delete this.data[this.length - 1];

        // Bajamos el tamaño del elemento -1 
        this.length--;

        // Devolvemos el elemento eliminado
        return lastImtem
    }

    delete(index) {
        const item = this.data[index];
        this.shiftIndex(index);

        return item;
    }

    shiftIndex(index) {

        // Organizamos los index
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }

        // Eliminamos el index del elemento
        delete this.data[this.length - 1];

        // Bajamos el tamaño del elemento
        this.length--;
    }

}

const myArray = new MyArray();

myArray.push("Dilan");
myArray.push("Daniela");
myArray.push("Gabriela");

// console.log(myArray.get(1));

// console.log(myArray.pop());

console.log(myArray.delete(2))

console.log(myArray.data);