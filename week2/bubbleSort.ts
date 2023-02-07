function bubbleSort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                let temp: number = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    console.log(arr);
}

let arr: number[] = [8, 4, 5, 3, 9, 12, 6]
bubbleSort(arr)

export { }