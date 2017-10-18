function quickSort(array) {
 if (array.length <= 1) {
    // console.log('basecase')
    return array;
  }
  let result = [];
  const pivot = array.shift(); //pivot is first elem in array
  // console.log('pivot: ' + pivot)
  // console.log('array: ' + array)
  let lesserArray = [];
  let greaterArray = [];
  while (array.length) {
    if (array[0] >= pivot) {
      greaterArray.push(array.shift());
      // console.log('greater: ' + greaterArray);
    } else {
      lesserArray.push(array.shift());
      // console.log('lesser: ' + lesserArray);
    }
  }
  return reJoin(pivot, quickSort(lesserArray), quickSort(greaterArray));
  
};


function reJoin(pivot, lesserArray, greaterArray) {
  // console.log('reJoin')
  return [...lesserArray, pivot, ...greaterArray];
  
};


module.exports = quickSort