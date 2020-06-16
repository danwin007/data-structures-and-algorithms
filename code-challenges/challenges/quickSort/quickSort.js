'use strict';

function quickSort(arr, start, end) {
  if( start >= end) {
    return;
  } 

  let index = partition(arr, start, end);

  quickSort(arr, start, index - 1);
  quickSort(arr, index + 1, end);

}

function partition(arr, start, end) {
  let pivotIndex = start;
  let pivotValue = arr[end];

  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }

  swap(arr, pivotIndex, end);
  console.log('pivotindex', pivotIndex);
  return pivotIndex;
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

let arr1 = [8,4,23,42,16,15];
console.log(quickSort(arr1, 0, arr1.length - 1));
console.log('arr1', arr1);

module.exports = quickSort;