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


// let heap = new maxBinaryHeap();
// heap.insert(41)
// heap.insert(39)
// heap.insert(33)
// heap.insert(18)
// heap.insert(27)
// heap.insert(12)
// heap.insert(55)
// console.log(heap)
// console.log(heap.remove())
// console.log(heap.remove())
// console.log(heap)