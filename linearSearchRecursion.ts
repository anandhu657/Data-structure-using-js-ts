function linearSearchRecursion(arr: number[], target: number, i: number): number {
    if (arr[i] === target) {
        return i
    } else {
        return linearSearchRecursion(arr, target, ++i)
    }
    return -1
}

let arr: number[] = [1, 2, 3, 4, 5, 6, 7]
console.log(linearSearchRecursion(arr, 3, 0));

export {}