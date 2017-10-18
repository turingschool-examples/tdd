const assert  = require('chai').assert;
const insertionSort = require('../scripts/InsertionSort.js');


describe('insertion-sort', () => {

 it('should be a function', function () {
    assert.isFunction(insertionSort);

  });

it('should take a small array of numbers and sort them', function () {
    const smallArray = [9, 6, 7, 8, 5];
    assert.deepEqual(insertionSort(smallArray),[5, 6, 7, 8, 9]);
  
  });

it('should take a small array of letters and sort them', function () {
    const smallNum = ['c', 'a', 'e', 'f', 'd', 'b'];
    assert.deepEqual(insertionSort(smallNum), ['a', 'b', 'c', 'd', 'e', 'f']);

  });

it('should take a small array of negative and positive numbers and sort them', function () {
    const negArr = [-5, 1,  -1, 0, -3, 2, -4, -2];
    assert.deepEqual(insertionSort(negArr), [-5, -4, -3, -2, -1, 0, 1, 2]);


  });

it.skip('should take a large array of unsorted numbers and sort them', function () {
    const largeArray = [];
    assert.deepEqual(insertionSort(largeArray), []);
    
  });


});