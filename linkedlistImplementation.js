class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    prepend(value) {
        const node = new Node(value)

        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    insert(index, value) {
        if (index < 0 || index >= this.getSize()) {
            console.log("invalid index");
        } else if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)

            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    remove(value) {
        if (this.isEmpty()) {
            console.log("List is empty");
        } else if (this.head.value === value) {
            this.head = this.head.next
            this.size--
        } else {
            let prev = this.head
            let removedElement
            while (prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            if (prev.next) {
                removedElement = prev.next
                prev.next = removedElement.next
                this.size--
            } else {
                console.log("No element found");
            }

        }
    }

    search(value) {
        if (this.isEmpty()) {
            console.log("List is empty");
        } else {
            let i = 0
            let current = this.head
            while (current) {
                if (current.value === value) {
                    console.log(`${value} found at position ${i}`);
                    return
                }
                current = current.next
                ++i
            }
            console.log("No element found.......");
        }
    }

    reverse() {
        let prev = null
        let current = this.head
        while (current) {
            let next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev
    }

    bintoDecimal() {
        let temp = this.head
        let s = this.size - 1
        let decimal = 0
        while (temp) {
            decimal += temp.value * (2 ** s)
            temp = temp.next
            s--;
        }
        console.log(decimal);
    }

    print() {
        if (this.isEmpty()) {
            console.log("Empty linked list");
        } else {
            let result = ""
            let prev = this.head
            while (prev) {
                result += `${prev.value} `
                prev = prev.next
            }
            console.log(result);
        }
    }
}

const list = new LinkedList()

list.append(1)
list.append(0)
list.append(1)

list.print()
list.bintoDecimal()