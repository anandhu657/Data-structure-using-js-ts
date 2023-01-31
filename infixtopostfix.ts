function infixtoPostfix(exp: string): void {
    let stk: string[] = []
    let result: string = ""

    for (let i = 0; i < exp.length; i++) {
        let temp: string = exp[i]

        if ((temp >= 'a' && temp <= 'z') || (temp >= 'A' && temp <= 'Z') || (temp >= '0' && temp <= '9')) {
            result += temp
        } else if (temp === '(') {
            stk.push('(')
        } else if (temp === ')') {
            while (stk[stk.length - 1] != '(') {
                result += stk[stk.length - 1]
                stk.pop()
            }
            stk.pop()
        } else {
            while (stk.length != 0 && (precedence(temp) <= precedence(stk[stk.length - 1]))) {
                result += stk[stk.length - 1]
                stk.pop()
            }
            stk.push(temp)
        }
    }

    while (stk.length != 0) {
        result += stk[stk.length - 1]
        stk.pop()
    }

    console.log(result);

}

function precedence(opr: string): number {
    if (opr == '^') {
        return 3
    } else if (opr == '*' || opr == '/') {
        return 2
    } else if (opr == '+' || opr == '-') {
        return 1
    }
    return -1
}

let expr: string = "a+b*(c^d-e)^(f+g*h)-i"
infixtoPostfix(expr)