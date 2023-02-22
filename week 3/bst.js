const treeify = require('treeify')
// class Node {
//     constructor(data) {
//         this.data = data
//         this.left = this.right = null
//     }
// }

// class BinaryTree {
//     constructor() {
//         this.root = null
//     }

//     isEmpty() {
//         return this.root === null
//     }

//     insert(value) {
//         const newNode = new Node(value)
//         if (this.isEmpty()) {
//             this.root = newNode
//         } else {
//             this.insertHelper(this.root, newNode)
//         }
//     }

//     insertHelper(root, newNode) {
//         if (root.data > newNode.data) {
//             if (root.left === null) {
//                 root.left = newNode
//             } else {
//                 this.insertHelper(root.left, newNode)
//             }
//         } else {
//             if (root.right === null) {
//                 root.right = newNode
//             } else {
//                 this.insertHelper(root.right, newNode)
//             }
//         }
//     }

//     search(root, value) {
//         if (!root)
//             return false
//         else {
//             if (root.data === value)
//                 return true
//             else if (value < root.data)
//                 return this.search(root.left, value)
//             else if (value > root.data)
//                 return this.search(root.right, value)

//         }
//     }

//     inOrder(root) {
//         if (root) {
//             this.inOrder(root.left)
//             console.log(root.data);
//             this.inOrder(root.right)
//         }
//     }

//     preOrder(root) {
//         if (root) {
//             console.log(root.data);
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     postOrder(root) {
//         if (root) {
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.data);
//         }
//     }

//     bfs() {
//         const queue = []
//         queue.push(this.root)
//         while (queue.length) {
//             let current = queue.shift()
//             console.log(current.data);
//             if (current.left)
//                 queue.push(current.left)
//             if (current.right)
//                 queue.push(current.right)
//         }
//     }

//     min(root) {
//         if (!root.left)
//             return root.data
//         else
//             return this.min(root.left)
//     }

//     max(root) {
//         if (!root.right)
//             return root.data
//         else
//             return this.max(root.right)
//     }

//     remove(value) {
//         this.root = this.removeHelper(this.root, value)
//     }

//     removeHelper(root, value) {
//         if (root === null)
//             return root

//         if (value < root.data)
//             root.left = this.removeHelper(root.left, value)
//         else if (value > root.data)
//             root.right = this.removeHelper(root.right, value)
//         else {
//             if (!root.left && !root.right)
//                 return null
//             if (!root.left)
//                 return root.right
//             else if (!root.right)
//                 return root.left
//             root.data = this.min(root.right)
//             root.right = this.removeHelper(root.right, root.data)
//         }
//         return root
//     }
// }

// const bst = new BinaryTree()
// console.log(bst.isEmpty());
// bst.insert(10)
// bst.insert(20)
// bst.insert(9)
// bst.insert(5)
// bst.insert(11)
// console.log(bst.isEmpty());


// console.log(bst.search(bst.root, 10))
// console.log(bst.search(bst.root, 20))
// console.log(bst.search(bst.root, 9))
// console.log(bst.search(bst.root, 7));

// console.log("InOrder");
// bst.inOrder(bst.root)

// console.log("PreOrder");
// bst.preOrder(bst.root)

// console.log("PostOrder");
// bst.postOrder(bst.root)

// bst.remove(10)

// console.log("BFS");
// bst.bfs()

// console.log("minimum ",bst.min(bst.root));



// class Node {
//     constructor(value) {
//         this.value = value
//         this.left = this.right = null
//     }
// }

// class BinarySearchTree {
//     constructor() {
//         this.root = null
//     }

//     isEmpty() {
//         return this.root === null
//     }

//     insert(value) {
//         const newNode = new Node(value)
//         if (this.isEmpty()) {
//             this.root = newNode
//         } else {
//             this.insertHelper(this.root, newNode)
//         }
//     }

