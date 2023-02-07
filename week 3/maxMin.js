class Node {
    constructor(data) {
        this.data = data
        this.left = this.right = null
    }
}

class MinAndMax {
    constructor() {
        this.root = null
    }

    insert(data) {
        const newNode = new Node(data)
        if (this.root === null)
            this.root = newNode
        else
            this.insertHelper(this.root, newNode)
    }

    insertHelper(root, newNode) {
        if (root.data > newNode.data) {
            if (root.left === null)
                root.left = newNode
            else
                this.insertHelper(root.left, newNode)
        } else {
            if (root.right === null)
                root.right = newNode
            else
                this.insertHelper(root.right, newNode)
        }
    }

    min(root) {
        if (!root.left) {
            return root.data
        } else {
            return this.min(root.left)
        }
    }

    max(root) {
        if (!root.right) {
            return root.data
        } else {
            return this.max(root.right)
        }
    }
}

const bst = new MinAndMax()
bst.insert(10)
bst.insert(8)
bst.insert(20)
bst.insert(22)
bst.insert(5)

console.log(bst.max(bst.root));
console.log(bst.min(bst.root));
