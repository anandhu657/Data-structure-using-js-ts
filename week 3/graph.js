class Graph {
    constructor() {
        this.adjacencyList = new Map()
    }

    addVertex(vertex) {
        if (!this.adjacency1List.has(vertex)) {
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList.has(vertex1)) {
            this.addVertex(vertex1)
        }

        if (!this.adjacencyList.has(vertex2)) {
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2)
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return
        }
        for (let adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacentVertex)
        }

        delete this.adjacencyList[vertex]
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
        }
    }
}

const graph = new Graph()
graph.addEdge("A", "B")
graph.addEdge("B", "C")

graph.removeVertex("A")

graph.display()