function factorial(value: number): number {
    if (value === 2) {
        return 2
    } else {
        return value * factorial(value-1)
    }
}


console.log(factorial(5))