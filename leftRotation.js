function leftRotation(arr, start) {
    start %= arr.length
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[(start + i) % arr.length]);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
leftRotation(arr, 14)