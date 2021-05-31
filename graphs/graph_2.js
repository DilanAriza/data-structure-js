class Graph {
    constructor() {
        this.nodes = 0;
        this.adjacentList = {};
    }

    addVertex(node) {
        this.adjacentList[node] = [];
        this.nodes++;
    }

    addEdge(node1, node2) {
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }
}

const myGraph = new Graph();

myGraph.addVertex("1");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addVertex("8");
console.log(myGraph);

myGraph.addEdge(3, 1);
myGraph.addEdge(3, 6);
myGraph.addEdge(3, 5);
myGraph.addEdge(1, 6);
myGraph.addEdge(1, 4);
myGraph.addEdge(4, 5);
myGraph.addEdge(4, 8);
console.log(myGraph);