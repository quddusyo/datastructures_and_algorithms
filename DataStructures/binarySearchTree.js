class Node{
    constructor(val){
        this.right = null;
        this.left = null;
        this.val = val;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(val){
        let newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while(true){
                if (val < current.val) {
                    if (!this.left) {
                        this.left = newNode;
                        return this;
                    }
                    current = current.left
                } else if (val > current.val) {
                    if (!this.right) {
                        this.right = newNode;
                        return this;
                    }
                    current = current.right;
                } else return undefined;
            }
            if (newNode > this.root) {
                this.right = newNode;
            } else {
                this.left = newNode;
            }
        }
    }

    find(val){
        if (!this.root) return false;
        let current = this.root;
        let found = false
        while(current && !found) {
            if(val < current.val){
                current = current.left;
            } else if (val > current.val) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) {
            return false;
        }
        return current;
    }

    BFS() {
        let data = [];
        let queue = [];
        let node = this.root;
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node);
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        return data;
    }
    DFS_pre() {
        let data = [];
        function traverse(node){
            data.push(node.val);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root)
        return data;
    }


    DFS_post() {
        let data = [];
        function traverse(node){
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right);
            data.push(node.val);
        }
        traverse(this.root);
        return data;
    }


    DFS_in() {
        let data = [];
        function traverse(node){
            if(node.left) traverse(node.left)
            data.push(node.val);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}

