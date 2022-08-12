// Node class
// piece of data - val
// reference to the next node - next and previous - prev
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

// Doubly linked list class
class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // push method pseudocode:
    // create a new node with the value passed to the function
    // if the head property is null, set the head and tail to be the newly created node
    // If not, set the next property on the newly created node to be the tail
    // set the tail to be the newly created node
    // increment the length
    // return the doubly linked list
    push(val){
        let newNode = new Node(val)
        if (!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // pop method pseudocode:
    // If there are no nodes in the list, return undefined
    // Loop through the list until you reach the tail
    // Set the next property of the 2nd to last node to be null
    // Decrement the length of the list by 1
    // Return the value of the node removed
    pop(){
        if (!this.head) return undefined;
        let poppedNode = this.tail;
        if (this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    // shift method pseudocode
    // If there are no nodes, return undefined
    // Store the current head property in a variable
    // Set the head property to be the current heads next property
    // Decrement the length by 1
    // Return the value of the node removed
    shift(){
        if (!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0){
            this.tail = null
        }
        return currentHead;
    }

    // unshift pseudocode
    // the function should accept a value
    // create a new node using the value passed to the function
    // if there is no head property on the list, set the head and tail to be the newly created node
    // otherwise set the newly created node's next property to be the current head property on the list
    // set the head property on the list to be that newly created node
    // increment length by 1
    // return the linked list
    unshift(val){
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    // get method pseudocode
    // should accept index
    // if the index is less than 0 or greater than or equal to the length of the length of the list, return null
    // loop through the list until you reach the index and return the node at that specific index
    get(index){
        if (index < 0 || index >= this.length) return null;
        let count, current;
        if (index <= this.length/2) {
            count = 0;
            current = this.head;
            while(count !== index){
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count !== index){
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    // set method pseudocode
    // this function should accept a value and an index
    // use the get function to find the specific node
    // if the node is not found, return false
    // if the node is found, set the value of the node to be the value passed to the function and return true
    set(index, val){
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    // insert method pseudocode
    // if the index is less than 0 or greater than the length, return false
    // if the index is the same as the length, push a new node to the end of the list
    // if the index is 0, unshift a new node to the start of the list
    // otherwise, using the get method, access the node at the index -1
    // set the next property on that node to be the new node
    // increment the length
    // return true
    insert(index, val){
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);
        let newNode = new Node(val);
        let beforeNode = this.get(index - 1);
        let afterNode = beforeNode.next
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode; 
        this.length++;
        return true;
    }

    // remove method pseudocode
    // if the index is less than zero or greater than the length, return undefined
    // if the index is the same as length - 1, pop
    // if the index is 0, shift
    // otherwise, using the get method, access the node at the index - 1
    // set the next property on that node to be the next of the next node
    // decrement the length
    // return the value of the node removed
    remove(index){
        if (index < 0 || index >= this.length) return undefined;
        if (index === this.length) return this.pop();
        if (index === 0) return this.shift();
        let removed = this.get(index);
        let beforeNode = this.get(index - 1);
        let afterNode = this.get(index + 1);
        beforeNode.next = afterNode;
        afterNode.prev = beforeNode
        removed.next = null;
        removed.prev = null;
        this.length--;
        return removed;
    }

    // reverse method pseudocode
    // swap the head and tail
    // create a variable called next
    // create a variable called prev
    // create a variable called node and initialize it to the nead property
    // loop through list
    // set next to be the next property on whatever node is
    // set the next property on the node to be whatever prev is
    // set prev to be the value of the node variable
    // set the node variable to be the value of the next variable
    reverse(){
        let node = this.head;
        this.head = this.tail
        this.tail = node;
        let prev = null;
        let next;
        for (let i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

let list = new DoublyLinkedList;
list.push(5)
console.log(list)
// list.push(4)
// list.push(5)
// console.log(list)
// console.log(list.pop())
// console.log(list)
// console.log(list.pop())
// console.log(list)
// console.log(list.set(0, 1))
// console.log(list.insert(1, 2))
// console.log(list)
// console.log(list.remove(0))
// console.log(list)