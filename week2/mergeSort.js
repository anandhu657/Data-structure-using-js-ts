function merge_sort(arr) {
    if (arr.length < 2)
        return arr

    let middle = Math.floor(arr.length / 2)
    let left = arr.slice(0, middle)
    let right = arr.slice(middle)

    return merge(merge_sort(left), merge_sort(right))
}

function merge(left, right) {
    let sorted_arr = []

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            sorted_arr.push(left.shift())
        } else {
            sorted_arr.push(right.shift())
        }
    }
    return [...sorted_arr, ...left, ...right]
}

let arr = [4, 2, 8, 2, 9, 5, 7, 8, 4]

let sorted_arr = merge_sort(arr)
console.log(sorted_arr);