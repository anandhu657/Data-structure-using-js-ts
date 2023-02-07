function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1
        let key = arr[i]
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = key
    }
    console.log("second largest ", arr[arr.length - 2]);
    console.log("second smallest ", arr[1]);

}

let arr = [5, 3, 7, -1, 6, -8]
insertionSort(arr)
