class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MySingleLikedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;

        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);

        this.tail.next = newNode;
        this.tail = newNode;

        this.length++;

        return this;
    }

    prepend(value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;

        this.length++;
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }

        const newNode = new Node(value);
        const firstPointer = this.getTheIndex(index - 1);
        const holdingPointer = firstPointer.next;

        firstPointer.next = newNode;
        newNode.next = holdingPointer;

        this.length++;

        return this;
    }

    getTheIndex(index) {
        let counter = 0;
        let currentNode = this.head;

        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }
}

let myLinkedList = new MySingleLikedList(1);


myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.prepend(0);

console.log(myLinkedList);

myLinkedList.insert(2, 5);


console.log(myLinkedList);