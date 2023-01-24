function compare(str1, str2) {
    if (str1.toLowerCase() === str2.toLowerCase())
        console.log("The strings are similar");
    else
        console.log("The strings are not similar");
}

const string1 = "Anandhu"
const string2 = "Anandhu"
compare(string1, string2)

// using regex method

function stringPattern(str1, str2) {
    // const pattern = /str1/gi;
    const pattern = new RegExp(str1, "gi")
    const checking = pattern.test(str2)
    if (checking) {
        console.log("The strings are similar");
    } else {
        console.log("The strings are not similar");
    }
}

stringPattern(string1, string2)