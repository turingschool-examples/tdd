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


});

// const assert = require('chai').assert;
// const BubbleSort = require('../lib/BubbleSort.js');