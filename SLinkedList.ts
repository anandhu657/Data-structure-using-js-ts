class Nodes {
    value: number
    next: null

    constructor(value: number) {
        this.value = value
        this.next = null
    }
}

class SlinkedList {
    head: any
    tail: any
    size: number

    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(): boolean {
        return this.size === 0
    }

    listSize(): number {
        return this.size
    }

    append(value: number): void {
        const newNode: Nodes = new Nodes(value)

        if (this.isEmpty()) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
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
            this.head = newNode
        }
        this.size++
    }

    insertBefore(value: number, data: number): void {
        const newNode: Nodes = new Nodes(value)

        if (this.isEmpty()) {
            this.head = this.tail = newNode
        } else if (this.head.value === data) {
            newNode.next = this.head
            this.head = newNode
        } else {
            let temp = this.head
            while (temp.next.value !== data) {
                temp = temp.next
            }
            newNode.next = temp.next
            temp.next = newNode
        }
        this.size++
    }

    insertAfter(value: number, data: number): void {
        const newNode: Nodes = new Nodes(value)

        if (this.isEmpty()) {
            this.head = this.tail = newNode
        } else {
            let temp = this.head

            while (temp.value !== data) {
                temp = temp.next
            }

            newNode.next = temp.next
            temp.next = newNode
        }
        this.size++
    }

    deleteSpecifiedValue(value: number): void {
        if (this.isEmpty()) {
            console.log("Linked list is empty");
        } else if (this.head.value === value) {
            this.head = this.head.next
            this.size--
        } else {
            let temp = this.head

            while (temp.next.value !== value) {
                temp = temp.next
            }
            if (temp.next) {
                let next = temp.next
                temp.next = next.next
                this.size--
            }
        }
    }

    reverse(): void {
        let current = this.head
        let prev: any = null
        while (current) {
            let nxt = current.next
            current.next = prev
            prev = current
            current = nxt
        }
        this.head = prev
    }

    print(): void {
        if (this.isEmpty()) {
            console.log("Linked list is empty");
        } else {
            let temp: any = this.head
            while (temp) {
                console.log(temp.value);
                temp = temp.next
            }
        }
    }
}

const lists: SlinkedList = new SlinkedList()

lists.prepend(40)
lists.prepend(50)
lists.append(10)
lists.append(20)
lists.append(30)
lists.insertBefore(33, 40)
lists.insertAfter(44, 10)
lists.deleteSpecifiedValue(30)
lists.print()
lists.reverse()
lists.print()
export { }
