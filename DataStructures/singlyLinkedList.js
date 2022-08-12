// Node class
// piece of data - val
// reference to the next node - next
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// Singly linked list class
class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    // push method pseudocode:
    // this function should accept a value
    // Create a new node using the value passed to the function
    // If there is no head property on the list, set the head and tail to be the newly created node
    // Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
    // Increment the length by one
    push(val){
        let newNode = new Node(val)
        if (!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
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
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0){
            this.head = null;
            this.tail = null
        }
        return current;
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
        let count = 0;
        let current = this.head;
        while(count !== index){
            current = current.next;
            count++;
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
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        let newNode = new Node(val);
        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
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
        if (index < 0 || index > this.length) return undefined;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();
        let prevNode = this.get(index - 1);
        let removed = prevNode.next
        prevNode.next = removed.next 
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

    // rotate function - extra practice
    // O(N) space complexity
    // accepts position and returns the new list head as the next item in the sll and tail and the item.
    rotate(position){
        if (position > this.length) return this;
        if (position < 0) position = this.length+position;
        let count = 0;
        let current = this.head;
        while(count !== position-1){
            current = current.next;
            count++;
        }
        this.tail.next = this.head;
        let newHead = current.next;
        current.next = null;
        this.tail = current;
        this.head = newHead;
    }
}

let list = new SinglyLinkedList()
list.push(5).push(10).push(15).push(20).push(25);
console.log(list)
list.rotate(3);
console.log(list)