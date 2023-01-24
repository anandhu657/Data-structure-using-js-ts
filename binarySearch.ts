function binarySearch(arr: number[], target: number): number {
    let start: number = 0
    let end: number = arr.length - 1

    while (start <= end) {
        let middle: number = Math.floor(start + (end-start / 2))
        
        if (arr[middle] === target) {
            return middle
        } else if (arr[middle] > target) {
            end = middle - 1
        } else if (arr[middle] < target) {
            start = middle + 1
        }
    }
    return -1
}

let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(binarySearch(arr, 5))

export {}