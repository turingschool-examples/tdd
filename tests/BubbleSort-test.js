const assert  = require('chai').assert;
const bubbleSort = require('../scripts/BubbleSort.js');


describe('bubble-Sort', () => {


  it('should be a function', function () {
    assert.isFunction(bubbleSort);

  });


  it('should take a small array of numbers and sort them', function () {
    const smallArray = [3, 5, 1, 2, 4];
    assert.deepEqual(bubbleSort(smallArray),[1, 2, 3, 4, 5]);
  
  });

  it('should take a small array of letters and sort them', function () {
    const smallNum = ['c', 'a', 'e', 'f', 'd', 'b'];
    assert.deepEqual(bubbleSort(smallNum), ['a', 'b', 'c', 'd', 'e', 'f']);

  });

  it('should take a small array of negative and positive numbers and sort them', function () {
    const negArr = [-5, 1,  -1, 0, -3, 2, -4, -2];
    assert.deepEqual(bubbleSort(negArr), [-5, -4, -3, -2, -1, 0, 1, 2]);


  });

  it.skip('should take a large array of unsorted numbers and sort them', function () {
    const largeArray = [];
    assert.deepEqual(bubbleSort(largeArray), []);
    
  });


});

// const assert = require('chai').assert;
// const BubbleSort = require('../lib/BubbleSort.js');