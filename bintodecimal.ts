function binaryToDecimal(num: number): void {
    let length: number = num.toString().length;
    let decimal: number = 0;
    for (let i = 0; i < length; i++) {
        let rem = num % 10
        if (rem !== 0) {
            decimal += (rem * (2 ** i))
        }
        num = Math.floor(num / 10)        
    }
    console.log(decimal);

}

let binary: number = 1110000
binaryToDecimal(binary)