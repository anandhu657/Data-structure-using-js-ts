class Nodes {
    value: number
    prev: null
    next: null

    constructor(value: number) {
        this.value = value
        this.prev = null
        this.next = null
    }
}

class DLinkedList {
    head: any
    tail: any
    prev: any
    size: number

    constructor() {
        this.head = this.tail = null
        this.size = 0
    }

    isEmpty(): boolean {
        return this.size === 0
    }

    append(value: number): void {
        const newNode: Nodes = new Nodes(value)

        if (this.isEmpty()) {
            this.head = this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.size++
    }

    prepend(value: number): void {
        const newNode: Nodes = new Nodes(value)
        if (this.isEmpty()) {
            this.head = this.tail = newNode
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.size++
    }

    print(): void {
        if (this.isEmpty()) {
            console.log("List is empty");
        } else {
            let temp: any = this.head
            while (temp) {
                console.log(temp.value);
                temp = temp.next
            }
        }
    }
}

const lists: DLinkedList = new DLinkedList()

lists.prepend(40)
lists.prepend(50)
lists.append(10)
lists.append(20)
lists.append(30)
lists.print()

export{}