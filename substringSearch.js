function searchSubstring(str, substring) {
    let check = str.indexOf(substring);
    if (check != -1) {
        console.log("it contains the substring");
    } else {
        console.log("it doesn't contains the string");
    }
}

const string = "anandhu"
const substring = "nan"
searchSubstring(string, substring)