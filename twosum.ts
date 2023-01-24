function twoSum(arr: number[], target: number): number[] {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + arr[i + 1] === target) {
            return [i, i + 1]
        }
    }
    return []
}

let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(twoSum(arr, 5));
export{}
