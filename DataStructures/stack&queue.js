// Stack Datastructure

// Array implementation
// better to use push/pop because the way arrays index values.
// let stack = [];
// stack.push('google');
// stack.pop();

// Linked List Implementation

// Node class
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// Stack class
class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.first.next = this.first;
            this.first = newNode;
        }
        return ++this.size;
    }

    pop(){
        if(!this.first) return null;
        let temp = this.first;
        if(this.size === 1) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}



// Queue Datastructure

// Array implementation
// better to use pop/unshift because the way arrays index values.
// let stack = [];
// stack.unshift("First")
// stack.pop()


// Linked List Implementation

// Queue class
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue(){
        if(!this.first) return null;
        let temp = this.first;
        if(this.size === 1) {
            this.last = null
        }
        this.first.next = this.first
        this.size--;
        return temp.value;
    }
}
