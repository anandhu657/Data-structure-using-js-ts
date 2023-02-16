const treeify = require('treeify')

class Node {
    constructor(value) {
        this.value = value
        this.children = []
    }

    add(value) {
        this.children.push(new Node(value))
    }

    remove(value) {
        this.children = this.children.filter(node => node.value !== value)
    }

    addChildren(value, newVal) {
        for (let i = 0; i < this.children.length; i++) {
            if (this.children[i].value === value) {
                this.children[i].children.push(new Node(newVal))
            }
        }
    }

    print() {

    }

    size() {
        return this.children.length
    }
}

const node = new Node(10)
node.add(50)
node.add(20)
node.add(30)
node.add(40)
node.remove(30)
node.addChildren(20, 1000)
console.log(node.size());
console.log(treeify.asTree(node, true));