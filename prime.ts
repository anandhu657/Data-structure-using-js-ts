function prime(num: number): boolean {
    let flag: boolean = true

    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            flag = false
            break
        }
    }
    return flag
}

let num: number = 25
let flag: boolean = prime(num)
if (flag) {
    console.log("Prime number");
} else {
    console.log("Not a prime number");
}

export { }