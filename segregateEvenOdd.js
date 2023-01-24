function segregate(arr) {
    let j = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            if (j < i) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
            j++
        }
    }

    console.log(arr);
}

// let arr = [1, 9, 5, 3, 2, 6, 7, 1, 1]
let arr = [1, 3, 2, 4, 7, 6, 9, 10]
segregate(arr)