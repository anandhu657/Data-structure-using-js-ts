// class Graph {
//     constructor() {
//         this.adjacencyList = new Map()
//     }

//     addVertex(vertex) {
//         if (!this.adjacencyList.has(vertex)) {
//             this.adjacencyList[vertex] = []
//         }
//     }

//     addEdge(vertex1, vertex2) {
//         if (!this.adjacencyList.has(vertex1)) {
//             this.addVertex(vertex1)
//         }

//         if (!this.adjacencyList.has(vertex2)) {
//             this.addVertex(vertex2)
//         }
//         this.adjacencyList[vertex1].push(vertex2)
//     }

//     removeEdge(vertex1, vertex2) {
//         this.adjacencyList[vertex1].delete(vertex2)
//     }

//     removeVertex(vertex) {
//         if (!this.adjacencyList[vertex]) {
//             return
//         }
//         for (let adjacentVertex of this.adjacencyList[vertex]) {
//             this.removeEdge(vertex, adjacentVertex)
//         }

//         delete this.adjacencyList[vertex]
//     }

//     display() {
//         for (let vertex in this.adjacencyList) {
//             console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
//         }
//     }

//     bfs(startNode) {
//         let visited = {}
//         let queue = []
//         visited[startNode] = true
//         queue.push(startNode)
//         while (queue.length !== 0) {
//             let getQueueElement = queue.shift()
//             console.log(getQueueElement);
//             let get_list = this.adjacencyList[getQueueElement]
//             // console.log(get_list);
//             for (let i in get_list) {
//                 let neigh = get_list[i]
//                 if (!visited[neigh]) {
//                     visited[neigh] = true
//                     queue.push(neigh)
//                 }
//             }
//         }
//     }
// }

// const graph = new Graph()
// graph.addEdge("A", "B")
// graph.addEdge("B", "C")
// graph.addEdge("C", "f")
// graph.addEdge("D", "E")
// graph.addEdge("f", "D")
// // graph.addEdge("B", "A")

// // graph.removeVertex("A")

// graph.display()
// console.log("bfs");
// graph.bfs("A")


class Graph {
    constructor() {
        this.adjancencyList = new Map()
    }

    addVertex(vertex) {
        this.adjancencyList.set(vertex, new Set())
    }

    addEdge(vertex1, vertex2) {
        this.adjancencyList.get(vertex1).add(vertex2)
        this.adjancencyList.get(vertex2).add(vertex1)
    }

    printGraph() {
        let get_keys = this.adjancencyList.keys()
        for (let i of get_keys) {
            let values = this.adjancencyList.get(i)
            var conc = ""

            for (let j of values)
                conc += j + " "

            console.log(i + "->" + conc);
        }
    }

    bfs(startNode) {
        let visited = {}
        let queue = []
        visited[startNode] = true
        queue.push(startNode)
        while (queue.length !== 0) {
            let getQueueElement = queue.shift()
            console.log(getQueueElement);
            let get_list = this.adjancencyList.get(getQueueElement)
            get_list.forEach(i => {
                let neigh = i
                if (!visited[neigh]) {
                    visited[neigh] = true
                    queue.push(neigh)
                }
            });
        }
    }

    dfs(startNode) {
        let  visited = {}
        this.dfsHelper(startNode, visited)
    }

    dfsHelper(vertex, visited) {
        visited[vertex] = true
        console.log(vertex);

        let get_neigh = this.adjancencyList.get(vertex)
        get_neigh.forEach(i => {
            let get_elem = i
            if (!visited[get_elem])
                this.dfsHelper(get_elem, visited)
        });
    }
}


const graph = new Graph()
let vertex = ['A', 'B', 'C', 'D', 'E', 'F']
for (let i = 0; i < vertex.length; i++) {
    graph.addVertex(vertex[i])
}

graph.addEdge("A", "B")
graph.addEdge("A", "D")
graph.addEdge("A", "B")
graph.addEdge("A", "E")
graph.addEdge("B", "C")
graph.addEdge("D", "E")
graph.addEdge("E", "F")
graph.addEdge("E", "C")
graph.addEdge("C", "F")

graph.printGraph()

console.log("bfs");
graph.bfs("A")

console.log("dfs");
graph.dfs("A")
