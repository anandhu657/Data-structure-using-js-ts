function selectionSort(arr: number[]): void {
    for (let i = 0; i < arr.length - 1; i++) {
        let min: number = i
        for (let j = i + 1; j < arr.length; j++)
            if (arr[j] < arr[min]) min = j
        let temp: number = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
    }

    console.log(arr);    
}

let arr: number[] = [8, 4, 5, 3, 9, 12, 6]
selectionSort(arr)
export{}