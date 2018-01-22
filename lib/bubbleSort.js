var pry = require('pryjs');

function bubbleSort(numbers) {
  var sortedArray = []
  numbers.forEach((num, index) => {
    for(var i = 0; i < (numbers.length * numbers.length); i++) {
      if (numbers[i%(numbers.length)] <= num){

        sortedArray[index] = num
      }
    }
  })
  return sortedArray
}

module.exports = bubbleSort