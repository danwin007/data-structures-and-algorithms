'use strict';

const leftJoin = require('./left-join');

let synArray = new Array(15);
let antArray = new Array(20);

const hash = (key, hashMapSize) => {
  let sum = 0;

  for (i in key) {
      let letter = key.charCodeAt(i);
      sum += letter;
  }

  sum *= 599;
  return sum % hashMapSize;
};

// if (synArray[hash('fond', 15)]){
//   synArray[hash('fond', 15)] = {synArray[hash('fond', 15)], next: ['fond', 'enamored']};
// } else {
//   synArray[hash('fond', 15)] = ['fond', 'enamored'];
// }

// if (synArray[hash('wrath', 15)])
//     synArray[hash('wrath', 15)] = {synArray[hash('wrath', 15)], next: ['wrath', 'anger']};
// else 
//     synArray[hash('wrath', 15)] = ['wrath', 'anger'];


// if (antArray[hash('fond', 20)])
//     antArray[hash('fond', 20)] = {prev: antArray[hash('fond', 20)], next: ['fond', 'averse']};
// else 
//     antArray[hash('fond', 20)] = ['fond', 'averse'];

// if (antArray[hash('wrath', 20)])
//     antArray[hash('wrath', 20)] = { prev: antArray[hash('wrath', 20)], next: ['wrath', 'delight']};
// else 
//     antArray[hash('wrath', 20)] = ['wrath', 'delight'];