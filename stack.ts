// class Nodes {
//     data: number
//     next: any
//     constructor(data: number) {
//         this.data = data
//         this.next = null
//     }
// }

// class Stack {
//     top: any
//     size: number
//     constructor() {
//         this.top = null
//         this.size = 0
//     }

//     isEmpty(): boolean {
//         return this.size === 0
//     }

//     push(data: number): void {
//         const newNode: Nodes = new Nodes(data);

//         if (this.isEmpty()) {
//             this.top = newNode
//         } else {
//             newNode.next = this.top
//             this.top = newNode
//         }
//         this.size++
//     }

//     pop(): void {
//         if (this.isEmpty()) {
//             console.log("Stack underflow");
//         } else {
//             let temp: number = this.top.data
//             this.top = this.top.next
//             console.log(temp);
//             this.size--
//         }
//     }

//     display(): void {
//         let temp: any = this.top
//         if (this.isEmpty()) {
//             console.log("Stack is empty");
//         } else {
//             while (temp) {
//                 console.log(temp.data);
//                 temp = temp.next
//             }
//         }
//     }
// }

// const list: Stack = new Stack()
// list.push(10)
// list.push(20)
// list.push(30)
// list.display()
// list.pop()
// list.pop()
// list.pop()
// list.pop()
// list.display()

class Stack {
    arr: number[]
    constructor() {
        this.arr = []
    }

    push(data: number): void {
        if (this.arr.length === 5) {
            console.log("Stack overflow");
        } else {
            this.arr.push(data)
        }
    }

    pop(): void {
        if (this.arr.length === 0) {
            console.log("Stack underflow");
        } else {
            console.log(this.arr.pop());
        }
    }

    display(): void {
        if (this.arr.length === 0) {
            console.log("Stack is empty");
        } else {
            for (let i = this.arr.length - 1; i >= 0; i--) {
                console.log(this.arr[i]);
            }
        }
    }
}

const stack: Stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
stack.push(60)
// stack.pop()
// stack.pop()
// stack.pop()
// stack.pop()
// stack.pop()
stack.display()


export{}