function arrayNotation(arr, d) {
    let count = 0
    for (let i = d; i < arr.length; i++) {
        if (count === (arr.length)) {
            break;
        }
        console.log(arr[i]);
        count++
        if (i === (arr.length - 1)) {
            i = -1
        }


    }
}

let arr = [1, 2, 3, 4, 5, 6, 7]
arrayNotation(arr, 2)