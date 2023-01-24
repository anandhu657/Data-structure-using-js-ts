function fibonocci(value: number): number {
    if (value < 2) {
        return 1
    } else {
        return fibonocci(value - 1) + fibonocci(value - 2)
    }
}
console.log(fibonocci(5));
