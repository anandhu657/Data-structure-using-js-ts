class Stack {
    constructor() {
        this.items = []
    }

    push(element) {
        return this.items.push(element)
    }

    pop() {
        return this.items.pop()
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    print(){
        console.log(this.items);
    }
}

const stack = new Stack()
stack.push(10)
stack.push(11)
stack.push(12)
console.log(stack.peek())
stack.pop()
stack.print()