class Nodes {
    value: number
    next: any
    constructor(value: number) {
        this.value = value
        this.next = null
    }
}

class ArrayToLinkedList {
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

    append(value: number): void {
        const newNode: Nodes = new Nodes(value)

        if (this.isEmpty()) {
            this.head = this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.size++
    }

    print(): void {
        if (this.isEmpty()) {
            console.log("Linked list is empty");
        } else {
            let temp = this.head
            while (temp) {
                console.log(temp.value);
                temp = temp.next
            }
        }
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const lists: ArrayToLinkedList = new ArrayToLinkedList()

for (let i = 0; i < arr.length; i++) {
    lists.append(arr[i])
}

lists.print()
export { }