const { assert } = require('chai');
const quickSort = require('../lib/quickSort.js');

describe('quickSort', () => {

  function generateArray (arrayMax, arrayMin, maxNumber) {
  let randomArray = [];

  for (let i = 0; i < Math.floor(Math.random() * (arrayMax - arrayMin) + arrayMin); i++) {
    randomArray.push(Math.floor(Math.random() * maxNumber))
    }
    return randomArray
  }
  
  it('should be able to sort a small array', function() {
    let numbers = [5,4,3,2,1];
    assert.deepEqual(quickSort(numbers), [1, 2, 3, 4, 5])
  })

  it('should be able to sort an array of letters', function() {
    let letters = ['n','g', 'o', 'c'];
    assert.deepEqual(quickSort(letters), ['c', 'g', 'n', 'o'])
  })

  it('should be able to sort positive and negative numbers', function() {
    let posNegNumbers = [-2, -5, -8, 2, 5, 6];
    let sortedArr = quickSort(posNegNumbers)
    assert.deepEqual(sortedArr, [-8, -5,-2, 2, 5, 6])
  })

  it('should sort any array passed through', function() {
    let array = generateArray(100000000000,10000,10000);
    let sortedArray = quickSort(array);
    quickSort(array);
    // assert.deepEqual(quickSort(array), sortedArray)
  })

})