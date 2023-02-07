class Node {
    constructor(data) {
        this.data = data
        this.left = this.right = null
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insert(value) {
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.root = newNode
        } else {
            this.insertHelper(this.root, newNode)
        }
    }

    insertHelper(root, newNode) {
        if (root.data > newNode.data) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.insertHelper(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode
            } else {
                this.insertHelper(root.right, newNode)
            }
        }
    }

    search(root, value) {
        if (!root)
            return false
        else {
            if (root.data === value)
                return true
            else if (value < root.data)
                return this.search(root.left, value)
            else if (root.data < value)
                return this.search(root.right, value)

        }
    }

    inOrder(root) {
        if (root) {
            console.log(root.data);
            this.inOrder(root.left)
            this.inOrder(root.right)
        }
    }

    preOrder(root) {
        if (root) {
            this.preOrder(root.left)
            console.log(root.data);
            this.preOrder(root.right)
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.data);
        }
    }

    bfs() {
        const queue = []
        queue.push(this.root)
        while (queue.length) {
            let current = queue.shift()
            console.log(current.data);
            if (current.left)
                queue.push(current.left)
            if (current.right)
                queue.push(current.right)
        }
    }

    min(root) {
        if (!root.left)
            return root.data
        else
            return this.min(root.left)
    }

    max(root) {
        if (!root.right)
            return root.data
        else
            return this.max(root.right)
    }

    remove(value) {
        this.root = this.removeHelper(this.root, value)
    }

    removeHelper(root, value) {
        if (root === null)
            return root

        if (value < root.data)
            root.left = this.removeHelper(root.left, value)
        else if (value > root.data)
            root.right = this.removeHelper(root.right, value)
        else {
            if (!root.left && !root.right)
                return null
            if (!root.left)
                return root.right
            else if (!root.right)
                return root.left
            root.data = this.min(root.right)
            root.right = this.removeHelper(root.right, root.data)
        }
        return root
    }
}

const bst = new BinaryTree()
console.log(bst.isEmpty());
bst.insert(10)
bst.insert(20)
bst.insert(9)
bst.insert(5)
bst.insert(11)
console.log(bst.isEmpty());


console.log(bst.search(bst.root, 10))
console.log(bst.search(bst.root, 20))
console.log(bst.search(bst.root, 9))
console.log(bst.search(bst.root, 7));

console.log("InOrder");
bst.inOrder(bst.root)

console.log("PreOrder");
bst.preOrder(bst.root)

console.log("PostOrder");
bst.postOrder(bst.root)

bst.remove(10)

console.log("BFS");
bst.bfs()

console.log("minimum ",bst.min(bst.root));
