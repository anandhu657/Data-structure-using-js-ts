class CircularQueue {
    constructor() {
        this.queue = []
        this.length = 0
        this.size = 5
        this.front = 0
        this.back = -1
    }

    isEmpty() {
        return this.queue.length === 0
    }

    enqueue(element) {
        if (this.length >= this.size) {
            console.log("queue is full");
        } else {
            this.back++
            this.queue[this.back % this.size] = element
            this.length++
        }
    }

    dequeue() {
        if (this.isEmpty)
            console.log("queue is empty");

        let value = this.queue[this.front % this.size]
        this.queue[this.front % this.size] = null
        this.front++
        this.length--
        return value
    }

    display() {
        for (let i = 0; i < this.queue.length; i++) {
            console.log(this.queue[i]);
        }
    }
}

const queue = new CircularQueue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
console.log(queue.dequeue(),"kkk")
console.log(queue.dequeue(),"qqq")
queue.enqueue(70)
queue.enqueue(60)
queue.display()
