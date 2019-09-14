let array = [2,4,7,8,5,4,2,325,75,2354,8976,9634,24]

function quickSort(array) {
  if (array.length <= 1) {
    return array
  }
  let pivot = array.pop();
  let greaterThan = [];
  let lessThan = [];
  for(let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      lessThan.push(array[i])
    } else {
      greaterThan.push(array[i])
    }
  }
  return quickSort(lessThan).concat(pivot).concat(quickSort(greaterThan))
}

quickSort(array)



module.exports = quickSort;