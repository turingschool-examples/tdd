let assert = require('chai').assert;
let randomNumber = require('../exercises/randomNumber');

let randomArray = randomNumber.createRandomArray(100);

function quickSort (array) {
    if (array.length <= 1) {
    return array;
  }
  let pivot = array.pop();
  let greaterThan = [];
  let lessThan = [];
  for (i = 0; i < array.length; i++) {
    if(array[i] < pivot) {
      lessThan.push(array[i]);
    } else {
      greaterThan.push(array[i]);
    }
  }
  return [...quickSort(lessThan), pivot, ...quickSort(greaterThan)];
}

quickSort(randomArray);