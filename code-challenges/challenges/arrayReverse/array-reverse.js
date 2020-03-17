let array1 = [1, 2, 3, 4, 5];
let array2 = ['one', 'two', 'three', 'four', 'five'];

function reverseArray(arr) {
  let newArr = [];
  for ( let i = arr.length -1; i >= 0; i--) {
    newArr.push(arr[i]);
  } 
  return newArr;
}

console.log(reverseArray(array1));
console.log(reverseArray(array2));