// Piority queue class
// Same as max or min Binary Heap but with node also containing piority property
// better to use min binary heap
// Node class
class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

// priorityQueue / minBinaryHeap class
class priorityQueue{
    constructor(){
        this.values = [];
    }
    
    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const val = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(val.priority >= parent.priority) break;
            this.values[parentIdx] = val;
            this.values[idx] = parent;
            idx = parentIdx;
        }    
    }

    // remove the root
    // replace with the most recently added 
    // bubbleDown
    dequeue(){
        let min = this.values[0];
        let end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.bubbleDown();
        }
        return min;
    }
    bubbleDown() {
        let idx = 0;
        const length = this.values.length;
        const val = this.values[0];
        while(true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < val.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < val.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ){
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = val;
            idx = swap;
        } 
    }
}

// Graph class
class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    // add vertex class
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    // add edge class
    // accepts 2 vertices, vertex1 and vertex2
    // function should find in the adjacency list the key of vertex 1 and push vertex 2 to the array
    // function should find in the adjacency list the key of vertex2 and push vertex1 to the array
    // Don't worry about handling errors/invalid vertices
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    // remove edge class
    // function should accept 2 vertices
    // loop through adjacencyList[v1], if v2 found, remove it
    // loop through adjacencyList[v2], if v1 found, remove it
    removeEdge(v1, v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(
            v => v !== v2
        )
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(
            v => v !== v1
        )
    }

    // remove vertex class
    removeVertex(vertex){
        // loop through adjacencyList and pop off every element
        // remove all vertices it points to
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }

    // DFS - recursive solution
    DFS_recursive(vertex) {
        let retsultList = [];
        let visited = {};
        const adjacencyList = this.adjacencyList;
        
        // Helper function
        (function DFS(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            retsultList.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
               if(!visited[neighbor]){
                return DFS(neighbor)
               } 
            });
        })(start)
        return retsultList;
    }

    // DFS Iterative solution
    // Order is different but also DFS
    DFS_iterative(vertex){
        let stack = [vertex];
        let resultList = [];
        let visited = {};

        visited[vertex] = true;
        while(stack.length){
            let currentVertex = stack.pop();
            resultList.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    stack.push(neighbor);
                } 
            })
        }
        return resultList;
    }

    // BFS method
    BFS(vertex){
        let queue = [vertex];
        let result = [];
        let visited = {};
        let currentVertex;

        while(queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex);
            visited[vertex] = true;
            
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
            return result;
        }
    }
}



// weightedGraph class
class WeightedGraph{
    constructor(){
        this.adjacencyList = {};
    }

    // addVertex method
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    // addEdge method
    addEdge(v1, v2, weight) {
        this.adjacencyList[v1].push({node:v2, weight});
        this.adjacencyList[v2].push({node:v1, weight});
    }
        
    // Dijkstra's Algorithm class
    // Every time we look to visit a new node, we pick the node
    // with the smallest known distance to visit first.
    // Once we’ve moved to the node we’re going to visit,
    // we look at each of its neighbors.
    // For each neighboring node, we calculate the
    // distance by summing the total edges that lead to the 
    // node we’re checking from the starting node.
    // If the new total distance to a node is less than the previous
    // total, we store the new shorter distance for that node.
    Dijkstra(start, finish){
        const nodes = new priorityQueue();
        const distances = {};
        const previous = {};
        let path = []; // to return at end
        let smallest;

        // build initial state
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        // as long there is something to visit
        while(nodes.values.length){
            smallest = nodes.dequeue().val;
            if(smallest === finish){
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    // find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    // calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if(candidate < distances[nextNeighbor]){
                        // update new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        // update previous - How we got neighbor
                        previous[nextNeighbor] = smallest;
                        // enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}

let g = new WeightedGraph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B', 4);
g.addEdge('A', 'C', 2);
g.addEdge('B', 'E', 3);
g.addEdge('C', 'D', 2);
g.addEdge('C', 'F', 4);
g.addEdge('D', 'E', 3);
g.addEdge('D', 'F', 1);
g.addEdge('E', 'F', 1);

console.log(g.Dijkstra('A', 'E'));
console.log(g.Dijkstra('A', 'F'));