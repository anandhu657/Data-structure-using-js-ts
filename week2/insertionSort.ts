function insertionSort(arr: number[]): void {
    for (let i = 1; i < arr.length; i++) {
        let key: number = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = key
    }

    console.log(arr);
}

let arr: number[] = [8, 4, 5, 3, 9, 12, 6]
insertionSort(arr)
export{}