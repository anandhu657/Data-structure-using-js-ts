function linearSearch(arr: number[], target: number): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }
    return -1
}

let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(linearSearch(arr, 3))

export {}