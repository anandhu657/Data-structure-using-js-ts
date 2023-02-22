// class HeapSort3 {
//     constructor(array) {
//         this.array = array
//     }
//     swap(input, index_A, index_B) {
//         let temp = input[index_A]
//         input[index_A] = input[index_B]
//         input[index_B] = temp
//     }

//     heapify(array, index, length) {
//         let left = 2 * index
//         let right = 2 * index + 1
//         let maximum

//         if (right < length) {
//             if (array[left] >= array[right]) {
//                 maximum = left
//             } else {
//                 maximum = right
//             }
//         } else if (left < length) {
//             maximum = left
//         } else {
//             return
//         }

//         if (array[index] < array[maximum]) {
//             this.swap(array, index, maximum)
//             this.heapify(array, maximum, length)
//         }
//     }
//     sort() {
//         let length = this.array.length
//         for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
//             this.heapify(this.array, i, length)
//         }
//         // for (let i = length-1; i >=0; i--) {
//         //     this.swap(this.array,0,i)
//         //     this.heapify(this.array,0,i)

//         // }
//         return this.array
//     }
// }

// let array = [4, 2, 5, 7, 3, 7, 32, 4]
// let heap = new HeapSort3(array)
// console.log(heap.sort());


class Heapify {
    constructor(arr) {
        this.arr = arr
    }

    swap(array, index1, index2) {
        let temp = array[index1]
        array[index1] = array[index2]
        array[index2] = temp
    }

    heapify(arr, index, len) {
        let left = 2 * index
        let right = 2 * index + 1
        let maximum

        if (right < len) {
            if (arr[left] >= arr[right])
                maximum = left
            else
                maximum = right
        } else if (left < len) {
            maximum = left
        } else {
            return
        }

        if (arr[index] < arr[maximum]) {
            this.swap(arr, index, maximum)
            this.heapify(arr, maximum, len)
        }
    }

    sort() {
        let len = this.arr.length
        for (let i = (Math.floor(len / 2) - 1); i >= 0; i--)
            this.heapify(this.arr, i, len)

        for (let i = len - 1; i >= 0; i--) {
            this.swap(this.arr, 0, i)
            this.heapify(this.arr, 0, i)
        }
        return this.arr
    }
}

let arr = [3, 5, 7, 2, 6, 0, 8, 3]
const heap = new Heapify(arr)
console.log(heap.sort());