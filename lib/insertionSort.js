function insertionSort (array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1 + i; j >= 0; j--) {
      while (array[j] < array[j-1]) {
        [ array[j -1], array[j] ] = [ array[j], array[j -1] ];
      }
    }
  }
  return array
}

module.exports = insertionSort;