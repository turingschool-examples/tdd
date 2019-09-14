const { assert } = require('chai');
const bubbleSort = require('../lib/bubbleSort.js');

describe('bubbleSort', () => {

  function generateArray (arrayMax, arrayMin, maxNumber) {
    let randomArray = [];

    for (let i = 0; i < Math.floor(Math.random() * (arrayMax - arrayMin) + arrayMin); i++) {
    randomArray.push(Math.floor(Math.random() * maxNumber))
    }
    return randomArray
  }

  it('should be able to sort a small array', function() {
    let numbers = [5,4,3,2,1];
    assert.deepEqual(bubbleSort(numbers), [1, 2, 3, 4, 5])
  })

  it('should be able to sort an array of letters', function() {
    let letters = ['n','g', 'o', 'c'];
    assert.deepEqual(bubbleSort(letters), ['c', 'g', 'n', 'o'])
  })

  it('should be able to sort positive and negative numbers', function() {
    let posNegNumbers = [-2, -5, -8, 2, 5, 6];
    assert.deepEqual(bubbleSort(posNegNumbers), [-8, -5,-2, 2, 5, 6])
  })
  
  it('should be able to sort a random array', function() {
    let randomNumbers = [];

    for (let i = 0; i < 10; i++) {
    randomNumbers.push(Math.floor(Math.random() * 20) + 1)
    }
    bubbleSort(randomNumbers)
  })

  it('should sort any array passed through', function() {
    let array = generateArray(10000,10000,100);
    bubbleSort(array)
  })

})