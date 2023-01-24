function secondLargest(arr) {
    let first = second = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            first = arr[i]
        } else if (arr[i] > second) {
            second = arr[i]
        }
    }
    console.log(`second largest element is: ${second}`);
}

let arr = [8, 3, 4, 5, 1]
secondLargest(arr)