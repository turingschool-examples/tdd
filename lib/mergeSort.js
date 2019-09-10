let assert = require('chai').assert;
let randomNumber = require('../exercises/randomNumber');

let randomArray = createRandomArray(1000);

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let midIndex = Math.floor(array.length/2);
  let rightSide = array.slice(midIndex);
  let leftSide = array.slice(0, midIndex)

  return merge(mergeSort(rightSide), mergeSort(leftSide));
}

function merge(rightSide, leftSide) {
  let result = [];
  let r = 0;
  let l = 0;

  while (r < rightSide.length && l < leftSide.length){
    if(rightSide[r] < leftSide[l]) {
      result.push(rightSide[r]);
      r++;
    } else { 
      result.push(leftSide[l]) 
      l++;
    }
  }
  return result.concat(leftSide.slice(l)).concat(rightSide.slice(r));
}
  
mergeSort(randomArray);