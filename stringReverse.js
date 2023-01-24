function reverse(str) {
    let reversedString = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    return reversedString
}

const string = "anandhu"
console.log(reverse(string));


// using built  in method

function reverseBBuiltin(str) {
    let splitedString = str.split("")
    let reversed = splitedString.reverse();
    let joinedString = reversed.join("")
    return joinedString
}

const data = "hai"
console.log(reverseBBuiltin(data))