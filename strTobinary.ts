function binaryConverstion(str: String): void {
    let binary:String = ""
    for (let i = 0; i < str.length; i++) {
        let val: number = str[i].charCodeAt(0)
        let bin: String = ""

        while (val > 0) {
            if (val % 2 === 1) {
                bin += '1'
            } else {
                bin += '0'
            }
            val = Math.floor(val / 2)
        }
        let split: String[] = bin.split("")
        split = split.reverse()
        bin = split.join("")
        binary += bin + " "
    }
    console.log(binary);
    
}

let str: String = "geeks"
binaryConverstion(str)