class Dequeue {
    constructor() {
        this.queue = []
        this.count = 0
        this.lowestCount = 0
    }

    isEmpty() {
        return this.queue.length === 0
    }

    addBack(element) {
        this.queue[this.count] = element
        this.count++
    }

    addFront(element) {
        if (this.isEmpty()) {
            this.addBack(element)
        } else if (this.lowestCount > 0) {
            this.lowestCount--
            this.queue[this.lowestCount] = element
            this.count++
        } else {
            for (let index = this.count; index > 0; index--) {
                this.queue[index] = this.queue[index - 1]
            }
            this.count++
            this.queue[0] = element
        }
    }

    
}