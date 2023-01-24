function zeroToEnd(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            arr[count++] = arr[i]
        }
    }

    while (count < arr.length) {
        arr[count++] = 0
    }

    console.log("Array is: " + arr);
}

let arr = [2, 0, 5, 8, 0, 1]
zeroToEnd(arr)