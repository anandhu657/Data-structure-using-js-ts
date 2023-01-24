function correspondingOccurence(string) {
    let newStr = ""
    let count = 1
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === string.charAt(i + 1)) {
            count++;
        } else {
            newStr += (count + string.charAt(i))
            count = 1;
        }
    }
    console.log(newStr);
}

correspondingOccurence("aaabbc")