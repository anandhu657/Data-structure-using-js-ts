function binaryConverstion(num: number): void {
    let rem: number[] = []
    let i: number = 0
    while (num > 0) {
        rem[i++] = num % 2
        num = Math.floor(num / 2)
    }

    for (let i = rem.length - 1; i >= 0; i--) {
        console.log(rem[i]);
    }
}

let num:number =  112
binaryConverstion(112)

export{}