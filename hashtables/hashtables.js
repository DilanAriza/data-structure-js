class hashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    hashMethod(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }

        return hash;
    }

    set(key, value) {
        const address = this.hashMethod(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }

        this.data[address].push([key, value]);
        return this.data;
    }

    get(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];

        if (currentBucket) {

            for (let i = 0; i < currentBucket.length; i++) {

                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }

            }

        }

        return undefined;
    }

    remove(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];

        if (currentBucket) {

            for (let i = 0; i < currentBucket.length; i++) {

                if (currentBucket[i][0] === key) {
                    const deletedValue = this.data[address][i];
                    this.data[address].splice(i, 1);
                    return deletedValue;
                }

            }

        }

        return undefined;
    }

    getAllKeys() {
        const keys = [];

        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                for (let j = 0; j < this.data[i].length; j++) {
                    keys.push([this.data[i][j][0]]);
                }
            }
        }

        return keys;
    }
}

const myHashTable = new hashTable(50);
myHashTable.set('Diego', 1990);
myHashTable.set('Mariana', 1998);
console.log(myHashTable.set('Alejandra', 2000));

console.log(myHashTable.get('Mariana'));

console.log(myHashTable.getAllKeys());

console.log(myHashTable.remove('Diego'));

console.log(myHashTable.getAllKeys());