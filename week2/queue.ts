class Nodes {
    data: number
    next: any

    constructor(data: number) {
        this.data = data
        this.next = null
    }
}

class Queue {
    front: any
    rear: any
    size: number
    constructor() {
        this.front = null
        this.rear = null
        this.size = 0
    }

    isEmpty(): boolean {
        return this.size === 0
    }

    enqueue(data: number): void {
        const newNode: Nodes = new Nodes(data)

        if (this.front === null) {
            this.front = this.rear = newNode
        } else {
            this.rear.next = newNode
            this.rear = newNode
        }
        this.size++
    }

    dequeue(): void {
        if (this.front === null) {
            this.rear = null
            console.log("Queue is empty");
        } else {
            console.log("popped value ", this.front.data);
            this.front = this.front.next
        }
    }

    display(): void {
        if (this.isEmpty()) {
            console.log("Queue is Empty");
        } else {
            let temp: any = this.front
            while (temp) {
                console.log(temp.data);
                temp = temp.next
            }
        }
    }
}

const list: Queue = new Queue()
list.enqueue(10)
list.enqueue(20)
list.enqueue(30)
list.display()
list.dequeue()
list.dequeue()
list.dequeue()
list.dequeue()
list.enqueue(30)
list.display() 


// class Queue {
//     arr: number[]

//     constructor() {
//         this.arr = []
//     }

//     enqueue(data: number): void {
//         this.arr.push(data)
//     }

//     dequeue(): void {
//         if (this.arr.length > 0) {
//             let value: number = this.arr.shift()!
//             console.log("Popped element is ", value);

//         } else {
//             console.log("Queue is empty");
//         }
//     }
    
// }

// const queue = new Queue()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.dequeue()
// console.log(queue);
