function palindrome(str: string): void {
    let j: number = str.length - 1
    let flag: boolean = true

    for (let i = 0; i < (str.length / 2); i++) {
        if (str[i] !== str[j]) {
            flag = false
            break;
        }
        j--;
    }

    if(flag){
        console.log("Given string is a palindrome");
    }else{
        console.log("Given string is not a palindrome");
    }
}

let str:string = "malayalam"
palindrome(str)

export {}