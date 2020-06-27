'use strict';

//input is string
//hash
//when you have collision, return that word

function hash(key, size) {

  let sum = 0;
  for (let i in key) sum += key.charCodeAt(i);
  sum *= 599; 
    
  return sum % size;
}

function repeatedWord(str) {
  let words = str.split(/[., -!?]/g);
  let hashmap = new Array(words.length * 5);

  for (let i = 0; i < words.length; i++) {
    if (words[i] === '' ) continue;
    let indx = hash(words[i].toLowerCase(), hashmap.length);

    //possible collision
    if (hashmap[indx]) {
      //collision is same key value
      let item = hashmap[indx];
      while (item) {
        if (item.key === words[i].toLowerCase()) return item.key;
        item = item.next;
      }

        //collision is correct collision
        hashmap[indx] = {key: words[i].toLowerCase(), next: hashmap[indx] };
      
    } 
    else {
      //no collision
      hashmap[indx] = {key: words[i].toLowerCase()};
    }
  }

  return null;
}

console.log(repeatedWord('test this test'));
