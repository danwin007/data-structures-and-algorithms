'use strict';

arr1 =[4,8,15,16,23,42];
key1 = 15;

arr2 = [11,22,33,44,55,66,77];
key2 = 90;

function binarySearch(arr, key){
  let tracker = 0;
  for( let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      console.log(i);
      tracker = 1;
    }
  } if (tracker === 0){
    console.log(-1);
  }
}

binarySearch(arr1, key1);
binarySearch(arr2, key2);