//     insertHelper(root, newNode) {
//         if (newNode.value < root.value) {
//             if (root.left === null) {
//                 root.left = newNode
//             } else {
//                 this.insertHelper(root.left, newNode)
//             }
//         } else if (newNode.value > root.value) {
//             if (root.right === null) {
//                 root.right = newNode
//             } else {
//                 this.insertHelper(root.right, newNode)
//             }
//         }
//     }

//     search(root, value) {
//         if (!root) {
//             return false
//         } else {
//             if (value < root.value) {
//                 return this.search(root.left, value)
//             } else if (value > root.value) {
//                 return this.search(root.right, value)
//             } else {
//                 return true
//             }
//         }
//     }

//     inOrder(root) {
//         if (root) {
//             this.inOrder(root.left)
//             console.log(root.value);
//             this.inOrder(root.right)
//         }
//     }

//     preOrder(root) {
//         if (root) {
//             console.log(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     postOrder(root) {
//         if (root) {
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value);
//         }
//     }

//     bsf() {
//         const queue = []
//         queue.push(this.root)
//         while (queue.length) {
//             let current = queue.shift()
//             console.log(current.value);
//             if (current.left) {
//                 queue.push(current.left)
//             }
//             if (current.right) {
//                 queue.push(current.right)
//             }
//         }
//     }

//     min(root) {
//         if (root.left === null) {
//             return root.value
//         } else {
//             return this.min(root.left)
//         }
//     }

//     max(root) {
//         if (root.right === null) {
//             return root.value
//         } else {
//             return this.max(root.right)
//         }
//     }

//     remove(value) {
//         this.root = this.removeHelper(this.root, value)
//     }

//     removeHelper(root, value) {
//         if (root === null)
//             return root
//         if (value < root.value)
//             root.left = this.removeHelper(root.left, value)
//         else if (value > root.value)
//             root.right = this.removeHelper(root.right, value)
//         else {
//             if (!root.left && !root.right)
//                 return null
//             if (!root.left)
//                 return root.right
//             if (!root.right)
//                 return root.left
//             root.value = this.min(root.right)
//             root.right = this.removeHelper(root.right, root.value)
//         }
//         return root
//     }

//     maxDepth(root){
//         if (root == null) {
//             return 0
//         }else{
//             let leftDepth = this.maxDepth(root.left)
//             let rightDepth = this.maxDepth(root.right)
//             return Math.max(leftDepth,rightDepth)+1
//         }
//     }
// }

// const bst = new BinarySearchTree()
// bst.insert(15)
// bst.insert(10)
// bst.insert(18)
// bst.insert(7)
// bst.insert(12)
// bst.insert(17)
// bst.insert(24)
// bst.insert(5)
// bst.insert(16)

// console.log("inorder");
// bst.inOrder(bst.root)

// console.log("preOrder");
// bst.preOrder(bst.root)

// console.log("postOrder");
// bst.postOrder(bst.root)

// console.log("BSF");
// bst.bsf()

// console.log("Minimum", bst.min(bst.root));

// console.log("Maximum", bst.max(bst.root));

// bst.remove(15)

// console.log("BSF");
// bst.bsf()

// console.log("height");
// console.log(bst.maxDepth(bst.root));

