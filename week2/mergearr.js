function merge(arr) {
    // let n = arr.length
    // for (let i = 0; i < n; i++) {
    //     arr.push(arr[i])
    // }
    // console.log(arr);
    return [...arr,...arr]
}

let arr = [1, 2, 3]
console.log(merge(arr))