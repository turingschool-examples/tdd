let assert = require('chai').assert;
let randomNumber = require('../exercises/randomNumber');

let randomArray = randomNumber.createRandomArray(100);

function insertionSort (array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1 + i; j >= 0; j--) {
      console.log(array)
      while (array[j] < array[j-1]) {
        [ array[j -1], array[j] ] = [ array[j], array[j -1] ];
      }
    }
  }
  return array
}

insertionSort(randomArray)
