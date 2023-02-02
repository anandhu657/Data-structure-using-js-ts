function quicksort(arr: number[]): number[] {
    quickSortHelper(arr, 0, arr.length - 1)
    return arr
}

function quickSortHelper(arr: number[], start: number, end: number) {
    if (start >= end) {
        return
    }

    let pivot: number = start
    let left: number = start + 1
    let right: number = end

    while (left <= right) {
        if (arr[left] > arr[pivot] && arr[right] < arr[pivot]) {
            swap(arr, left, right)
            left++
            right--
        }
        if (arr[left] <= arr[pivot]) {
            left++
        }
        if (arr[right] >= arr[pivot]) {
            right--
        }
    }
    swap(arr, right, pivot)
    quickSortHelper(arr, start, right - 1)
    quickSortHelper(arr, right + 1, end)
}

function swap(arr: number[], i:number, j:number): void {
    let temp: number = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

let arr: number[] = [38, 2, 41, 56, 12, 11, 22, 41]
console.log(quicksort(arr));
export{}