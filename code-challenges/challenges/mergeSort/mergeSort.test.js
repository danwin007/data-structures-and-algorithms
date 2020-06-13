'use strict';

const mergeSort = require('./mergeSort.js');

describe('Happy Path', () => {
  
    it('can sort the given demo array', () => {
      let arr = [8,4,23,42,16,15];

      expect(mergeSort(arr)).toEqual([4,8,15,16,23,42]);
    });

    it('can sort a reversed array', () => {
      let arr = [20,18,12,8,5,-2];

      expect(mergeSort(arr)).toEqual([-2, 5, 8, 12, 18, 20]);
    });

    it('can sort an array with duplicates', () => {
      let arr = [5,12,7,5,5,7];

      expect(mergeSort(arr)).toEqual([5, 5, 5, 7, 7, 12]);
    });

});

