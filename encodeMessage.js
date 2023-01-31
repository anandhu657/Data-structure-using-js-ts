function encode(str, key) {
    let newKey = key % 26;
    let charArray = ""
    for (let i = 0; i < str.length; i++) {
        let letterPosition = str.charCodeAt(i) + newKey
        if (letterPosition <= 122) {
            charArray += String.fromCharCode(letterPosition)
        } else {
            charArray += String.fromCharCode(96 + letterPosition % 122)
        }
    }

    console.log(charArray);
}

encode("hai", 2)