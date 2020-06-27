'use strict';




class HashTable {
  constructor( initialCapacity = 2) {
    this.buckets = new Array(initialCapacity);
    this.collisions = 0;
  }

  hash(key) {
    //takes key, returns index
    let hashValue = 0;
    const stringTypeKey = `${key}${typeof key}`;

    for ( let i = 0; i < stringTypeKey.length; i++) {
      const charCode = stringTypeKey.charCodeAt(i);
      hashValue += charCode << (i * 8);
    }

    //need to change way it hashes to match reading example



    return hashValue;
  }

  add(key, value) {
    //set
    const bucketIndex = this.contains(key);
  
    if (this.buckets[bucketIndex]) {
      this.buckets[bucketIndex].push({key, value});

      if (this.buckets[bucketIndex].length > 1) { this.collisions++; }
    } else {
      this.buckets[bucketIndex] = [{key, value}];
    }
    return this;
  }

  get(key) {
  
    const bucketIndex = this.contains(key); 

    for (let arrayIndex = 0; arrayIndex < this.buckets[bucketIndex].length; arrayIndex++) {
      const entry = this.buckets[bucketIndex][arrayIndex];
      if(entry.key === key) {
        return entry.value;
      }
    }

  }

  contains(key) {
    //returns boolean?
    const indexHash = this.hash(key);
    const index = indexHash % this.buckets.length;
    return index;
  }
}

const myTable = new HashTable();
myTable.add('bat', 3);
myTable.add('rat', 2);
myTable.add('cat', 1);

console.log('collisions: ', myTable.collisions); 
console.log(myTable.buckets);

console.log(myTable.contains('cat'));
console.log(myTable.get('cat'));
console.log(myTable.get('bat'));


module.exports = { HashTable };