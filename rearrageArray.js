function rearrange(arr) {
    let temp = []
    let flag = true
    let end = arr.length
    let start = 0
    for (let i = 0; i < arr.length; i++) {
        if (flag) {
            temp[i] = arr[--end]
        } else {
            temp[i] = arr[start++]
        }
        flag = !flag
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = temp[i]
    }
    console.log(arr);
}

let arr = [1, 2, 3, 4, 5, 6, 7]
rearrange(arr)