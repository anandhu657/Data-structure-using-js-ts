function threeLargest(arr) {
    let first = second = third = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            third = second
            second = first
            first = arr[i]
        } else if (arr[i] > second) {
            third = second
            second = arr[i]
        } else if (arr[i] > third) {
            third = arr[i]
        }
    }

    console.log("First three largest elements:");
    console.log(`first: ${first} \nsecond: ${second} \nthird: ${third}`);
}

let arr = [7, 3, 8, 3, 5, 6, 9]
threeLargest(arr)