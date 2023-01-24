function stringToInt(str){
    let intValue = ""
    for(let i = 0;i<str.length;i++){
        intValue += str[i].charCodeAt()
    }
    return intValue
}

const string = "hai"
console.log(stringToInt(string));