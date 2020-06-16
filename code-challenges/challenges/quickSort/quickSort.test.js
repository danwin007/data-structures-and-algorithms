'use strict';

const quickSort = require('./quickSort.js');

describe('Happy Path', () => {
  
    it('can sort the given demo array', () => {
      let arr = [8,4,23,42,16,15];
      quickSort(arr, 0, arr.length-1)
      expect(arr).toEqual([4,8,15,16,23,42]);
    });

    it('can sort a reversed array', () => {
      let arr = [20,18,12,8,5,-2];
      quickSort(arr, 0, arr.length-1)

      expect(arr).toEqual([-2, 5, 8, 12, 18, 20]);
    });

    it('can sort an array with duplicates', () => {
      let arr = [5,12,7,5,5,7];
      quickSort(arr, 0, arr.length-1)

      expect(arr).toEqual([5, 5, 5, 7, 7, 12]);
    });

    it('can sort a nearly sorted array', () => {
      let arr = [2,3,5,7,13,11];
      quickSort(arr, 0, arr.length-1)

      expect(arr).toEqual([2, 3, 5, 7, 11, 13]);
    });

});

