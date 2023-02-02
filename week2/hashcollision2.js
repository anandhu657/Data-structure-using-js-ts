class Hash {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }

        return total % this.size
    }

    set(key, value) {
        const index = this.hash(key)
        let bucket = this.table[index]
        if (!bucket) {
            this.table[index] = [[key, value]]
        } else {
            let sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem) {
                sameKeyItem[1] = value
            } else {
                bucket.push([key, value])
            }
        }
    }

    get(key) {
        const index = this.hash(key)
        let bucket = this.table[index]

        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem)
                return sameKeyItem[1]
        }
        return undefined
    }

    remove(key) {
        const index = this.hash(key)
        let bucket = this.table[index]
        if (bucket) {
            let sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem)
                bucket.splice(bucket.indexOf(sameKeyItem), 1)
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i])
                console.log(this.table[i]);
        }
    }
}

const hashTable = new Hash(5)
hashTable.set('name', 'anandhu')
hashTable.set('naem', 'akash')
console.log(hashTable.get("naem"))
hashTable.remove('naem')
hashTable.display()