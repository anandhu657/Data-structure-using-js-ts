function pushToarray(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr.push(arr[i])
    }
    console.log(arr);
}

let arr = [1, 2, 3]
pushToarray(arr)