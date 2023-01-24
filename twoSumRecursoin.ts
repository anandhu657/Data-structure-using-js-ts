function twosumRecursion(arr: number[], target: number, i: number): number[] {
    if (arr[i] + arr[i + 1] === target) {
        return [i, i + 1]
    } else {
        return twosumRecursion(arr, target, i + 1)
    }
    return []
}

let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(twosumRecursion(arr, 7, 0));