class Node {
    constructor(value) {
        this.value = value
        this.left = this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertHelper(this.root, newNode)
        }
    }

    insertHelper(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null)
                root.left = newNode
            else
                this.insertHelper(root.left, newNode)
        } else if (newNode.value > root.value) {
            if (root.right === null)
                root.right = newNode
            else
                this.insertHelper(root.right, newNode)
        }
    }

    search(root, value) {
        if (!root)
            return false
        else {
            if (value < root.value)
                return this.search(root.left, value)
            else if (value > root.value)
                return this.search(root.right, value)
            else
                return true

        }
    }

    preOrder(root) {
        if (root === null)
            return null
        else {
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root) {
        if (root === null)
            return null
        else {
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }

    postOrder(root) {
        if (root === null)
            return null
        else {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }

    }

    bfs() {
        let queue = []
        queue.push(this.root)
        while (queue.length !== 0) {
            let currentNode = queue.shift()
            console.log(currentNode.value);
            if (currentNode.left)
                queue.push(currentNode.left)
            if (currentNode.right)
                queue.push(currentNode.right)
        }
    }

    min(root) {
        if (root.left === null)
            return root.value
        else
            return this.min(root.left)
    }

    max(root) {
        if (root.right === null)
            return root.value
        else
            return this.max(root.right)
    }

    maxDepth(root) {
        if (root === null)
            return 0
        else {
            let leftDepth = this.maxDepth(root.left)
            let rightDepth = this.maxDepth(root.right)

            return Math.max(leftDepth, rightDepth) + 1
        }
    }

    remove(value) {
        this.root = this.removeHelper(this.root, value)
    }

    removeHelper(root, value) {
        if (root === null)
            return root
        if (value < root.value)
            root.left = this.removeHelper(root.left, value)
        else if (value > root.value)
            root.right = this.removeHelper(root.right, value)
        else {
            if (!root.left && !root.right)
                return null
            if (!root.left)
                return root.right
            if (!root.right)
                return root.left
            root.value = this.min(root.right)
            root.right = this.removeHelper(root.right, root.value)
        }
        return root
    }

    isBST(root, min = null, max = null) {
        if (!root)
            return true
        if ((min !== null && root.value <= min) || (max !== null && root.value >= max))
            return false
        if ((!this.isBST(root.left, min, root.value) || (!this.isBST(root.right, root.value, max))))
            return false
        return true
    }

    isComplete(root) {
        if (root === null)
            return true
        let queue = []
        let flag = false
        queue.push(root)
        while (queue.length != 0) {
            let tempNode = queue.shift()
            if (tempNode.left != null) {
                if (flag == true)
                    return false
                queue.push(tempNode.left)
            } else
                flag = true
            if (tempNode.right != null) {
                if (flag == true)
                    return false
                queue.push(tempNode.right)
            } else
                flag = true
        }
        return true
    }

    isFull(root) {
        if (root === null)
            return true
        if (root.left === null && root.right === null)
            return true
        if ((root.left != null) && (root.right != null))
            return (this.isFull(root.left) && this.isFull(root.right))
        return false
    }
}

function isIdentical(root1, root2) {
    if (root1 === null && root2 === null)
        return true
    if (root1 != null && root2 != null)
        return (root1.value === root2.value && isIdentical(root1.left, root2.left) &&
            isIdentical(root1.right, root2.right))
    return false
}

const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(15)
bst.insert(16)
bst.insert(12)
bst.insert(7)
bst.insert(8)
bst.insert(5)

const bst2 = new BinarySearchTree()
bst2.insert(10)
bst2.insert(15)
bst2.insert(16)
bst2.insert(12)
bst2.insert(7)
bst2.insert(8)
bst2.insert(5)
// console.log(bst.search(bst.root, 144));

// console.log("preOrder");
// bst.preOrder(bst.root)

// console.log("inOrder");
// bst.inOrder(bst.root)

// console.log("postOrder");
// bst.postOrder(bst.root)
// // bst.remove(7)
// console.log("BFS");
// bst.bfs()


// console.log("MIN", bst.min(bst.root));
// console.log("MAX", bst.max(bst.root));
// console.log("isBST", bst.isBST(bst.root));
// console.log("MaxDepth", bst.maxDepth(bst.root));

// if (bst.isComplete(bst.root) == true)
//     console.log("Complete binary tree");
// else
//     console.log("Not complete binary tree");

// if (bst.isFull(bst.root))
//     console.log("Binary tree is full");
// else
//     console.log("Binary tree is not full");

if (isIdentical(bst.root, bst2.root))
    console.log("Both are identical");
else
    console.log("Trees are not identical");
// console.log(treeify.asTree(bst, true));