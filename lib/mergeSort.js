let array = [2,6,4,2,7,9,6,4];

function merge(array) {
  if(array.length === 1) {
    return array
  }
  let middle = Math.floor(array.length/2);
  let leftSide = array.slice(0, middle);
  let rightSide = array.slice(middle)
  
  return combine(merge(rightSide), merge(leftSide))
  
}

function combine (leftSide, rightSide) {
  let result = [];
  let l = 0;
  let r = 0;
  while (r < rightSide.length && l < leftSide.length) {
    if (rightSide[r] < leftSide[l]) {
      result.push(rightSide[r]);
      r++
    } else {
      result.push(leftSide[l]);
      l++
    }
  }
  return result.concat(leftSide.slice(l)).concat(rightSide.slice(r))
}

merge(array)

module.exports = merge;