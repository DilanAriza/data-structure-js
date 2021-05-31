class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }

                    currentNode = currentNode.left;
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }

                    currentNode = currentNode.right;
                }
            }
        }
    }

    search(index) {
        if (this.root === null) {
            console.log('No hay ningun elemento en el Binary Search Tree');
        } else {
            let currentNode = this.root;
            while (true) {
                if (index === currentNode.value) {
                    return currentNode;
                } else {
                    if (index < currentNode.value) {
                        if ((currentNode.left) && index === currentNode.left) {
                            return currentNode.left;
                        }

                        currentNode = currentNode.left;
                    } else {
                        if ((currentNode.right) && index === currentNode.right) {
                            return currentNode.right;
                        }

                        currentNode = currentNode.right;
                    }
                }
            }
        }
    }
}

const tree = new BinarySearchTree();

console.log(tree);

tree.insert(1);
console.log(tree);
tree.insert(5);
console.log(tree);
tree.insert(8);
console.log(tree);
tree.insert(4);
console.log(tree);
tree.insert(14);
console.log(tree);
tree.insert(10);
console.log(tree);
tree.insert(7);
console.log(tree);

console.log(tree.search(8));