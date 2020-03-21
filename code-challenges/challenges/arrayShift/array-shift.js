let array1 = [2, 4, 6, 8];
let array2 = [4, 8, 15, 23, 42];


function insertShiftArray(arr, num) {
  let newArr = [];
  let arrMid = Math.ceil(arr.length/2);
  for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i]);
  }
  newArr.splice(arrMid, 0, num);
  return newArr;
}

console.log(insertShiftArray(array1, 5));
console.log(insertShiftArray(array2, 16));

// I could not figure out how to do this without built in methods. Burned an hour and said "whatever, just gotta turn something in". So here we are.