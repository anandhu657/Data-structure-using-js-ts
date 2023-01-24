class Nodes {
    data: number
    next: any

    constructor(data: number) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    head: any
    tail: any
    size: number

    constructor() {
        this.head = this.tail = null
        this.size = 0
    }

    append(value: number): void {
        const newNode: Nodes = new Nodes(value)

        if (this.size === 0) {
            this.head = this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.size++
    }

    removeDuplicate(): void {
        if (this.size === 0) {
            console.log("List is empty");
        } else {
            let temp: any = this.head
            let check: number = this.head.data

            while (temp.next) {
                if (temp.next.data !== check) {
                    check = temp.next.data
                }
            }
        }
    }

    print(): void {
        if (this.size === 0) {
            console.log("List is empty");
        } else {
            let temp = this.head

            while (temp) {
                console.log(temp.data);
                temp = temp.next
            }
        }
    }
}

const list: LinkedList = new LinkedList()
list.append(1)
list.append(2)
list.append(3)
list.append(3)
list.append(4)
list.append(5)
list.append(5)
list.append(6)
list.append(7)
list.print()
