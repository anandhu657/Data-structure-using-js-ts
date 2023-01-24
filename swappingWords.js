function swapping(str){
    let splitedString = str.split(" ")
    let temp = splitedString[0]
    splitedString[0] = splitedString[1]
    splitedString[1] = temp
    let joinString = splitedString.join(" ")
    console.log(joinString);
}

swapping("Good morning")