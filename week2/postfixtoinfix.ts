function getInfix(exp: string): string {
    let stk: string[] = []

    for (let i = 0; i < exp.length; i++) {
        if (isOperand(exp[i])) {
            stk.push(exp[i])
        } else {
            let op1: string = stk.pop()!
            let op2: string = stk.pop()!
            stk.pop()
            stk.push("(" + op2 + exp[i] + op1 + ")")
        }
    }
    return stk[stk.length - 1]
}

function isOperand(x: string): boolean {
    return (x >= 'a' && x <= 'z') || (x >= 'A' && x <= 'Z')
}

let exp:string = "ab*c+"
console.log(getInfix(exp));
