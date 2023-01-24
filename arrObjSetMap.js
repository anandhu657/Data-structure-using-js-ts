// Array
const arr = new Array('anandhu', 8, 9)
arr.push(10)
arr.push(11)
arr.pop()
arr.shift()
arr.unshift(7)
console.log(arr.length)

for (let item of arr) {
    console.log(item);
}


// Objects

const obj = {
    name: "anandhu",
    age: 21
}

obj.place = "Erattupetta"
delete obj.name

for (let item in obj) {
    console.log(item + ":" + obj[item]);
}



// set 

const set = new Set([10, 11])
set.add("anandhu")
console.log(set.has(10))
set.delete(11)
set.add(10)
const values = set.values()
const keys = set.keys()
const entries = set.entries()

for (let item of values) {
    console.log("........" + item);
}

for (let key of keys) {
    console.log("++++" + key);
}

for (let entry of entries) {
    console.log(entry);
}
set.clear()

// for(let item of set){
//     console.log(item);
// }

set.forEach((item) => {
    console.log(item);
})


// map

const map = new Map([['name', "anandhu"], ['age', 21]])

map.set('place', 'Erattupetta')
console.log(map.get('place'))
console.log(map.has('place'))
map.delete('place')
map.clear()

for (let item of map) {
    console.log(item);
}