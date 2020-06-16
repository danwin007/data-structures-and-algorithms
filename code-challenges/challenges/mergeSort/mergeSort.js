'use strict';

const mergeSort = array => {
  //check if arr can be split
  if(array.length < 2) return array;
  //get middle index
  const middle = Math.floor(array.length/2);
  //split arr into two sides
  const leftSide = array.slice(0, middle);
  const rightSide = array.slice(middle, array.length);
  //use recursion to continue splitting
  console.log('split:', leftSide, rightSide);
  return merge(mergeSort(leftSide), mergeSort(rightSide));

}

const merge = (left, right) => {
  //create new arr
  const result = [];
  //check if either arr is empty
  while(left.length && right.length) {
  // find lower val
  if(left[0] <= right[0]) {
    // add left val
    result.push(left.shift());
  } else {
    // add right val
    result.push(right.shift());  
  }
}
  // merge left arr
  while(left.length) result.push(left.shift());
  // merge right arr
  while(right.length) result.push(right.shift());
  // return result arr
  console.log('result:', result);
  return result;
}

// console.log(mergeSort([8,4,23,42,16,15]));

// console.log(mergeSort([20,18,12,8,5,-2]));

// console.log(mergeSort([5,12,7,5,5,7]));

// console.log(mergeSort([2,3,5,7,13,11]));

module.exports = mergeSort;